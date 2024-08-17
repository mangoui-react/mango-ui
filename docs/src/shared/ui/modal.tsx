import React from 'react';

import {
  ModalBackdrop as MModalBackdrop,
  ModalClose as MModalClose,
  ModalContent as MModalContent,
  ModalPortal as MModalPortal,
  ModalRoot as MModalRoot,
  ModalTrigger as MModalTrigger,
} from '@melio-ui/modal';

import { cn } from '@/shared/utils/cn';

export const ModalRoot = MModalRoot;
export const ModalPortal = MModalPortal;
export const ModalTrigger = MModalTrigger;
export const ModalClose = MModalClose;

interface ModalBackdropProps extends React.ComponentPropsWithoutRef<typeof MModalBackdrop> {}
export function ModalBackdrop({ className, ...props }: ModalBackdropProps) {
  return (
    <MModalBackdrop
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

interface ModalContentProps extends React.ComponentPropsWithoutRef<typeof MModalContent> {}
export function ModalContent({ className, ...props }: ModalContentProps) {
  return (
    <MModalContent
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

// interface ModalCloseButtonProps extends React.ComponentPropsWithoutRef<'button'> {}
// export function ModalCloseButton({ className, ...props }: ModalCloseButtonProps) {
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

export const Modal = {
  Root: ModalRoot,
  Portal: ModalPortal,
  Trigger: ModalTrigger,
  Close: ModalClose,
  Content: ModalContent,
  Backdrop: ModalBackdrop,
  // CloseButton: ModalCloseButton,
};
