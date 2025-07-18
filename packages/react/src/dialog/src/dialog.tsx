import React from 'react';

import { useControlled } from '@mangoui/use-controlled';

export type DialogCloseReason = 'backdropClick' | 'escapeKeyDown' | 'closeClick';

export interface DialogProps {
  role?: 'dialog' | 'presentation';
  /** dialog open */
  open?: boolean;
  defaultOpen?: boolean;
  children?: React.ReactNode;
  /**
   * DialogTrigger 클릭시 open = true,
   * DialogClose (우측상단 [X] 버튼, 취소버튼) or backdrop 클릭 or ESC 키 선택시 open = false
   */
  onOpenChange?: (open: boolean) => void;
}

export interface DialogContextValue extends Pick<DialogProps, 'open'> {
  role: React.AriaRole; // 'dialog' | 'presentation';
  //
  handleOpen: () => void;
  handleClose: () => void;
}
export const DialogContext = React.createContext<DialogContextValue>({
  role: 'dialog',
  //
  handleOpen: () => {},
  handleClose: () => {},
});

export default function Dialog(props: DialogProps): React.JSX.Element {
  const { role = 'dialog', open: openProp, defaultOpen, children, onOpenChange } = props;

  const [open, setOpen] = useControlled<boolean | undefined>(openProp, defaultOpen);

  const handleOpen = React.useCallback(() => {
    if (!open) {
      setOpen(true);
      onOpenChange?.(true);
    }
  }, [onOpenChange, open, setOpen]);

  const handleClose = React.useCallback(() => {
    setOpen(false);
    onOpenChange?.(false);
  }, [onOpenChange, setOpen]);

  const contextValue = React.useMemo(
    () => ({
      role,
      open,
      handleOpen,
      handleClose,
    }),
    [handleClose, handleOpen, open, role],
  );

  return <DialogContext.Provider value={contextValue}>{children}</DialogContext.Provider>;
}

Dialog.displayName = 'Dialog';
