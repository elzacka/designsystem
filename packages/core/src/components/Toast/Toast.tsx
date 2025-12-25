import {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useState,
  type HTMLAttributes,
  type ReactNode,
} from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../../utils/cn';
import './Toast.css';

export type ToastVariant = 'default' | 'success' | 'warning' | 'error' | 'info';
export type ToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';

export interface ToastData {
  id: string;
  title?: string;
  message: string;
  variant?: ToastVariant;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

type ToastContextValue = {
  toasts: ToastData[];
  addToast: (toast: Omit<ToastData, 'id'>) => string;
  removeToast: (id: string) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}

export interface ToastProviderProps {
  position?: ToastPosition;
  children: ReactNode;
}

export function ToastProvider({ position = 'bottom-right', children }: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastData[]>([]);

  const addToast = useCallback((toast: Omit<ToastData, 'id'>) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { ...toast, id }]);

    if (toast.duration !== 0) {
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, toast.duration || 5000);
    }

    return id;
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      <ToastContainer position={position} toasts={toasts} onDismiss={removeToast} />
    </ToastContext.Provider>
  );
}

interface ToastContainerProps {
  position: ToastPosition;
  toasts: ToastData[];
  onDismiss: (id: string) => void;
}

function ToastContainer({ position, toasts, onDismiss }: ToastContainerProps) {
  return (
    <div className={cn('ds-toast-container', `ds-toast-container--${position}`)}>
      <AnimatePresence>
        {toasts.map((toast) => (
          <Toast key={toast.id} {...toast} onDismiss={() => onDismiss(toast.id)} />
        ))}
      </AnimatePresence>
    </div>
  );
}

export interface ToastProps extends Omit<ToastData, 'id'> {
  onDismiss?: () => void;
  className?: string;
}

export const Toast = forwardRef<HTMLDivElement, ToastProps>(
  ({ title, message, variant = 'default', action, onDismiss, className }, ref) => {
    return (
      <motion.div
        ref={ref}
        role="alert"
        className={cn('ds-toast', `ds-toast--${variant}`, className)}
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <div className="ds-toast__content">
          {title && <p className="ds-toast__title">{title}</p>}
          <p className="ds-toast__message">{message}</p>
        </div>
        <div className="ds-toast__actions">
          {action && (
            <button type="button" className="ds-toast__action" onClick={action.onClick}>
              {action.label}
            </button>
          )}
          {onDismiss && (
            <button type="button" className="ds-toast__dismiss" onClick={onDismiss} aria-label="Lukk">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          )}
        </div>
      </motion.div>
    );
  }
);

Toast.displayName = 'Toast';
