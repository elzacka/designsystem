import {
  forwardRef,
  useCallback,
  useEffect,
  useId,
  useRef,
  type HTMLAttributes,
  type ReactNode,
} from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../../utils/cn';
import './Modal.css';

export type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  size?: ModalSize;
  closeOnBackdrop?: boolean;
  closeOnEscape?: boolean;
  className?: string;
  children: ReactNode;
}

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      isOpen,
      onClose,
      size = 'md',
      closeOnBackdrop = true,
      closeOnEscape = true,
      className,
      children,
    },
    ref
  ) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const previousActiveElement = useRef<HTMLElement | null>(null);
    const titleId = useId();

    // Focus trap implementation
    const handleFocusTrap = useCallback((e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      const modal = modalRef.current;
      if (!modal) return;

      const focusableElements = modal.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement?.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement?.focus();
      }
    }, []);

    useEffect(() => {
      if (isOpen) {
        previousActiveElement.current = document.activeElement as HTMLElement;
        document.body.style.overflow = 'hidden';
        modalRef.current?.focus();
      } else {
        document.body.style.overflow = '';
        previousActiveElement.current?.focus();
      }
      return () => {
        document.body.style.overflow = '';
      };
    }, [isOpen]);

    useEffect(() => {
      if (!isOpen) return;

      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape' && closeOnEscape) {
          onClose();
        }
      };

      document.addEventListener('keydown', handleEscape);
      document.addEventListener('keydown', handleFocusTrap);
      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.removeEventListener('keydown', handleFocusTrap);
      };
    }, [isOpen, closeOnEscape, onClose, handleFocusTrap]);

    return (
      <AnimatePresence>
        {isOpen && (
          <div className="ds-modal-container">
            <motion.div
              className="ds-modal__backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeOnBackdrop ? onClose : undefined}
              aria-hidden="true"
            />
            <div className="ds-modal__wrapper">
              <motion.div
                ref={(node) => {
                  (modalRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
                  if (typeof ref === 'function') ref(node);
                  else if (ref) ref.current = node;
                }}
                role="dialog"
                aria-modal="true"
                aria-labelledby={titleId}
                tabIndex={-1}
                className={cn('ds-modal', `ds-modal--${size}`, className)}
                data-modal-title-id={titleId}
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ duration: 0.2 }}
              >
                {children}
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    );
  }
);

Modal.displayName = 'Modal';

export interface ModalHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const ModalHeader = forwardRef<HTMLDivElement, ModalHeaderProps>(
  ({ className, children, ...props }, ref) => {
    const modalTitleId =
      typeof document !== 'undefined'
        ? (ref as React.RefObject<HTMLDivElement>)?.current
            ?.closest('[data-modal-title-id]')
            ?.getAttribute('data-modal-title-id')
        : undefined;

    return (
      <div
        ref={ref}
        id={modalTitleId || undefined}
        className={cn('ds-modal__header', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

ModalHeader.displayName = 'ModalHeader';

export interface ModalBodyProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const ModalBody = forwardRef<HTMLDivElement, ModalBodyProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('ds-modal__body', className)} {...props}>
      {children}
    </div>
  )
);

ModalBody.displayName = 'ModalBody';

export interface ModalFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const ModalFooter = forwardRef<HTMLDivElement, ModalFooterProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('ds-modal__footer', className)} {...props}>
      {children}
    </div>
  )
);

ModalFooter.displayName = 'ModalFooter';
