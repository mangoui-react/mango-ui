import React from 'react';

import {
  DrawerBackdrop as MDrawerBackdrop,
  DrawerClose as MDrawerClose,
  DrawerCloseButton as MDrawerCloseButton,
  DrawerContent as MDrawerContent,
  DrawerPortal as MDrawerPortal,
  DrawerRoot as MDrawerRoot,
  DrawerTrigger as MDrawerTrigger,
} from '@melio-ui/drawer';

import { cn } from '@/shared/utils/cn';

export const DrawerRoot = MDrawerRoot;
export const DrawerPortal = MDrawerPortal;
export const DrawerTrigger = MDrawerTrigger;
export const DrawerClose = MDrawerClose;

interface DrawerBackdropProps extends React.ComponentPropsWithoutRef<typeof MDrawerBackdrop> {}
export function DrawerBackdrop({ className, ...props }: DrawerBackdropProps) {
  return (
    <MDrawerBackdrop
      {...props}
      className={cn(
        'fixed z-[1200] opacity-100',
        'bottom-0 left-0 right-0 top-0',
        'bg-[rgba(0, 0, 0, 0.5)]',
        'animate-[fadein_0.3s]',
        className,
      )}
    />
  );
}

interface DrawerContentProps extends React.ComponentPropsWithoutRef<typeof MDrawerContent> {}
export function DrawerContent({ className, ...props }: DrawerContentProps) {
  return (
    <MDrawerContent
      {...props}
      className={cn(
        'fixed z-[1200] rounded-md bg-white',
        'mx-auto my-0',
        'bottom-auto left-auto right-auto top-auto',
        'min-h-10 w-[32.5rem] min-w-48',
        'animate-[fadein_0.3s]',
        'flex h-full flex-col',
        'shadow-slate-950',
        // top
        'data-[placement=top]:left-0 data-[placement=top]:top-0 data-[placement=top]:h-2/5 data-[placement=top]:w-full',
        // bottom
        'data-[placement=bottom]:bottom-0 data-[placement=bottom]:left-0 data-[placement=bottom]:h-2/5 data-[placement=bottom]:w-full',
        // right
        'data-[placement=right]:right-0 data-[placement=right]:top-0 data-[placement=right]:h-full data-[placement=right]:w-2/5',
        // left
        'data-[placement=left]:left-0 data-[placement=left]:top-0 data-[placement=left]:h-full data-[placement=left]:w-2/5',
        className,
      )}
    />
  );
}

interface DrawerCloseButtonProps
  extends React.ComponentPropsWithoutRef<typeof MDrawerCloseButton> {}
export function DrawerCloseButton({ className, ...props }: DrawerCloseButtonProps) {
  return (
    <MDrawerCloseButton
      {...props}
      className={cn(
        'absolute bg-transparent',
        'right-0 top-0 p-[0.875rem]',
        'border-none outline-0',
        'box-border cursor-pointer text-sm text-inherit',
        'inline-flex items-center justify-center align-middle',
        className,
      )}
    />
  );
}

export const Drawer = {
  Root: DrawerRoot,
  Portal: DrawerPortal,
  Trigger: DrawerTrigger,
  Close: DrawerClose,
  Content: DrawerContent,
  Backdrop: DrawerBackdrop,
  CloseButton: DrawerCloseButton,
};
