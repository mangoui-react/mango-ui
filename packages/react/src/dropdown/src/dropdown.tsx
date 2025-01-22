import React from 'react';

import { Popper } from '@melio-ui/popper';
import { useControlled } from '@melio-ui/use-controlled';

export interface DropdownProps {
  /** Dropdown open 여부 */
  open?: boolean;
  defaultOpen?: boolean;
  children?: React.ReactNode;
  /**
   * Dropdown.Trigger 클릭시 open = true,
   * Dropdown close action(blur/esc) 발생시 open = false
   */
  onOpenChange?: (open: boolean) => void;
}

export interface DropdownContextValue extends Pick<DropdownProps, 'open'> {
  triggerRef: React.MutableRefObject<HTMLButtonElement | null>;
  //
  onOpen: () => void;
  onClose: () => void;
}
export const DropdownContext = React.createContext<DropdownContextValue>({
  triggerRef: { current: null },
  //
  onOpen: () => {},
  onClose: () => {},
});

export default function Dropdown(props: DropdownProps): React.JSX.Element {
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
      <DropdownContext.Provider value={contextValue}>{children}</DropdownContext.Provider>
    </Popper.Root>
  );
}

Dropdown.displayName = 'Dropdown';
