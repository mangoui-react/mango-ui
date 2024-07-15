import React from 'react';

import {
  CircularProgressIndicator as MCircularProgressIndicator,
  CircularProgressLabel as MCircularProgressLabel,
  CircularProgressRoot as MCircularProgressRoot,
} from '@melio-ui/circular-progress';

import { cn } from '@/shared/utils/cn';

interface CircularProgressRootProps
  extends React.ComponentPropsWithoutRef<typeof MCircularProgressRoot> {}
export function CircularProgressRoot({ className, ...props }: CircularProgressRootProps) {
  return (
    <MCircularProgressRoot
      {...props}
      className={cn('relative inline-block align-middle', 'h-12 w-12 text-[3rem]', className)}
    />
  );
}

interface CircularProgressIndicatorProps
  extends React.ComponentPropsWithoutRef<typeof MCircularProgressIndicator> {}
export function CircularProgressIndicator({ className, ...props }: CircularProgressIndicatorProps) {
  return (
    <MCircularProgressIndicator
      {...props}
      className={cn(
        'block',
        'h-full w-full',
        'data-[state=indeterminate]:animate-[indeterminate_2s_linear_infinite]',
        '[&>circle:data-[component=bg]]:stroke-slate-500',
        '[&>circle:data-[component=bar]]:stroke-[#208aff]',
        '[&data-[state=complete]>circle:data-[component=bar]]:duration-700 [&data-[state=complete]>circle:data-[component=bar]]:ease-linear',
        '[&data-[state=indeterminate]>circle:data-[component=bar]]:animate-[indeterminateBar_1.5s_linear_infinite]',
        className,
      )}
    />
  );
}

interface CircularProgressLabelProps
  extends React.ComponentPropsWithoutRef<typeof MCircularProgressLabel> {}
export function CircularProgressLabel({ className, ...props }: CircularProgressLabelProps) {
  return (
    <MCircularProgressLabel
      {...props}
      className={cn(
        'absolute left-1/2 top-1/2',
        'w-full text-center text-[.24em]',
        'translate-x-[-50%] translate-y-[-50%]',
        className,
      )}
    />
  );
}

export const CircularProgress = {
  Root: CircularProgressRoot,
  Indicator: CircularProgressIndicator,
  Label: CircularProgressLabel,
};
