import React from 'react';

import { Popper } from '@mangoui/popper';
import { useControlled } from '@mangoui/use-controlled';

export interface TooltipProps {
  /** Tooltip show/hide */
  open?: boolean;
  defaultOpen?: boolean;
  children?: React.ReactNode;
  /**
   * TooltipTrigger 마우스 오버시 open = true, 마우스 아웃시 open = false
   */
  onOpenChange?: (open: boolean) => void;
}

export interface TooltipContextValue extends Pick<TooltipProps, 'open'> {
  triggerRef: React.MutableRefObject<HTMLButtonElement | null>;
  //
  isPointerInTransitRef: React.MutableRefObject<boolean>;
  onPointerInTransitChange: (inTransit: boolean) => void;
  //
  onOpen: () => void;
  onClose: () => void;
}
export const TooltipContext = React.createContext<TooltipContextValue>({
  triggerRef: { current: null },
  //
  isPointerInTransitRef: { current: false },
  onPointerInTransitChange: () => {},
  //
  onOpen: () => {},
  onClose: () => {},
});

export default function Tooltip(props: TooltipProps): React.JSX.Element {
  const { open: openProp, defaultOpen, children, onOpenChange } = props;

  // Tooltip의 대상(트리거)이 되는 Node
  const triggerRef = React.useRef<HTMLButtonElement>(null);

  const isPointerInTransitRef = React.useRef(false);

  const [open, setOpen] = useControlled<boolean | undefined>(openProp, defaultOpen);

  const onOpen = React.useCallback(() => {
    setOpen(true);
    onOpenChange?.(true);
  }, [onOpenChange, setOpen]);

  const onClose = React.useCallback(() => {
    setOpen(false);
    onOpenChange?.(false);
  }, [onOpenChange, setOpen]);

  const onPointerInTransitChange = React.useCallback((inTransit: boolean) => {
    isPointerInTransitRef.current = inTransit;
  }, []);

  const contextValue = React.useMemo(
    () => ({
      open,
      triggerRef,
      //
      isPointerInTransitRef,
      onPointerInTransitChange,
      //
      onOpen,
      onClose,
    }),
    [onClose, onOpen, onPointerInTransitChange, open],
  );

  return (
    <Popper.Root>
      <TooltipContext.Provider value={contextValue}>{children}</TooltipContext.Provider>
    </Popper.Root>
  );
}

Tooltip.displayName = 'Tooltip';
