import React from 'react';

import { cn } from '@/shared/utils/cn';

export interface InputProps extends React.ComponentPropsWithoutRef<'input'> {}

export function Input(props: InputProps) {
  const { className, children, ...rest } = props;

  return (
    <input
      {...rest}
      className={cn(
        'relative inline-block w-full min-w-0 bg-inherit px-3 py-1 leading-none text-inherit',
        'box-border border border-solid border-inherit',
        'focus:border-primary focus:border focus:shadow-[0_0_2px_border-primary] focus:outline-0',
        className,
      )}
    />
  );
}
