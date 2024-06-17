import React from 'react';

// TODO: react-transition-group 없애는 방식으로 하자(packages 에서도 제거해야 함)
import { Transition, TransitionStatus } from 'react-transition-group';

import { useEffectOnce, useMergedRef } from '../hooks';
import { ComponentPropsWithoutRef } from '../types/common';

import { ModalContext } from './Modal';

interface AnimaitonType {
  keyframes: Keyframe[] | PropertyIndexedKeyframes | null;
  options: number | KeyframeAnimationOptions;
}

export interface ModalContentProps extends ComponentPropsWithoutRef<'div'> {
  /**
   * Close 될 때 Modal 컴포넌트 DOM 제거
   * forceMount=true 시 unabled 됨
   * @default true
   */
  destroyOnClose?: boolean;
  forceMount?: boolean;
  /** ESC 키 사용시 close
   * @default true
   */
  closeOnEsc?: boolean;
  /** animation 
   * 예)
   * {
      keyframes: [
        { opacity: 0, transform: 'scale(0)' },
        { opacity: 1, transform: 'scale(1)' },
      ],
      options: 200,
   * }
   */
  animation?: AnimaitonType;
}

const ModalContent = React.forwardRef<HTMLDivElement, ModalContentProps>((props, ref) => {
  const {
    style,
    destroyOnClose = true,
    forceMount,
    closeOnEsc = true,
    animation,
    children,
    onKeyDown,
    ...rest
  } = props;
  const { role, open, handleOpen, handleClose } = React.useContext(ModalContext);

  const nodeRef = React.useRef(null); // StrictMode 사용시 콘솔에러 메시지 방지를 위해

  const [exited, setExited] = React.useState<boolean>(!open);
  const initialize = React.useRef<boolean>(true);

  // animation 처리
  const modalRef = React.useRef<HTMLDivElement>(null);
  const handleModalRef = useMergedRef(modalRef, ref);

  const modalAni = React.useRef<Animation>();
  const [openAni, setOpenAni] = React.useState(false);

  const mountModal = open && !exited;

  React.useEffect(() => {
    if (open) {
      if (animation && !modalAni.current) {
        // if (modalRef.current) {
        //   modalRef.current.style.visibility = 'hidden';
        //   modalRef.current.style.opacity = '0';
        // }
        setOpenAni(true);
      } else {
        handleOpen();
      }
    }
  }, [animation, handleOpen, open]);

  // animation 처리 - start
  React.useEffect(() => {
    if (animation && openAni && open && !modalAni.current) {
      if (modalRef.current) {
        modalRef.current.style.visibility = 'visible';
        // modalRef.current.style.opacity = '1';
      }

      // {
      //   keyframes: [
      //     { opacity: 0, transform: 'scale(0)' },
      //     { opacity: 1, transform: 'scale(1)' },
      //   ],
      //   options: 200,
      // }
      const { keyframes, options } = animation;
      modalAni.current = modalRef.current?.animate(keyframes, options);

      handleOpen();
    }
  }, [animation, handleOpen, open, openAni]);

  // animation 처리 - end
  React.useEffect(() => {
    const aniend = (): void => {
      setOpenAni(false);
      modalAni.current = undefined;

      if (modalRef.current) {
        modalRef.current.style.visibility = 'hidden';
        // modalRef.current.style.opacity = '0';
      }
    };

    if (!open && animation && modalAni.current?.playState === 'finished') {
      modalAni.current?.reverse();

      void modalAni.current?.finished.then((ani: Animation) => {
        aniend();
      });
    }
  }, [animation, open]);

  // Esc 키 down 시 close)
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (closeOnEsc && event.key === 'Escape') {
      handleClose();
    }
    onKeyDown?.(event);
  };

  const handleOpened = (): void => {
    if (exited) {
      setExited(false);
    }
    initialize.current = false;
  };

  const handleExited = (): void => {
    setExited(true);
  };

  useEffectOnce(() => {
    return () => {
      handleExited();
    };
  }); // will unmount

  React.useEffect(() => {
    if (open) {
      handleOpened();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]); // exited 에 의해 handleOpened 함수가 새로 정의 되어 2번씩 호출되는 것을 방지하기 위해 open 만 으로 판단

  // console.log('Modal Render initialize.current', initialize.current);
  if (initialize.current && !mountModal && !forceMount) {
    return null;
  }

  if (!mountModal && !forceMount && destroyOnClose) {
    return null;
  }

  return (
    <Transition
      nodeRef={nodeRef}
      in={animation ? openAni : open}
      timeout={10}
      onExited={handleExited}
    >
      {(state: TransitionStatus) => (
        <div
          ref={handleModalRef}
          // data-state={!open && !destroyOnClose && state === 'exited' ? 'closed' : 'open'}
          // data-state={state === 'entered' ? 'open' : 'closed'}
          data-state={(animation ? openAni : open) ? 'open' : 'closed'}
          role={role}
          style={{
            // display: !open && !destroyOnClose && state === 'exited' ? 'none' : undefined,
            display: open && state === 'entered' ? undefined : 'none',
            ...style,
          }}
          tabIndex={-1}
          onKeyDown={handleKeyDown}
          {...rest}
        >
          {children}
        </div>
      )}
    </Transition>
  );
});

ModalContent.displayName = 'Modal.Content';

export default ModalContent;
