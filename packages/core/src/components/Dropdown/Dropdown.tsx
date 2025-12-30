import {
  forwardRef,
  useState,
  useRef,
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
import './Dropdown.css';

interface DropdownContextValue {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
}

const DropdownContext = createContext<DropdownContextValue | null>(null);

const useDropdown = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error('Dropdown components must be used within a Dropdown');
  }
  return context;
};

export type DropdownAlign = 'start' | 'center' | 'end';

export interface DropdownProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  align?: DropdownAlign;
}

export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  ({ children, align = 'start', className, ...props }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggle = useCallback(() => setIsOpen((prev) => !prev), []);
    const close = useCallback(() => setIsOpen(false), []);

    useClickOutside(dropdownRef, close, isOpen);
    useEscapeKey(close, isOpen);

    return (
      <DropdownContext.Provider value={{ isOpen, toggle, close }}>
        <div
          ref={mergeRefs(dropdownRef, ref)}
          className={cn('ds-dropdown', `ds-dropdown--align-${align}`, className)}
          {...props}
        >
          {children}
        </div>
      </DropdownContext.Provider>
    );
  }
);

Dropdown.displayName = 'Dropdown';

export interface DropdownTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const DropdownTrigger = forwardRef<HTMLButtonElement, DropdownTriggerProps>(
  ({ children, className, onClick, ...props }, ref) => {
    const { toggle, isOpen } = useDropdown();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      toggle();
      onClick?.(e);
    };

    return (
      <button
        ref={ref}
        type="button"
        className={cn('ds-dropdown__trigger', className)}
        onClick={handleClick}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        {...props}
      >
        {children}
      </button>
    );
  }
);

DropdownTrigger.displayName = 'DropdownTrigger';

export interface DropdownMenuProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const DropdownMenu = forwardRef<HTMLDivElement, DropdownMenuProps>(
  ({ children, className }, ref) => {
    const { isOpen } = useDropdown();

    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={ref}
            role="menu"
            className={cn('ds-dropdown__menu', className)}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
);

DropdownMenu.displayName = 'DropdownMenu';

export interface DropdownItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  destructive?: boolean;
}

export const DropdownItem = forwardRef<HTMLButtonElement, DropdownItemProps>(
  ({ children, destructive = false, className, onClick, ...props }, ref) => {
    const { close } = useDropdown();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(e);
      close();
    };

    return (
      <button
        ref={ref}
        type="button"
        role="menuitem"
        className={cn(
          'ds-dropdown__item',
          destructive && 'ds-dropdown__item--destructive',
          className
        )}
        onClick={handleClick}
        {...props}
      >
        {children}
      </button>
    );
  }
);

DropdownItem.displayName = 'DropdownItem';

export const DropdownSeparator = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      role="separator"
      className={cn('ds-dropdown__separator', className)}
      {...props}
    />
  )
);

DropdownSeparator.displayName = 'DropdownSeparator';
