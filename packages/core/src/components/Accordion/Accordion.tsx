import {
  forwardRef,
  useState,
  createContext,
  useContext,
  useId,
  type HTMLAttributes,
  type ReactNode,
  type ButtonHTMLAttributes,
} from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../../utils/cn';
import './Accordion.css';

interface AccordionContextValue {
  type: 'single' | 'multiple';
  expandedItems: string[];
  toggleItem: (id: string) => void;
}

const AccordionContext = createContext<AccordionContextValue | null>(null);

const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('Accordion components must be used within an Accordion');
  }
  return context;
};

export type AccordionType = 'single' | 'multiple';
export type AccordionSize = 'sm' | 'md' | 'lg';

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  type?: AccordionType;
  defaultExpanded?: string[];
  size?: AccordionSize;
  children: ReactNode;
}

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  ({ type = 'single', defaultExpanded = [], size = 'md', className, children, ...props }, ref) => {
    const [expandedItems, setExpandedItems] = useState<string[]>(defaultExpanded);

    const toggleItem = (id: string) => {
      setExpandedItems((prev) => {
        if (type === 'single') {
          return prev.includes(id) ? [] : [id];
        }
        return prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      });
    };

    return (
      <AccordionContext.Provider value={{ type, expandedItems, toggleItem }}>
        <div
          ref={ref}
          className={cn('ds-accordion', `ds-accordion--${size}`, className)}
          {...props}
        >
          {children}
        </div>
      </AccordionContext.Provider>
    );
  }
);

Accordion.displayName = 'Accordion';

interface AccordionItemContextValue {
  id: string;
  isExpanded: boolean;
  toggle: () => void;
}

const AccordionItemContext = createContext<AccordionItemContextValue | null>(null);

const useAccordionItemContext = () => {
  const context = useContext(AccordionItemContext);
  if (!context) {
    throw new Error('AccordionItem components must be used within an AccordionItem');
  }
  return context;
};

export interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
  children: ReactNode;
}

export const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ value, className, children, ...props }, ref) => {
    const { expandedItems, toggleItem } = useAccordionContext();
    const id = useId();
    const isExpanded = expandedItems.includes(value);
    const toggle = () => toggleItem(value);

    return (
      <AccordionItemContext.Provider value={{ id, isExpanded, toggle }}>
        <div
          ref={ref}
          className={cn('ds-accordion__item', isExpanded && 'ds-accordion__item--expanded', className)}
          {...props}
        >
          {children}
        </div>
      </AccordionItemContext.Provider>
    );
  }
);

AccordionItem.displayName = 'AccordionItem';

export interface AccordionTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const AccordionTrigger = forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ className, children, ...props }, ref) => {
    const { id, isExpanded, toggle } = useAccordionItemContext();

    return (
      <button
        ref={ref}
        type="button"
        id={`${id}-trigger`}
        className={cn('ds-accordion__trigger', className)}
        onClick={toggle}
        aria-expanded={isExpanded}
        aria-controls={`${id}-content`}
        {...props}
      >
        <span className="ds-accordion__trigger-text">{children}</span>
        <span className={cn('ds-accordion__icon', isExpanded && 'ds-accordion__icon--expanded')} aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </button>
    );
  }
);

AccordionTrigger.displayName = 'AccordionTrigger';

export interface AccordionContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const AccordionContent = forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ className, children }, ref) => {
    const { id, isExpanded } = useAccordionItemContext();

    return (
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            ref={ref}
            id={`${id}-content`}
            role="region"
            aria-labelledby={`${id}-trigger`}
            className={cn('ds-accordion__content', className)}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          >
            <div className="ds-accordion__content-inner">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
);

AccordionContent.displayName = 'AccordionContent';
