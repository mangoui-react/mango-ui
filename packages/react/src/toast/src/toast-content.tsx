import React from 'react';
import ReactDOM from 'react-dom';

import { ToastContext } from './toast';

export interface ToastContentProps extends React.ComponentPropsWithoutRef<'div'> {}

const ToastContent = React.forwardRef<HTMLDivElement, ToastContentProps>((props, ref) => {
  const { children, ...rest } = props;
  const { open, duration, viewport, handleClose } = React.useContext(ToastContext);

  const closeTimerRef = React.useRef(0);

  const startTimer = React.useCallback(
    (_duration: number) => {
      if (!_duration || _duration === Infinity) return;
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = window.setTimeout(handleClose, _duration);
    },
    [handleClose],
  );

  React.useEffect(() => {
    if (open) startTimer(duration);
  }, [duration, open, startTimer]);

  if (!open) {
    return null;
  }

  return (
    <>
      {ReactDOM.createPortal(
        <div data-state={open ? 'open' : 'closed'} tabIndex={0} {...rest} ref={ref}>
          {children}
        </div>,
        viewport ?? document.body,
      )}
    </>
  );
});

ToastContent.displayName = 'Toast.Content';

export default ToastContent;
