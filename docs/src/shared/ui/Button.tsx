import React from 'react';

import { cn } from '@/shared/utils/cn';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {}

export function Button(props: ButtonProps) {
  const { className, children, ...rest } = props;

  return (
    <button
      {...rest}
      className={cn(
        'box-border cursor-pointer text-inherit',
        'rounded border border-solid border-slate-500',
        'p-2 align-middle',
        'inline-flex flex-[0_0_auto] content-center items-center justify-center',
        'active:hover:border-slate-400 active:hover:transition-all',
        'disabled:cursor-not-allowed disabled:border-gray-600 disabled:bg-gray-500 disabled:text-gray-400 active:disabled:border-gray-600',
        className,
      )}
    >
      {children}
    </button>
  );
}
