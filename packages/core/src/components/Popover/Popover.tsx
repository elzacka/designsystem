import {
  forwardRef,
  useState,
  useRef,
  useId,
  createContext,
  useContext,
  useCallback,
  type HTMLAttributes,
  type ReactNode,
  type ButtonHTMLAttributes,
} from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../../utils/cn';
import { mergeRefs } from '../../utils/mergeRefs';
import { useClickOutside } from '../../hooks/useClickOutside';
import { useEscapeKey } from '../../hooks/useEscapeKey';
import { CloseIcon } from '../Icons';
import './Popover.css';

interface PopoverContextValue {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
  triggerId: string;
  contentId: string;
}

const PopoverContext = createContext<PopoverContextValue | null>(null);

const usePopover = () => {
  const context = useContext(PopoverContext);
  if (!context) {
    throw new Error('Popover components must be used within a Popover');
  }
  return context;
};

export type PopoverPosition = 'top' | 'bottom' | 'left' | 'right';
export type PopoverAlign = 'start' | 'center' | 'end';

export interface PopoverProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  position?: PopoverPosition;
  align?: PopoverAlign;
}

export const Popover = forwardRef<HTMLDivElement, PopoverProps>(
  ({ children, position = 'bottom', align = 'center', className, ...props }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const popoverRef = useRef<HTMLDivElement>(null);
    const generatedId = useId();
    const idRef = useRef(`popover${generatedId}`);

    const toggle = useCallback(() => setIsOpen((prev) => !prev), []);
    const close = useCallback(() => setIsOpen(false), []);

    useClickOutside(popoverRef, close, isOpen);
    useEscapeKey(close, isOpen);

    return (
      <PopoverContext.Provider
        value={{
          isOpen,
          toggle,
          close,
          triggerId: `${idRef.current}-trigger`,
          contentId: `${idRef.current}-content`,
        }}
      >
        <div
          ref={mergeRefs(popoverRef, ref)}
          className={cn(
            'ds-popover',
            `ds-popover--${position}`,
            `ds-popover--align-${align}`,
            className
          )}
          {...props}
        >
          {children}
        </div>
      </PopoverContext.Provider>
    );
  }
);

Popover.displayName = 'Popover';

export interface PopoverTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const PopoverTrigger = forwardRef<HTMLButtonElement, PopoverTriggerProps>(
  ({ children, className, onClick, ...props }, ref) => {
    const { toggle, isOpen, triggerId, contentId } = usePopover();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      toggle();
      onClick?.(e);
    };

    return (
      <button
        ref={ref}
        type="button"
        id={triggerId}
        className={cn('ds-popover__trigger', className)}
        onClick={handleClick}
        aria-expanded={isOpen}
        aria-controls={contentId}
        {...props}
      >
        {children}
      </button>
    );
  }
);

PopoverTrigger.displayName = 'PopoverTrigger';

export interface PopoverContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const PopoverContent = forwardRef<HTMLDivElement, PopoverContentProps>(
  ({ children, className }, ref) => {
    const { isOpen, contentId, triggerId } = usePopover();

    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={ref}
            id={contentId}
            role="dialog"
            aria-labelledby={triggerId}
            className={cn('ds-popover__content', className)}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.15 }}
          >
            {children}
            <span className="ds-popover__arrow" />
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
);

PopoverContent.displayName = 'PopoverContent';

export interface PopoverCloseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

export const PopoverClose = forwardRef<HTMLButtonElement, PopoverCloseProps>(
  ({ children, className, onClick, ...props }, ref) => {
    const { close } = usePopover();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(e);
      close();
    };

    return (
      <button
        ref={ref}
        type="button"
        className={cn('ds-popover__close', className)}
        onClick={handleClick}
        aria-label="Lukk"
        {...props}
      >
        {children || <CloseIcon size={16} />}
      </button>
    );
  }
);

PopoverClose.displayName = 'PopoverClose';
