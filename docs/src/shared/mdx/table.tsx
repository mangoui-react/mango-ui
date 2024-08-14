import React from 'react';

import { cn } from '@/shared/utils/cn';

interface RootProps extends React.ComponentPropsWithoutRef<'table'> {}
function Root({ className, children, ...props }: RootProps) {
  return (
    <table
      {...props}
      className={cn(
        'w-full overflow-hidden border border-b-0 border-slate-300 text-left dark:border-slate-700',
        className,
      )}
    >
      {children}
    </table>
  );
}

interface HeaderProps extends React.ComponentPropsWithoutRef<'thead'> {}
function Header({ className, children, ...props }: HeaderProps) {
  return (
    <thead {...props} className={cn('bg-slate-100 dark:bg-slate-700', className)}>
      {children}
    </thead>
  );
}

interface RowProps extends React.ComponentPropsWithoutRef<'tr'> {}
function Row({ children, ...props }: RowProps) {
  return <tr {...props}>{children}</tr>;
}

interface HeaderCellProps extends React.ComponentPropsWithoutRef<'th'> {}
function HeaderCell({ className, children, ...props }: HeaderCellProps) {
  return (
    <th {...props} className={cn('p-3', className)}>
      {children}
    </th>
  );
}

interface BodyProps extends React.ComponentPropsWithoutRef<'tbody'> {}
function Body({ className, children, ...props }: BodyProps) {
  return (
    <tbody {...props} className={cn('text-slate-800 dark:text-slate-100', className)}>
      {children}
    </tbody>
  );
}

interface NameCellProps extends React.ComponentPropsWithoutRef<'th'> {}
function NameCell({ className, children, ...props }: NameCellProps) {
  return (
    <th
      {...props}
      className={cn(
        'p-3 text-sm text-green-700 shadow-[inset_0_-1px_rgb(203,213,225)] dark:text-green-200 dark:shadow-[inset_0_-1px_rgb(51,65,85)]',
        className,
      )}
    >
      {children}
    </th>
  );
}

interface CellProps extends React.ComponentPropsWithoutRef<'td'> {}
function Cell({ className, children, ...props }: CellProps) {
  return (
    <td
      {...props}
      className={cn(
        'p-3 text-sm shadow-[inset_0_-1px_rgb(203,213,225)] dark:shadow-[inset_0_-1px_rgb(51,65,85)]',
        className,
      )}
    >
      {children}
    </td>
  );
}

export const Table = {
  Root,
  Header,
  Row,
  HeaderCell,
  Body,
  NameCell,
  Cell,
};
