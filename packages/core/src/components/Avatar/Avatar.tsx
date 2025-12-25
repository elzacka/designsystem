import { forwardRef, type ImgHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';
import './Avatar.css';

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  size?: AvatarSize;
  name?: string;
  src?: string;
}

export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(
  ({ size = 'md', name, src, className, ...props }, ref) => {
    const initials = name
      ? name
          .split(' ')
          .map((n) => n[0])
          .slice(0, 2)
          .join('')
          .toUpperCase()
      : '';

    return (
      <span
        ref={ref}
        className={cn('ds-avatar', `ds-avatar--${size}`, className)}
        role="img"
        aria-label={name}
      >
        {src ? (
          <img src={src} alt={name || 'Brukeravatar'} className="ds-avatar__image" {...props} />
        ) : (
          <span className="ds-avatar__fallback">{initials}</span>
        )}
      </span>
    );
  }
);

Avatar.displayName = 'Avatar';
