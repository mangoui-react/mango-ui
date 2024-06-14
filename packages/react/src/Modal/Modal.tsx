import React from 'react';

import useControlled from '../internal/useControlled';

export type ModalCloseReason = 'backdropClick' | 'escapeKeyDown' | 'closeClick';

export interface ModalProps {
  role?: 'dialog' | 'presentation';
  /** modal open */
  open?: boolean;
  defaultOpen?: boolean;
  children?: React.ReactNode;
  /**
   * ModalTrigger 클릭시 open = true,
   * ModalClose (우측상단 [X] 버튼, 취소버튼) or backdrop 클릭 or ESC 키 선택시 open = false
   */
  onOpenChange?: (open: boolean) => void;
}

export interface ModalContextValue extends Pick<ModalProps, 'open'> {
  role: React.AriaRole; // 'dialog' | 'presentation';
  //
  handleOpen: () => void;
  handleClose: () => void;
}
export const ModalContext = React.createContext<ModalContextValue>({
  role: 'dialog',
  //
  handleOpen: () => {},
  handleClose: () => {},
});

/**
 * 모달 컴포넌트
 *
 * @author 안형노 <elle0510@gmail.com>
 */
export default function Modal(props: ModalProps): JSX.Element {
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

  return <ModalContext.Provider value={contextValue}>{children}</ModalContext.Provider>;
}

Modal.displayName = 'Modal';
