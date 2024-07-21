import React from 'react';

import {
  ToastClose as MToastClose,
  ToastContent as MToastContent,
  ToastRoot as MToastRoot,
  ToastViewport as MToastViewport,
} from '@melio-ui/toast';

import { cn } from '@/shared/utils/cn';

export const ToastRoot = MToastRoot;
export const ToastClose = MToastClose;

interface ToastContentProps extends React.ComponentPropsWithoutRef<typeof MToastContent> {}
export function ToastContent({ className, ...props }: ToastContentProps) {
  return (
    <MToastContent
      {...props}
      className={cn(
        'min-w-72 rounded-md',
        'border-[0.0625rem] border-solid border-[#dedede]',
        'shadow-[hsl(206 22% 7% / 35%)_0rem_0.625rem_2.375rem_-0.625rem, hsl(206 22% 7% / 20%)_0rem_0.625rem_1.25rem_-0.9375rem]',
        'data-[state=open]:animate-[slideIn_150ms_cubic-bezier(0.16,1,0.3,1)]',
        'data-[state=closed]:animate-[hide_100ms_ease-in]',
        className,
      )}
    />
  );
}

interface ToastViewportProps extends React.ComponentPropsWithoutRef<typeof MToastViewport> {}
export function ToastViewport({ className, ...props }: ToastViewportProps) {
  return (
    <MToastViewport
      {...props}
      className={cn(
        'fixed z-[1300]',
        // top
        'data-[placement=top]:left-1/2 data-[placement=top]:right-auto data-[placement=top]:top-[0.625rem] data-[placement=top]:translate-x-[-50%]',
        // top-left
        'data-[placement=top-left]:left-[0.625rem] data-[placement=top-left]:right-auto data-[placement=top-left]:top-[0.625rem]',
        // top-right
        'data-[placement=top-right]:left-auto data-[placement=top-right]:right-[0.625rem] data-[placement=top-right]:top-[0.625rem]',
        // bottom
        'data-[placement=bottom]:bottom-[0.625rem] data-[placement=bottom]:left-1/2 data-[placement=bottom]:right-auto data-[placement=bottom]:translate-x-[-50%]',
        // bottom-left
        'data-[placement=bottom-left]:bottom-[0.625rem] data-[placement=bottom-left]:left-[0.625rem] data-[placement=bottom-left]:right-auto',
        // bottom-right
        'data-[placement=bottom-right]:bottom-[0.625rem] data-[placement=bottom-right]:left-auto data-[placement=bottom-right]:right-[0.625rem]',
        className,
      )}
    />
  );
}

export const Toast = {
  Root: ToastRoot,
  Content: ToastContent,
  Viewport: ToastViewport,
  Close: ToastClose,
};
