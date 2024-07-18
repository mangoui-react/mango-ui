import React from 'react';

import {
  CheckboxGroup as MCheckboxGroup,
  CheckboxIcon as MCheckboxIcon,
  CheckboxIndicator as MCheckboxIndicator,
  CheckboxLabel as MCheckboxLabel,
  CheckboxRoot as MCheckboxRoot,
} from '@melio-ui/checkbox';

import { cn } from '@/shared/utils/cn';

interface CheckboxRootProps extends React.ComponentPropsWithoutRef<typeof MCheckboxRoot> {}
export function CheckboxRoot({ className, ...props }: CheckboxRootProps) {
  return (
    <MCheckboxRoot
      {...props}
      className={cn(
        'group',
        'inline-flex items-center',
        'data-[disabled]:cursor-not-allowed data-[readonly]:cursor-default',
        '[&>input[type=checkbox]]:absolute [&>input[type=checkbox]]:m-0 [&>input[type=checkbox]]:h-px [&>input[type=checkbox]]:w-px',
        '[&>input[type=checkbox]]:cursor-[inherit] [&>input[type=checkbox]]:opacity-0',
        className,
      )}
    />
  );
}

interface CheckboxIndicatorProps
  extends React.ComponentPropsWithoutRef<typeof MCheckboxIndicator> {}
export function CheckboxIndicator({ className, ...props }: CheckboxIndicatorProps) {
  return (
    <MCheckboxIndicator
      {...props}
      className={cn(
        'relative flex cursor-pointer items-center text-[#208aff]',
        'group-data-[readonly]:cursor-default',
        'group-data-[disabled]:pointer-events-none group-data-[disabled]:cursor-default group-data-[disabled]:text-[#d9d9d9]',
        className,
      )}
    />
  );
}

interface CheckboxIconProps extends React.ComponentPropsWithoutRef<typeof MCheckboxIcon> {}
export function CheckboxIcon({ className, ...props }: CheckboxIconProps) {
  return <MCheckboxIcon {...props} className={cn('text-2xl', className)} />;
}

interface CheckboxLabelProps extends React.ComponentPropsWithoutRef<typeof MCheckboxLabel> {}
export function CheckboxLabel({ className, ...props }: CheckboxLabelProps) {
  return (
    <MCheckboxLabel
      {...props}
      className={cn(
        'cursor-pointer pl-[0.3125rem] pr-[0.3125rem]',
        'group-data-[disabled]:pointer-events-none group-data-[disabled]:cursor-default group-data-[disabled]:text-[#d9d9d9]',
        className,
      )}
    />
  );
}

interface CheckboxGroupProps extends React.ComponentPropsWithoutRef<typeof MCheckboxGroup> {}
export function CheckboxGroup({ className, ...props }: CheckboxGroupProps) {
  return (
    <MCheckboxGroup
      {...props}
      className={cn('flex flex-row gap-3', 'data-[orientation=vertical]:flex-col', className)}
    />
  );
}

export const Checkbox = {
  Root: CheckboxRoot,
  Indicator: CheckboxIndicator,
  Icon: CheckboxIcon,
  Label: CheckboxLabel,
  Group: CheckboxGroup,
};
