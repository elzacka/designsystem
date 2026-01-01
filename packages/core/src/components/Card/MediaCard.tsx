import { forwardRef, useState, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';
import './MediaCard.css';

export type MediaCardLayout = 'horizontal' | 'vertical';
export type MediaCardSize = 'sm' | 'md' | 'lg';

export interface MediaCardProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  /** Image URL */
  image?: string;
  /** Alt text for image */
  imageAlt?: string;
  /** Fallback content when image fails to load */
  imageFallback?: ReactNode;
  /** Card title */
  title: string;
  /** Subtitle or author */
  subtitle?: string;
  /** Description text */
  description?: string;
  /** Max lines for description (1-3) */
  descriptionLines?: 1 | 2 | 3;
  /** Layout direction */
  layout?: MediaCardLayout;
  /** Size preset */
  size?: MediaCardSize;
  /** Badge content (e.g., "E" for explicit) */
  badge?: ReactNode;
  /** Additional metadata */
  metadata?: ReactNode;
  /** Actions slot */
  actions?: ReactNode;
  /** Click handler */
  onSelect?: () => void;
  /** Highlight search terms in title/subtitle/description */
  highlightTerms?: string;
}

export const MediaCard = forwardRef<HTMLElement, MediaCardProps>(
  (
    {
      image,
      imageAlt = '',
      imageFallback,
      title,
      subtitle,
      description,
      descriptionLines = 2,
      layout = 'horizontal',
      size = 'md',
      badge,
      metadata,
      actions,
      onSelect,
      highlightTerms,
      className,
      ...props
    },
    ref
  ) => {
    const [imageError, setImageError] = useState(false);

    const highlightText = (text: string): ReactNode => {
      if (!highlightTerms?.trim()) return text;

      try {
        const parts = text.split(new RegExp(`(${highlightTerms})`, 'gi'));
        return parts.map((part, index) =>
          part.toLowerCase() === highlightTerms.toLowerCase() ? (
            <mark key={`${part}-${index}`} className="ds-media-card__highlight">
              {part}
            </mark>
          ) : (
            part
          )
        );
      } catch {
        return text;
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (onSelect && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault();
        onSelect();
      }
    };

    return (
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
      <article
        ref={ref}
        className={cn(
          'ds-media-card',
          `ds-media-card--${layout}`,
          `ds-media-card--${size}`,
          onSelect && 'ds-media-card--interactive',
          className
        )}
        onClick={onSelect}
        onKeyDown={handleKeyDown}
        tabIndex={onSelect ? 0 : undefined}
        role={onSelect ? 'button' : undefined}
        aria-label={`${title}${subtitle ? `, ${subtitle}` : ''}`}
        {...props}
      >
        <div className="ds-media-card__image-container">
          {imageError || !image ? (
            <div className="ds-media-card__image ds-media-card__image--fallback">
              {imageFallback}
            </div>
          ) : (
            <img
              src={image}
              alt={imageAlt}
              className="ds-media-card__image"
              loading="lazy"
              onError={() => setImageError(true)}
            />
          )}
          {badge && <span className="ds-media-card__badge">{badge}</span>}
        </div>

        <div className="ds-media-card__content">
          <h3 className="ds-media-card__title">{highlightTerms ? highlightText(title) : title}</h3>

          {subtitle && (
            <p className="ds-media-card__subtitle">
              {highlightTerms ? highlightText(subtitle) : subtitle}
            </p>
          )}

          {description && (
            <p
              className={cn(
                'ds-media-card__description',
                `ds-media-card__description--lines-${descriptionLines}`
              )}
            >
              {highlightTerms ? highlightText(description) : description}
            </p>
          )}

          {metadata && <div className="ds-media-card__metadata">{metadata}</div>}
        </div>

        {actions && (
          /* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */
          <div
            className="ds-media-card__actions"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
            role="group"
            aria-label="Handlinger"
          >
            {actions}
          </div>
        )}
      </article>
    );
  }
);

MediaCard.displayName = 'MediaCard';
