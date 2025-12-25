import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';
import './Pagination.css';

export interface PaginationProps extends HTMLAttributes<HTMLElement> {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
}

export const Pagination = forwardRef<HTMLElement, PaginationProps>(
  ({ currentPage, totalPages, onPageChange, siblingCount = 1, className, ...props }, ref) => {
    const range = (start: number, end: number) => {
      const length = end - start + 1;
      return Array.from({ length }, (_, i) => start + i);
    };

    const getPageNumbers = () => {
      const totalPageNumbers = siblingCount * 2 + 5;

      if (totalPages <= totalPageNumbers) {
        return range(1, totalPages);
      }

      const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
      const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

      const shouldShowLeftDots = leftSiblingIndex > 2;
      const shouldShowRightDots = rightSiblingIndex < totalPages - 1;

      if (!shouldShowLeftDots && shouldShowRightDots) {
        const leftRange = range(1, 3 + 2 * siblingCount);
        return [...leftRange, 'dots', totalPages];
      }

      if (shouldShowLeftDots && !shouldShowRightDots) {
        const rightRange = range(totalPages - (2 + 2 * siblingCount), totalPages);
        return [1, 'dots', ...rightRange];
      }

      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [1, 'dots', ...middleRange, 'dots', totalPages];
    };

    const pages = getPageNumbers();

    return (
      <nav ref={ref} aria-label="Paginering" className={cn('ds-pagination', className)} {...props}>
        <button
          type="button"
          className="ds-pagination__button"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Forrige side"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M10 12L6 8L10 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="ds-pagination__pages">
          {pages.map((page, index) => {
            if (page === 'dots') {
              return (
                <span key={`dots-${index}`} className="ds-pagination__dots" aria-hidden="true">
                  ...
                </span>
              );
            }

            const pageNumber = page as number;
            const isActive = pageNumber === currentPage;

            return (
              <button
                key={pageNumber}
                type="button"
                className={cn('ds-pagination__page', isActive && 'ds-pagination__page--active')}
                onClick={() => onPageChange(pageNumber)}
                aria-label={`Side ${pageNumber}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {pageNumber}
              </button>
            );
          })}
        </div>

        <button
          type="button"
          className="ds-pagination__button"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Neste side"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M6 4L10 8L6 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </nav>
    );
  }
);

Pagination.displayName = 'Pagination';
