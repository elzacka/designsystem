import { forwardRef, useEffect, useRef, type HTMLAttributes, type ReactNode } from 'react';
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

    useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
        modalRef.current?.focus();
      }
      return () => {
        document.body.style.overflow = '';
      };
    }, [isOpen]);

    useEffect(() => {
      if (!closeOnEscape) return;

      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape' && isOpen) {
          onClose();
        }
      };

      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen, closeOnEscape, onClose]);

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
                ref={ref || modalRef}
                role="dialog"
                aria-modal="true"
                tabIndex={-1}
                className={cn('ds-modal', `ds-modal--${size}`, className)}
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
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('ds-modal__header', className)} {...props}>
      {children}
    </div>
  )
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
