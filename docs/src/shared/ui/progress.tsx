import React from 'react';

import {
  ProgressIndicator as MProgressIndicator,
  ProgressRoot as MProgressRoot,
} from '@mangoui/progress';

import { cn } from '@/shared/utils/cn';

interface ProgressRootProps extends React.ComponentPropsWithoutRef<typeof MProgressRoot> {}
export function ProgressRoot({ className, ...props }: ProgressRootProps) {
  return (
    <MProgressRoot
      {...props}
      className={cn(
        'relative overflow-hidden',
        'bg-slate-200 dark:bg-slate-500',
        'h-2 w-full',
        className,
      )}
    />
  );
}

interface ProgressIndicatorProps
  extends React.ComponentPropsWithoutRef<typeof MProgressIndicator> {}
export function ProgressIndicator({ className, ...props }: ProgressIndicatorProps) {
  return (
    <MProgressIndicator
      {...props}
      className={cn(
        'h-full w-full',
        'bg-blue-500',
        'transition-transform',
        'data-[state=indeterminate]:absolute data-[state=indeterminate]:min-w-[50%] data-[state=indeterminate]:duration-300',
        'data-[state=indeterminate]:animate-[indeterminate-progress_1s_ease_infinite_normal_none_running]',
        className,
      )}
    />
  );
}

export const Progress = {
  Root: ProgressRoot,
  Indicator: ProgressIndicator,
};
