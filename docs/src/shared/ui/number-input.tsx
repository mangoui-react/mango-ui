import React from 'react';

import {
  NumberInputButtonGroup as MNumberInputButtonGroup,
  NumberInputField as MNumberInputField,
  NumberInputMinus as MNumberInputMinus,
  NumberInputPlus as MNumberInputPlus,
  NumberInputRoot as MNumberInputRoot,
} from '@melio-ui/number-input';

import { cn } from '@/shared/utils/cn';

interface NumberInputRootProps extends React.ComponentPropsWithoutRef<typeof MNumberInputRoot> {}
export function NumberInputRoot({ className, ...props }: NumberInputRootProps) {
  return <MNumberInputRoot {...props} className={cn('flex w-full', className)} />;
}

interface NumberInputFieldProps extends React.ComponentPropsWithoutRef<typeof MNumberInputField> {}
export function NumberInputField({ className, ...props }: NumberInputFieldProps) {
  return (
    <MNumberInputField
      {...props}
      className={cn(
        'relative inline-block h-8 w-full min-w-0',
        'border border-slate-700',
        'box-border bg-slate-600',
        'text-base text-inherit',
        'px-2 py-1 leading-none',
        'focus:border focus:border-blue-400 focus:shadow-blue-800 focus:outline-0',
        'disabled:cursor-not-allowed disabled:border-gray-500 disabled:bg-gray-800 disabled:text-gray-500',
        className,
      )}
    />
  );
}

interface NumberInputButtonGroupProps
  extends React.ComponentPropsWithoutRef<typeof MNumberInputButtonGroup> {}
export function NumberInputButtonGroup({ className, ...props }: NumberInputButtonGroupProps) {
  return <MNumberInputButtonGroup {...props} className={cn('h-8', className)} />;
}

interface NumberInputMinusProps extends React.ComponentPropsWithoutRef<typeof MNumberInputMinus> {}
export function NumberInputMinus({ className, ...props }: NumberInputMinusProps) {
  return (
    <MNumberInputMinus
      {...props}
      className={cn(
        'block h-4 w-full p-0',
        'box-border cursor-pointer bg-transparent',
        'text-sm leading-none text-inherit',
        'border border-slate-700',
        'align-middle',
        'disabled:cursor-not-allowed disabled:border-gray-500 disabled:bg-gray-800 disabled:text-gray-500',
        className,
      )}
    />
  );
}

interface NumberInputPlusProps extends React.ComponentPropsWithoutRef<typeof MNumberInputPlus> {}
export function NumberInputPlus({ className, ...props }: NumberInputPlusProps) {
  return (
    <MNumberInputPlus
      {...props}
      className={cn(
        'block h-4 w-full p-0',
        'box-border cursor-pointer bg-transparent',
        'text-sm leading-none text-inherit',
        'border border-slate-700',
        'align-middle',
        'disabled:cursor-not-allowed disabled:border-gray-500 disabled:bg-gray-800 disabled:text-gray-500',
        className,
      )}
    />
  );
}

export const NumberInput = {
  Root: NumberInputRoot,
  Field: NumberInputField,
  ButtonGroup: NumberInputButtonGroup,
  Plus: NumberInputPlus,
  Minus: NumberInputMinus,
};
