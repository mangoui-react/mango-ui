import React from 'react';

import { cn } from '@/shared/utils/cn';

export interface InputProps extends React.ComponentPropsWithoutRef<'input'> {}

export default function Input(props: InputProps) {
  const { className, children, ...rest } = props;

  return (
    <input
      {...rest}
      className={cn(
        'inline-block w-full min-w-0 relative bg-inherit text-inherit py-1 px-3 leading-none',
        'border border-solid border-inherit box-border',
        'focus:outline-0 focus:border-primary focus:border focus:shadow-[0_0_2px_border-primary]',
        className,
      )}
    />
  );
}
