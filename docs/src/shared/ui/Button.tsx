import React from 'react';

import { cn } from '@/shared/utils/cn';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {}

export default function Button(props: ButtonProps) {
  const { className, children, ...rest } = props;

  return (
    <button
      {...rest}
      className={cn(
        'cursor-pointer text-inherit box-border',
        'border border-solid border-border',
        'align-middle',
        'inline-flex flex-[0_0_auto] items-center justify-center content-center',
        'active:hover:border-primary active:hover:transition-all',
        'disabled:cursor-not-allowed disabled:bg-disabled-bg disabled:text-disabled-text disabled:border-disabled-border active:disabled:border-disabled-border',
        className,
      )}
    >
      {children}
    </button>
  );
}
