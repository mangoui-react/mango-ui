import React from 'react';

import {
  PopoverClose as MPopoverClose,
  PopoverContent as MPopoverContent,
  PopoverPortal as MPopoverPortal,
  PopoverRoot as MPopoverRoot,
  PopoverTrigger as MPopoverTrigger,
} from '@melio-ui/popover';

import { cn } from '@/shared/utils/cn';

export const PopoverRoot = MPopoverRoot;
export const PopoverPortal = MPopoverPortal;
export const PopoverTrigger = MPopoverTrigger;
export const PopoverClose = MPopoverClose;

interface PopoverContentProps extends React.ComponentPropsWithoutRef<typeof MPopoverContent> {}
export function PopoverContent({ className, ...props }: PopoverContentProps) {
  return (
    <MPopoverContent
      {...props}
      className={cn(
        'bg-slate-500 text-slate-100',
        'rounded border border-slate-600 shadow-sm',
        'focus:outline-0',
        className,
      )}
    />
  );
}

export const Popover = {
  Root: PopoverRoot,
  Trigger: PopoverTrigger,
  Portal: PopoverPortal,
  Content: PopoverContent,
  Close: PopoverClose,
};
