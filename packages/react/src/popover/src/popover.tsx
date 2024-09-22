import React from 'react';

import { Popper } from '@melio-ui/popper';
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
  triggerRef: React.MutableRefObject<HTMLButtonElement | null>;
  //
  onOpen: () => void;
  onClose: () => void;
}
export const PopoverContext = React.createContext<PopoverContextValue>({
  triggerRef: { current: null },
  //
  onOpen: () => {},
  onClose: () => {},
});

export default function Popover(props: PopoverProps): JSX.Element {
  const { open: openProp, defaultOpen, children, onOpenChange } = props;

  const [open, setOpen] = useControlled<boolean | undefined>(openProp, defaultOpen);

  const triggerRef = React.useRef<HTMLButtonElement>(null);

  const onOpen = React.useCallback(() => {
    if (!open) {
      setOpen(true);
      onOpenChange?.(true);
    }
  }, [onOpenChange, open, setOpen]);

  const onClose = React.useCallback(() => {
    setOpen(false);
    onOpenChange?.(false);
  }, [onOpenChange, setOpen]);

  const contextValue = React.useMemo(
    () => ({
      open,
      triggerRef,
      //
      onOpen,
      onClose,
    }),
    [onClose, onOpen, open],
  );

  return (
    <Popper.Root>
      <PopoverContext.Provider value={contextValue}>{children}</PopoverContext.Provider>
    </Popper.Root>
  );
}

Popover.displayName = 'Popover';
