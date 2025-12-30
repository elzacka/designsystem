import {
  forwardRef,
  useState,
  useRef,
  useCallback,
  type InputHTMLAttributes,
  type ReactNode,
  type KeyboardEvent,
} from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../../utils/cn';
import { mergeRefs } from '../../utils/mergeRefs';
import { useClickOutside } from '../../hooks/useClickOutside';
import { SearchIcon, CloseIcon, SpinnerIcon } from '../Icons';
import './Search.css';

export type SearchSize = 'sm' | 'md' | 'lg';

export interface SearchProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'size' | 'onChange'
> {
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
    const [internalValue, setInternalValue] = useState(defaultValue?.toString() ?? '');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const inputRef = useRef<HTMLInputElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    const currentValue = value !== undefined ? String(value ?? '') : internalValue;

    const closeSuggestions = useCallback(() => setShowSuggestions(false), []);
    useClickOutside(wrapperRef, closeSuggestions, showSuggestions);

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

    const handleSuggestionSelect = (suggestion: string) => {
      if (value === undefined) {
        setInternalValue(suggestion);
      }
      onChange?.(suggestion);
      onSuggestionSelect?.(suggestion);
      setShowSuggestions(false);
      setSelectedIndex(-1);
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

    return (
      <div ref={wrapperRef} className={cn('ds-search', `ds-search--${size}`, className)}>
        <div className="ds-search__input-wrapper">
          <span className="ds-search__icon" aria-hidden="true">
            {leftIcon || <SearchIcon />}
          </span>
          <input
            ref={mergeRefs(inputRef, ref)}
            type="search"
            className="ds-search__input"
            value={currentValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onFocus={() =>
              currentValue.length > 0 && suggestions.length > 0 && setShowSuggestions(true)
            }
            placeholder={placeholder}
            role="combobox"
            aria-expanded={showSuggestions}
            aria-controls="search-suggestions"
            aria-haspopup="listbox"
            aria-autocomplete="list"
            {...props}
          />
          {loading && (
            <span className="ds-search__loader" aria-label="Laster...">
              <SpinnerIcon className="ds-search__loader-icon" />
            </span>
          )}
          {showClearButton && currentValue && !loading && (
            <button
              type="button"
              className="ds-search__clear"
              onClick={handleClear}
              aria-label="Tøm søk"
            >
              <CloseIcon size={16} />
            </button>
          )}
        </div>
        <AnimatePresence>
          {showSuggestions && suggestions.length > 0 && (
            <motion.ul
              id="search-suggestions"
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
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      handleSuggestionSelect(suggestion);
                    }
                  }}
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
