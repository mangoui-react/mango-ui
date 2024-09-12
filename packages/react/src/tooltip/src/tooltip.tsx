import React from 'react';

import { Popper } from '@melio-ui/popper';
import { useControlled } from '@melio-ui/use-controlled';

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
  triggerRef: React.MutableRefObject<HTMLButtonElement | null>; // TODO: Element 타입 생각해 보기
  //
  isPointerInTransitRef: React.MutableRefObject<boolean>;
  onPointerInTransitChange: (inTransit: boolean) => void;
  //
  handleOpen: () => void;
  handleClose: () => void;
}
export const TooltipContext = React.createContext<TooltipContextValue>({
  triggerRef: { current: null },
  //
  isPointerInTransitRef: { current: false },
  onPointerInTransitChange: () => {},
  //
  handleOpen: () => {},
  handleClose: () => {},
});

export default function Tooltip(props: TooltipProps): JSX.Element {
  const { open: openProp, defaultOpen, children, onOpenChange } = props;

  // Tooltip의 대상(트리거)이 되는 Node
  const triggerRef = React.useRef<HTMLButtonElement>(null);

  const isPointerInTransitRef = React.useRef(false);

  const [open, setOpen] = useControlled<boolean | undefined>(openProp, defaultOpen);

  const handleOpen = React.useCallback(() => {
    setOpen(true);
    onOpenChange?.(true);
  }, [onOpenChange, setOpen]);

  const handleClose = React.useCallback(() => {
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
      handleOpen,
      handleClose,
    }),
    [handleClose, handleOpen, onPointerInTransitChange, open],
  );

  return (
    <Popper.Root>
      <TooltipContext.Provider value={contextValue}>{children}</TooltipContext.Provider>
    </Popper.Root>
  );
}

Tooltip.displayName = 'Tooltip';
