import React from 'react';

import {
  SliderRange as MSliderRange,
  SliderRoot as MSliderRoot,
  SliderThumb as MSliderThumb,
  SliderThumbLabel as MSliderThumbLabel,
  SliderTrack as MSliderTrack,
} from '@mangoui/slider';

import { cn } from '@/shared/utils/cn';

interface SliderRootProps extends React.ComponentPropsWithoutRef<typeof MSliderRoot> {}
export function SliderRoot({ className, ...props }: SliderRootProps) {
  return (
    <MSliderRoot
      {...props}
      className={cn(
        'group',
        'relative inline-block cursor-pointer',
        'w-full px-0 py-[0.4375rem]',
        'data-[disabled]:pointer-events-none data-[disabled]:cursor-default data-[disabled]:opacity-30',
        'data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1 data-[orientation=vertical]:px-[0.8125rem] data-[orientation=vertical]:py-0',
        className,
      )}
    />
  );
}

interface SliderTrackProps extends React.ComponentPropsWithoutRef<typeof MSliderTrack> {}
export function SliderTrack({ className, ...props }: SliderTrackProps) {
  return (
    <MSliderTrack
      {...props}
      className={cn(
        'absolute h-1 w-full',
        'rounded-[0.0625rem]',
        'bg-slate-300 dark:bg-slate-600',
        'group-data-[orientation=vertical]:h-full group-data-[orientation=vertical]:w-1',
        className,
      )}
    />
  );
}

interface SliderRangeProps extends React.ComponentPropsWithoutRef<typeof MSliderRange> {}
export function SliderRange({ className, ...props }: SliderRangeProps) {
  return (
    <MSliderRange
      {...props}
      className={cn(
        'absolute left-0 h-[inherit]',
        'bg-blue-500',
        'group-data-[orientation=vertical]:w-full',
        className,
      )}
    />
  );
}

interface SliderThumbProps extends React.ComponentPropsWithoutRef<typeof MSliderThumb> {}
export function SliderThumb({ className, ...props }: SliderThumbProps) {
  return (
    <MSliderThumb
      {...props}
      className={cn(
        'absolute flex h-[0.875rem] w-[0.875rem] items-center justify-center',
        'rounded-[50%] bg-blue-500 outline-0',
        'ml-[-0.4375rem] mt-[-0.375rem]',
        'group-data-[orientation=vertical]:mb-[-0.4375rem] group-data-[orientation=vertical]:ml-[-0.3438rem]',
        className,
      )}
    />
  );
}

interface SliderThumbLabelProps extends React.ComponentPropsWithoutRef<typeof MSliderThumbLabel> {}
export function SliderThumbLabel({ className, ...props }: SliderThumbLabelProps) {
  return (
    <MSliderThumbLabel
      {...props}
      className={cn(
        'z-[1] whitespace-nowrap',
        'text-sm font-medium tracking-[0.01071em]',
        'origin-[center_bottom] translate-y-[-100%] scale-100 transition-transform',
        'absolute top-[-0.625rem]',
        'rounded-sm bg-[#272c36]',
        'text-white',
        'flex items-center justify-center',
        'px-3 py-1',
        'before:absolute before:bottom-0 before:left-1/2 before:h-2 before:w-2 before:bg-inherit before:content-none',
        'before:translate-x-[-50%] before:translate-y-1/2 before:rotate-45',
        className,
      )}
    />
  );
}

export const Slider = {
  Root: SliderRoot,
  Track: SliderTrack,
  Range: SliderRange,
  Thumb: SliderThumb,
  ThumbLabel: SliderThumbLabel,
};
