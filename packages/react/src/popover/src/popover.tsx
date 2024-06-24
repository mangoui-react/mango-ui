import React from 'react';

import { useControlled } from '@melio-ui/use-controlled';

// 지금은 필요없음 - 나중에 필요하다면 부활시키자
// export type CloseReasonType = 'blurTrigger' | 'escapeKeyDown' | 'closeClick';

export interface PopoverProps {
  /** Popover open 여부 */
  open?: boolean;
  defaultOpen?: boolean;
  children?: React.ReactNode;
  /**
   * Popover.Trigger 클릭시 open = true,
   * Popover close action(blur/esc) 발생시 open = false
   */
  onOpenChange?: (open: boolean) => void;
}

export interface PopoverContextValue extends Pick<PopoverProps, 'open'> {
  triggerRef: React.MutableRefObject<HTMLButtonElement | null>; // TODO: Element 타입 생각해 보기
  //
  handleOpen: () => void;
  handleClose: () => void;
}
export const PopoverContext = React.createContext<PopoverContextValue>({
  triggerRef: { current: null },
  //
  handleOpen: () => {},
  handleClose: () => {},
});

export default function Popover(props: PopoverProps): JSX.Element {
  const { open: openProp, defaultOpen, children, onOpenChange } = props;

  const [open, setOpen] = useControlled<boolean | undefined>(openProp, defaultOpen);

  const triggerRef = React.useRef<HTMLButtonElement>(null);

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
      open,
      triggerRef,
      //
      handleOpen,
      handleClose,
    }),
    [handleClose, handleOpen, open],
  );

  return <PopoverContext.Provider value={contextValue}>{children}</PopoverContext.Provider>;
}

Popover.displayName = 'Popover';
