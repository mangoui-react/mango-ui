import React from 'react';

import useControlled from '../internal/useControlled';

type ToastViewportElement = HTMLDivElement;

export interface ToastProps {
  /** Toast open 여부 */
  open?: boolean;
  defaultOpen?: boolean;
  /**
   * 보여지는 시간 - milliseconds
   * @default 5000
   */
  duration?: number;
  children?: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
}

export interface ToastContextValue extends Pick<ToastProps, 'open'> {
  duration: number;
  // viewportRef: React.ForwardedRef<HTMLDivElement>;
  viewport: ToastViewportElement | null;
  // onViewportChange(viewport: ToastViewportElement): void;
  onViewportChange: (viewport: ToastViewportElement) => void;
  //
  handleOpen: () => void;
  handleClose: () => void;
}
export const ToastContext = React.createContext<ToastContextValue>({
  duration: 5000,
  viewport: null,
  onViewportChange: (viewport: ToastViewportElement) => {},
  //
  handleOpen: () => {},
  handleClose: () => {},
});

/**
 * 토스트 컴포넌트
 *
 * @author 안형노 <elle0510@gmail.com>
 */
export default function Toast(props: ToastProps): JSX.Element {
  const { open: openProp, defaultOpen, duration = 5000, children, onOpenChange } = props;

  const [open, setOpen] = useControlled<boolean | undefined>(openProp, defaultOpen);

  // const viewportRef = React.useRef<HTMLDivElement>(null);
  const [viewport, setViewport] = React.useState<ToastViewportElement | null>(null);

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
      duration,
      //
      viewport,
      onViewportChange: setViewport,
      //
      handleOpen,
      handleClose,
    }),
    [duration, handleClose, handleOpen, open, viewport],
  );

  return <ToastContext.Provider value={contextValue}>{children}</ToastContext.Provider>;
}

Toast.displayName = 'Toast';
