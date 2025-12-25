import {
  forwardRef,
  useState,
  useRef,
  useEffect,
  type HTMLAttributes,
  type ReactNode,
} from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../../utils/cn';
import './Tooltip.css';

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps extends Omit<HTMLAttributes<HTMLDivElement>, 'content'> {
  content: ReactNode;
  position?: TooltipPosition;
  delay?: number;
  children: ReactNode;
}

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  ({ content, position = 'top', delay = 200, children, className, ...props }, ref) => {
    const [isVisible, setIsVisible] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const triggerRef = useRef<HTMLDivElement>(null);

    const showTooltip = () => {
      timeoutRef.current = setTimeout(() => {
        setIsVisible(true);
      }, delay);
    };

    const hideTooltip = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setIsVisible(false);
    };

    useEffect(() => {
      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }, []);

    return (
      <div
        ref={ref || triggerRef}
        className={cn('ds-tooltip-wrapper', className)}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onFocus={showTooltip}
        onBlur={hideTooltip}
        {...props}
      >
        {children}
        <AnimatePresence>
          {isVisible && (
            <motion.div
              role="tooltip"
              className={cn('ds-tooltip', `ds-tooltip--${position}`)}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.15 }}
            >
              {content}
              <span className="ds-tooltip__arrow" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

Tooltip.displayName = 'Tooltip';
