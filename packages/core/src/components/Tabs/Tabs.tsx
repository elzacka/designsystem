import {
  createContext,
  forwardRef,
  useContext,
  useId,
  useState,
  type HTMLAttributes,
  type ReactNode,
  type KeyboardEvent,
} from 'react';
import { cn } from '../../utils/cn';
import './Tabs.css';

type TabsContextValue = {
  activeTab: string;
  setActiveTab: (id: string) => void;
  baseId: string;
};

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabsContext() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('Tabs components must be used within a Tabs provider');
  }
  return context;
}

export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  children: ReactNode;
}

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  ({ defaultValue, value, onValueChange, className, children, ...props }, ref) => {
    const baseId = useId();
    const [internalValue, setInternalValue] = useState(defaultValue || '');

    const activeTab = value !== undefined ? value : internalValue;
    const setActiveTab = (id: string) => {
      if (value === undefined) {
        setInternalValue(id);
      }
      onValueChange?.(id);
    };

    return (
      <TabsContext.Provider value={{ activeTab, setActiveTab, baseId }}>
        <div ref={ref} className={cn('ds-tabs', className)} {...props}>
          {children}
        </div>
      </TabsContext.Provider>
    );
  }
);

Tabs.displayName = 'Tabs';

export interface TabsListProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const TabsList = forwardRef<HTMLDivElement, TabsListProps>(
  ({ className, children, ...props }, ref) => {
    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
      const tabs = Array.from(
        e.currentTarget.querySelectorAll('[role="tab"]:not([disabled])')
      ) as HTMLButtonElement[];
      const currentIndex = tabs.findIndex((tab) => tab === document.activeElement);

      let nextIndex = currentIndex;
      if (e.key === 'ArrowRight') {
        nextIndex = (currentIndex + 1) % tabs.length;
      } else if (e.key === 'ArrowLeft') {
        nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
      } else if (e.key === 'Home') {
        nextIndex = 0;
      } else if (e.key === 'End') {
        nextIndex = tabs.length - 1;
      } else {
        return;
      }

      e.preventDefault();
      tabs[nextIndex]?.focus();
    };

    return (
      <div
        ref={ref}
        role="tablist"
        className={cn('ds-tabs__list', className)}
        onKeyDown={handleKeyDown}
        {...props}
      >
        {children}
      </div>
    );
  }
);

TabsList.displayName = 'TabsList';

export interface TabProps extends HTMLAttributes<HTMLButtonElement> {
  value: string;
  disabled?: boolean;
  children: ReactNode;
}

export const Tab = forwardRef<HTMLButtonElement, TabProps>(
  ({ value, disabled = false, className, children, ...props }, ref) => {
    const { activeTab, setActiveTab, baseId } = useTabsContext();
    const isActive = activeTab === value;

    return (
      <button
        ref={ref}
        type="button"
        role="tab"
        id={`${baseId}-tab-${value}`}
        aria-controls={`${baseId}-panel-${value}`}
        aria-selected={isActive}
        tabIndex={isActive ? 0 : -1}
        disabled={disabled}
        className={cn('ds-tabs__tab', isActive && 'ds-tabs__tab--active', className)}
        onClick={() => setActiveTab(value)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Tab.displayName = 'Tab';

export interface TabPanelProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
  children: ReactNode;
}

export const TabPanel = forwardRef<HTMLDivElement, TabPanelProps>(
  ({ value, className, children, ...props }, ref) => {
    const { activeTab, baseId } = useTabsContext();
    const isActive = activeTab === value;

    if (!isActive) return null;

    return (
      <div
        ref={ref}
        role="tabpanel"
        id={`${baseId}-panel-${value}`}
        aria-labelledby={`${baseId}-tab-${value}`}
        tabIndex={0}
        className={cn('ds-tabs__panel', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

TabPanel.displayName = 'TabPanel';
