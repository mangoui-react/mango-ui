import React from 'react';

import {
  SwitchLabel as MSwitchLabel,
  SwitchRoot as MSwitchRoot,
  SwitchThumb as MSwitchThumb,
  SwitchTrack as MSwitchTrack,
} from '@melio-ui/switch';

import { cn } from '@/shared/utils/cn';

interface SwitchRootProps extends React.ComponentPropsWithoutRef<typeof MSwitchRoot> {}
export function SwitchRoot({ className, ...props }: SwitchRootProps) {
  return (
    <MSwitchRoot
      {...props}
      className={cn(
        'group',
        'relative inline-block cursor-pointer align-middle',
        'data-[readonly]:pointer-events-none data-[readonly]:cursor-default',
        'data-[disabled]:cursor-default data-[disabled]:opacity-50',
        '[&>input[type=checkbox]]:absolute [&>input[type=checkbox]]:cursor-[inherit] [&>input[type=checkbox]]:opacity-0',
        '[&>input[type=checkbox]]:h-[0.0625rem] [&>input[type=checkbox]]:w-[0.0625rem]',
        '[&>input[type=checkbox]]:z-[1] [&>input[type=checkbox]]:m-0 [&>input[type=checkbox]]:p-0',
        className,
      )}
    />
  );
}

interface SwitchLabelProps extends React.ComponentPropsWithoutRef<typeof MSwitchLabel> {}
export function SwitchLabel({ className, ...props }: SwitchLabelProps) {
  return <MSwitchLabel {...props} className={cn('pl-[0.3125rem] pr-[0.3125rem]', className)} />;
}

interface SwitchTrackProps extends React.ComponentPropsWithoutRef<typeof MSwitchTrack> {}
export function SwitchTrack({ className, ...props }: SwitchTrackProps) {
  return (
    <MSwitchTrack
      {...props}
      className={cn(
        'relative box-content inline-flex items-center align-middle',
        'h-[1.625rem] min-w-12 p-0.5',
        'rounded-[0.9375rem]',
        'bg-slate-600',
        'cursor-pointer',
        'transition-[background-color] duration-500 ease-in-out',
        'data-[state=checked]:bg-blue-500',
        'group-data-[disabled]:cursor-not-allowed',
        className,
      )}
    />
  );
}

interface SwitchThumbProps extends React.ComponentPropsWithoutRef<typeof MSwitchThumb> {}
export function SwitchThumb({ className, ...props }: SwitchThumbProps) {
  return (
    <MSwitchThumb
      {...props}
      className={cn(
        'absolute',
        'h-[1.375rem] w-[1.375rem] bg-white',
        'rounded',
        'shadow-[0_2px_1px_-1px_rgb(0 0 0 / 20%), 0_1px_1px_0_rgb(0 0 0 / 14%), 0_1px_3px_0_rgb(0 0 0 / 12%)]',
        'left-1 top-1',
        'transition-all',
        'data-[state=checked]:left-[calc(100%-1.625rem)]',
        className,
      )}
    />
  );
}

export const Switch = {
  Root: SwitchRoot,
  Label: SwitchLabel,
  Track: SwitchTrack,
  Thumb: SwitchThumb,
};
