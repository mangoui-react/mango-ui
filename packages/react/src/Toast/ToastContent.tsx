import React from 'react';
import ReactDOM from 'react-dom';

import { Transition, TransitionStatus } from 'react-transition-group';

import { ComponentPropsWithoutRef } from '../types/common';

import { ToastContext } from './Toast';

export interface ToastContentProps extends ComponentPropsWithoutRef<'div'> {}

const ToastContent = React.forwardRef<HTMLDivElement, ToastContentProps>((props, ref) => {
  const { children, ...rest } = props;
  const { open, duration, viewport, handleClose } = React.useContext(ToastContext);

  const nodeRef = React.useRef(null); // StrictMode 사용시 콘솔에러 메시지 방지를 위해
  const closeTimerRef = React.useRef(0);

  const [exited, setExited] = React.useState<boolean>(!open);

  const mountToast = open && !exited;

  const handleOpened = (): void => {
    if (exited) {
      setExited(false);
    }
  };

  // const handleEnter = () => {
  //   setExited(false);
  // };
  const handleExited = (): void => {
    setExited(true);
  };
  React.useEffect(() => {
    if (open) {
      handleOpened();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]); // exited 에 의해 handleOpened 함수가 새로 정의 되어 2번씩 호출되는 것을 방지하기 위해 open 만 으로 판단

  const startTimer = React.useCallback(
    (_duration: number) => {
      if (!_duration || _duration === Infinity) return;
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = window.setTimeout(handleClose, _duration);
    },
    [handleClose],
  );

  React.useEffect(() => {
    if (mountToast) startTimer(duration);
  }, [duration, mountToast, startTimer]);

  if (!mountToast) {
    return null;
  }

  return (
    <>
      {ReactDOM.createPortal(
        <Transition
          nodeRef={nodeRef}
          appear
          in={open}
          timeout={10}
          // onEnter={handleEnter}
          onExited={handleExited}
        >
          {(state: TransitionStatus) => (
            <div
              ref={ref}
              // data-state={state === 'entered' ? 'open' : 'closed'}
              data-state={open ? 'open' : 'closed'}
              // tabIndex={-1}
              {...rest}
            >
              {children}
            </div>
          )}
        </Transition>,
        viewport ?? document.body,
      )}
    </>
  );
});

ToastContent.displayName = 'Toast.Content';

export default ToastContent;
