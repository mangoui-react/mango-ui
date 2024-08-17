import React from 'react';

import {
  RadioGroupIcon as MRadioGroupIcon,
  RadioGroupIndicator as MRadioGroupIndicator,
  RadioGroupItem as MRadioGroupItem,
  RadioGroupLabel as MRadioGroupLabel,
  RadioGroupRoot as MRadioGroupRoot,
} from '@melio-ui/radio-group';

import { cn } from '@/shared/utils/cn';

interface RadioGroupRootProps extends React.ComponentPropsWithoutRef<typeof MRadioGroupRoot> {}
export function RadioGroupRoot({ className, ...props }: RadioGroupRootProps) {
  return (
    <MRadioGroupRoot
      {...props}
      className={cn(
        'flex flex-row',
        'data-[orientation=vertical]:flex-col data-[orientation=vertical]:gap-3',
        className,
      )}
    />
  );
}

interface RadioGroupItemProps extends React.ComponentPropsWithoutRef<typeof MRadioGroupItem> {}
export function RadioGroupItem({ className, ...props }: RadioGroupItemProps) {
  return (
    <MRadioGroupItem
      {...props}
      className={cn(
        'group',
        'inline-flex items-center',
        'data-[readonly]:pointer-events-none data-[readonly]:cursor-default',
        'data-[disabled]:cursor-not-allowed',
        '[&>input[type=radio]]:absolute [&>input[type=radio]]:m-0 [&>input[type=radio]]:h-px [&>input[type=radio]]:w-px',
        '[&>input[type=radio]]:cursor-[inherit] [&>input[type=radio]]:opacity-0',
        className,
      )}
    />
  );
}

interface RadioGroupIndicatorProps
  extends React.ComponentPropsWithoutRef<typeof MRadioGroupIndicator> {}
export function RadioGroupIndicator({ className, ...props }: RadioGroupIndicatorProps) {
  return (
    <MRadioGroupIndicator
      {...props}
      className={cn(
        'relative flex items-center',
        'cursor-pointer text-blue-500',
        'group-data-[readonly]:cursor-default',
        'group-data-[disabled]:pointer-events-none group-data-[disabled]:cursor-default group-data-[disabled]:opacity-50',
        'group-data-[disabled]:text-[#b0a9a9] dark:group-data-[disabled]:text-[#d9d9d9]',
        className,
      )}
    />
  );
}

interface RadioGroupIconProps extends React.ComponentPropsWithoutRef<typeof MRadioGroupIcon> {}
export function RadioGroupIcon({ className, ...props }: RadioGroupIconProps) {
  return <MRadioGroupIcon {...props} className={cn('text-2xl', className)} />;
}

interface RadioGroupLabelProps extends React.ComponentPropsWithoutRef<typeof MRadioGroupLabel> {}
export function RadioGroupLabel({ className, ...props }: RadioGroupLabelProps) {
  return (
    <MRadioGroupLabel
      {...props}
      className={cn(
        'cursor-pointer pl-[0.3125rem] pr-[0.3125rem]',
        'group-data-[disabled]:pointer-events-none group-data-[disabled]:cursor-default group-data-[disabled]:opacity-50',
        'group-data-[disabled]:text-[#b0a9a9] dark:group-data-[disabled]:text-[#d9d9d9]',
        className,
      )}
    />
  );
}

export const RadioGroup = {
  Root: RadioGroupRoot,
  Item: RadioGroupItem,
  Indicator: RadioGroupIndicator,
  Icon: RadioGroupIcon,
  Label: RadioGroupLabel,
};
