import {
  forwardRef,
  useState,
  useRef,
  useEffect,
  type InputHTMLAttributes,
  type ReactNode,
  type KeyboardEvent,
} from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../../utils/cn';
import './Search.css';

export type SearchSize = 'sm' | 'md' | 'lg';

export interface SearchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
  size?: SearchSize;
  onSearch?: (value: string) => void;
  onChange?: (value: string) => void;
  onClear?: () => void;
  loading?: boolean;
  showClearButton?: boolean;
  suggestions?: string[];
  onSuggestionSelect?: (suggestion: string) => void;
  leftIcon?: ReactNode;
}

export const Search = forwardRef<HTMLInputElement, SearchProps>(
  (
    {
      size = 'md',
      onSearch,
      onChange,
      onClear,
      loading = false,
      showClearButton = true,
      suggestions = [],
      onSuggestionSelect,
      leftIcon,
      className,
      value,
      defaultValue,
      placeholder = 'Søk...',
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState(defaultValue?.toString() || '');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const inputRef = useRef<HTMLInputElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    const currentValue = value !== undefined ? value.toString() : internalValue;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      if (value === undefined) {
        setInternalValue(newValue);
      }
      onChange?.(newValue);
      setShowSuggestions(newValue.length > 0 && suggestions.length > 0);
      setSelectedIndex(-1);
    };

    const handleClear = () => {
      if (value === undefined) {
        setInternalValue('');
      }
      onChange?.('');
      onClear?.();
      inputRef.current?.focus();
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        if (selectedIndex >= 0 && suggestions[selectedIndex]) {
          handleSuggestionSelect(suggestions[selectedIndex]);
        } else {
          onSearch?.(currentValue);
        }
        setShowSuggestions(false);
      } else if (e.key === 'Escape') {
        setShowSuggestions(false);
        setSelectedIndex(-1);
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => Math.min(prev + 1, suggestions.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => Math.max(prev - 1, -1));
      }
    };

    const handleSuggestionSelect = (suggestion: string) => {
      if (value === undefined) {
        setInternalValue(suggestion);
      }
      onChange?.(suggestion);
      onSuggestionSelect?.(suggestion);
      setShowSuggestions(false);
      setSelectedIndex(-1);
    };

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
          setShowSuggestions(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const combinedRef = (node: HTMLInputElement) => {
      (inputRef as React.MutableRefObject<HTMLInputElement | null>).current = node;
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    };

    return (
      <div ref={wrapperRef} className={cn('ds-search', `ds-search--${size}`, className)}>
        <div className="ds-search__input-wrapper">
          <span className="ds-search__icon" aria-hidden="true">
            {leftIcon || (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            )}
          </span>
          <input
            ref={combinedRef}
            type="search"
            className="ds-search__input"
            value={currentValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onFocus={() => currentValue.length > 0 && suggestions.length > 0 && setShowSuggestions(true)}
            placeholder={placeholder}
            role="combobox"
            aria-expanded={showSuggestions}
            aria-haspopup="listbox"
            aria-autocomplete="list"
            {...props}
          />
          {loading && (
            <span className="ds-search__loader" aria-label="Laster...">
              <svg className="ds-search__loader-icon" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" fill="none" strokeDasharray="32" strokeLinecap="round" />
              </svg>
            </span>
          )}
          {showClearButton && currentValue && !loading && (
            <button
              type="button"
              className="ds-search__clear"
              onClick={handleClear}
              aria-label="Tøm søk"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
        <AnimatePresence>
          {showSuggestions && suggestions.length > 0 && (
            <motion.ul
              role="listbox"
              className="ds-search__suggestions"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.15 }}
            >
              {suggestions.map((suggestion, index) => (
                <li
                  key={suggestion}
                  role="option"
                  aria-selected={index === selectedIndex}
                  className={cn(
                    'ds-search__suggestion',
                    index === selectedIndex && 'ds-search__suggestion--selected'
                  )}
                  onClick={() => handleSuggestionSelect(suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

Search.displayName = 'Search';
