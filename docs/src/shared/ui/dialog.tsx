import React from 'react';

import {
  DialogBackdrop as MDialogBackdrop,
  DialogClose as MDialogClose,
  DialogContent as MDialogContent,
  DialogPortal as MDialogPortal,
  DialogRoot as MDialogRoot,
  DialogTrigger as MDialogTrigger,
} from '@mangoui/dialog';

import { cn } from '@/shared/utils/cn';

export const DialogRoot = MDialogRoot;
export const DialogPortal = MDialogPortal;
export const DialogTrigger = MDialogTrigger;
export const DialogClose = MDialogClose;

interface DialogBackdropProps extends React.ComponentPropsWithoutRef<typeof MDialogBackdrop> {}
export function DialogBackdrop({ className, ...props }: DialogBackdropProps) {
  return (
    <MDialogBackdrop
      {...props}
      className={cn(
        'fixed z-[1200] opacity-100',
        'bottom-0 left-0 right-0 top-0',
        'bg-[#00000080]',
        'animate-[fadein_0.3s]',
        className,
      )}
    />
  );
}

interface DialogContentProps extends React.ComponentPropsWithoutRef<typeof MDialogContent> {}
export function DialogContent({ className, ...props }: DialogContentProps) {
  return (
    <MDialogContent
      {...props}
      className={cn(
        'fixed z-[1200] rounded-md bg-slate-600 text-slate-100',
        'left-0 right-0 top-7 mx-auto my-0',
        'min-h-10 w-[32.5rem] min-w-48',
        'animate-[fadein_0.3s]',
        className,
      )}
    />
  );
}

// interface DialogCloseButtonProps extends React.ComponentPropsWithoutRef<'button'> {}
// export function DialogCloseButton({ className, ...props }: DialogCloseButtonProps) {
//   return (
//     <button
//       {...props}
//       className={cn(
//         'absolute bg-transparent',
//         'right-0 top-0 p-[0.875rem]',
//         'border-none outline-0',
//         'box-border cursor-pointer text-sm text-inherit',
//         'inline-flex items-center justify-center align-middle',
//         className,
//       )}
//     />
//   );
// }

export const Dialog = {
  Root: DialogRoot,
  Portal: DialogPortal,
  Trigger: DialogTrigger,
  Close: DialogClose,
  Content: DialogContent,
  Backdrop: DialogBackdrop,
  // CloseButton: DialogCloseButton,
};
