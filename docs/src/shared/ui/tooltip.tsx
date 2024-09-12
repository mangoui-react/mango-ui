import React from 'react';

import {
  TooltipArrow as MTooltipArrow,
  TooltipContent as MTooltipContent,
  TooltipPortal as MTooltipPortal,
  TooltipRoot as MTooltipRoot,
  TooltipTrigger as MTooltipTrigger,
} from '@melio-ui/tooltip';

import { cn } from '@/shared/utils/cn';

export const TooltipRoot = MTooltipRoot;
export const TooltipPortal = MTooltipPortal;
export const TooltipTrigger = MTooltipTrigger;

interface TooltipContentProps extends React.ComponentPropsWithoutRef<typeof MTooltipContent> {}
export function TooltipContent({ className, ...props }: TooltipContentProps) {
  return (
    <MTooltipContent
      {...props}
      className={cn(
        'group',
        'break-words bg-slate-800 text-white',
        'dark:bg-slate-300 dark:text-slate-800',
        'px-[0.625rem] py-1',
        'max-w-[18.75rem] rounded',
        className,
      )}
    />
  );
}

interface TooltipArrowProps extends React.ComponentPropsWithoutRef<typeof MTooltipArrow> {}
export function TooltipArrow({ className, ...props }: TooltipArrowProps) {
  return (
    <MTooltipArrow
      {...props}
      className={cn(
        'fill-slate-800 dark:fill-slate-300',
        // 'absolute h-2 w-2',
        // 'rotate-45 bg-inherit',
        // 'before:content-none',
        // // top
        // 'group-data-[popper-placement=top]:left-1/2 group-data-[popper-placement=top]:ml-[-0.3125rem]',
        // // top-end
        // 'group-data-[popper-placement=top-end]:right-[0.625rem]',
        // // right-start
        // 'group-data-[popper-placement=right-start]:left-[-0.25rem] group-data-[popper-placement=right-start]:top-[0.6875rem] group-data-[popper-placement=right-start]:mt-[-0.25rem]',
        // // right
        // 'group-data-[popper-placement=right]:left-[-0.25rem] group-data-[popper-placement=right]:top-1/2 group-data-[popper-placement=right]:mt-[-0.25rem]',
        // // right-end
        // 'group-data-[popper-placement=right-end]:bottom-1.5 group-data-[popper-placement=right-end]:left-[-0.25rem] group-data-[popper-placement=right-end]:mt-[-0.25rem]',
        // // bottom-start
        // 'group-data-[popper-placement=bottom-start]:top-[-0.25rem]',
        // // bottom
        // 'group-data-[popper-placement=bottom]:left-1/2 group-data-[popper-placement=bottom]:top-[-0.25rem] group-data-[popper-placement=bottom]:ml-[-0.3125rem]',
        // // bottom-end
        // 'group-data-[popper-placement=bottom-end]:right-2.5 group-data-[popper-placement=bottom-end]:top-[-0.25rem]',
        // // left-start
        // 'group-data-[popper-placement=left-start]:right-[-0.25rem] group-data-[popper-placement=left-start]:top-[0.6875rem] group-data-[popper-placement=left-start]:mt-[-0.25rem]',
        // // left
        // 'group-data-[popper-placement=left]:right-[-0.25rem] group-data-[popper-placement=left]:top-1/2 group-data-[popper-placement=left]:mt-[-0.25rem]',
        // // left-end
        // 'group-data-[popper-placement=left-end]:bottom-[0.375rem] group-data-[popper-placement=left-end]:right-[-0.25rem] group-data-[popper-placement=left-end]:mt-[-0.25rem]',
        className,
      )}
    />
  );
}

export const Tooltip = {
  Root: TooltipRoot,
  Trigger: TooltipTrigger,
  Portal: TooltipPortal,
  Content: TooltipContent,
  Arrow: TooltipArrow,
};
