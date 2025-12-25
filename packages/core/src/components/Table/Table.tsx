import {
  forwardRef,
  type HTMLAttributes,
  type ThHTMLAttributes,
  type TdHTMLAttributes,
} from 'react';
import { cn } from '../../utils/cn';
import './Table.css';

export type TableSize = 'sm' | 'md' | 'lg';
export type TableVariant = 'default' | 'striped';

export interface TableProps extends HTMLAttributes<HTMLTableElement> {
  size?: TableSize;
  variant?: TableVariant;
  stickyHeader?: boolean;
}

export const Table = forwardRef<HTMLTableElement, TableProps>(
  (
    { size = 'md', variant = 'default', stickyHeader = false, className, children, ...props },
    ref
  ) => (
    <div className="ds-table-wrapper">
      <table
        ref={ref}
        className={cn(
          'ds-table',
          `ds-table--${size}`,
          `ds-table--${variant}`,
          stickyHeader && 'ds-table--sticky-header',
          className
        )}
        {...props}
      >
        {children}
      </table>
    </div>
  )
);

Table.displayName = 'Table';

export type TableHeadProps = HTMLAttributes<HTMLTableSectionElement>;

export const TableHead = forwardRef<HTMLTableSectionElement, TableHeadProps>(
  ({ className, children, ...props }, ref) => (
    <thead ref={ref} className={cn('ds-table__head', className)} {...props}>
      {children}
    </thead>
  )
);

TableHead.displayName = 'TableHead';

export type TableBodyProps = HTMLAttributes<HTMLTableSectionElement>;

export const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ className, children, ...props }, ref) => (
    <tbody ref={ref} className={cn('ds-table__body', className)} {...props}>
      {children}
    </tbody>
  )
);

TableBody.displayName = 'TableBody';

export type TableFootProps = HTMLAttributes<HTMLTableSectionElement>;

export const TableFoot = forwardRef<HTMLTableSectionElement, TableFootProps>(
  ({ className, children, ...props }, ref) => (
    <tfoot ref={ref} className={cn('ds-table__foot', className)} {...props}>
      {children}
    </tfoot>
  )
);

TableFoot.displayName = 'TableFoot';

export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  selected?: boolean;
}

export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ selected = false, className, children, ...props }, ref) => (
    <tr
      ref={ref}
      className={cn('ds-table__row', selected && 'ds-table__row--selected', className)}
      aria-selected={selected || undefined}
      {...props}
    >
      {children}
    </tr>
  )
);

TableRow.displayName = 'TableRow';

export interface TableHeaderProps extends ThHTMLAttributes<HTMLTableCellElement> {
  sortable?: boolean;
  sorted?: 'asc' | 'desc' | false;
}

export const TableHeader = forwardRef<HTMLTableCellElement, TableHeaderProps>(
  ({ sortable = false, sorted = false, className, children, onClick, ...props }, ref) => (
    <th
      ref={ref}
      className={cn(
        'ds-table__header',
        sortable && 'ds-table__header--sortable',
        sorted && `ds-table__header--sorted-${sorted}`,
        className
      )}
      aria-sort={sorted === 'asc' ? 'ascending' : sorted === 'desc' ? 'descending' : undefined}
      onClick={sortable ? onClick : undefined}
      {...props}
    >
      <span className="ds-table__header-content">
        {children}
        {sortable && (
          <span className="ds-table__sort-icon" aria-hidden="true">
            {sorted === 'asc' ? '↑' : sorted === 'desc' ? '↓' : '↕'}
          </span>
        )}
      </span>
    </th>
  )
);

TableHeader.displayName = 'TableHeader';

export interface TableCellProps extends TdHTMLAttributes<HTMLTableCellElement> {
  numeric?: boolean;
}

export const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ numeric = false, className, children, ...props }, ref) => (
    <td
      ref={ref}
      className={cn('ds-table__cell', numeric && 'ds-table__cell--numeric', className)}
      {...props}
    >
      {children}
    </td>
  )
);

TableCell.displayName = 'TableCell';

export interface TableCaptionProps extends HTMLAttributes<HTMLTableCaptionElement> {
  position?: 'top' | 'bottom';
}

export const TableCaption = forwardRef<HTMLTableCaptionElement, TableCaptionProps>(
  ({ position = 'bottom', className, children, ...props }, ref) => (
    <caption
      ref={ref}
      className={cn('ds-table__caption', `ds-table__caption--${position}`, className)}
      {...props}
    >
      {children}
    </caption>
  )
);

TableCaption.displayName = 'TableCaption';
