import React from 'react';

import {
  StepsContent as MStepsContent,
  StepsIndicator as MStepsIndicator,
  StepsRoot as MStepsRoot,
  StepsSeparator as MStepsSeparator,
  StepsStatus as MStepsStatus,
  StepsStep as MStepsStep,
} from '@melio-ui/steps';

import { cn } from '@/shared/utils/cn';

export const StepsStatus = MStepsStatus;

interface StepsRootProps extends React.ComponentPropsWithoutRef<typeof MStepsRoot> {}
export function StepsRoot({ className, ...props }: StepsRootProps) {
  return (
    <MStepsRoot
      {...props}
      className={cn('group', 'flex', 'data-[orientation=vertical]:flex-col', className)}
    />
  );
}

interface StepsStepProps extends React.ComponentPropsWithoutRef<typeof MStepsStep> {}
export function StepsStep({ className, ...props }: StepsStepProps) {
  return (
    <MStepsStep
      {...props}
      className={cn(
        'group/step',
        'relative flex flex-1 items-center overflow-hidden',
        'm-0 p-0',
        'last:flex-none',
        '[&:not(:first-of-type)]:pl-3',
        'group-data-[orientation=vertical]:[&:not(:first-of-type)]:mt-[0.625rem] group-data-[orientation=vertical]:[&:not(:first-of-type)]:pl-0',
        'group-data-[orientation=vertical]:items-start group-data-[orientation=vertical]:pb-5',
        className,
      )}
    />
  );
}

interface StepsIndicatorProps extends React.ComponentPropsWithoutRef<typeof MStepsIndicator> {}
export function StepsIndicator({ className, ...props }: StepsIndicatorProps) {
  return (
    <MStepsIndicator
      {...props}
      className={cn(
        'flex flex-shrink-0 items-center justify-center',
        'mt-[0.375rem] h-[1.875rem] w-[1.875rem]',
        'rounded-[50%] border-[0.0625rem] border-solid leading-[1.875rem]',
        // wait
        'group-data-[status=wait]/step:border-slate-400 group-data-[status=wait]/step:bg-inherit group-data-[status=wait]/step:text-slate-400',
        // process
        'group-data-[status=process]/step:border-blue-500 group-data-[status=process]/step:bg-blue-500 group-data-[status=process]/step:text-white',
        // finish
        'group-data-[status=finish]/step:border-blue-500 group-data-[status=finish]/step:bg-inherit group-data-[status=finish]/step:text-blue-500',
        // error
        'group-data-[status=error]/step:border-red-500 group-data-[status=error]/step:bg-inherit group-data-[status=error]/step:text-red-500',
        // svg
        '[&>svg]:inline-block [&>svg]:align-middle',
        className,
      )}
    />
  );
}

interface StepsContentProps extends React.ComponentPropsWithoutRef<typeof MStepsContent> {}
export function StepsContent({ className, ...props }: StepsContentProps) {
  return (
    <MStepsContent
      {...props}
      className={cn(
        'flex-shrink-0',
        // wait
        'group-data-[status=wait]/step:text-slate-400',
        // process
        'group-data-[status=process]/step:text-inherit',
        // finish
        'group-data-[status=finish]/step:text-inherit',
        // error
        'group-data-[status=error]/step:text-red-500',
        className,
      )}
    />
  );
}

interface StepsSeparatorProps extends React.ComponentPropsWithoutRef<typeof MStepsSeparator> {}
export function StepsSeparator({ className, ...props }: StepsSeparatorProps) {
  return (
    <MStepsSeparator
      {...props}
      className={cn(
        'h-0.5 w-full bg-slate-500',
        'data-[orientation=horizontal]:ml-2',
        'data-[orientation=vertical]:absolute data-[orientation=vertical]:h-full data-[orientation=vertical]:w-0.5',
        'data-[orientation=vertical]:left-3.5 data-[orientation=vertical]:top-[2.125rem] data-[orientation=vertical]:ml-2',
        className,
      )}
    />
  );
}

export const Popover = {
  Root: StepsRoot,
  Step: StepsStep,
  Indicator: StepsIndicator,
  Content: StepsContent,
  Separator: StepsSeparator,
  Status: StepsStatus,
};
