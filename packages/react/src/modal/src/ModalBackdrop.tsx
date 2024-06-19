import React from 'react';

import { ModalContext } from './Modal';

export interface ModalBackdropProps extends React.ComponentPropsWithoutRef<'div'> {
  /**
   * Modal 의 background. true 일 때 Click 시 close
   * false 일 때 background 없음. Click 시 close 안 됨
   * 'static' 이면 background 있고 Click 시 close 안 됨
   */
  backdrop?: boolean | 'static';
}

const ModalBackdrop = React.forwardRef<HTMLDivElement, ModalBackdropProps>((props, ref) => {
  const { backdrop = 'static', onClick, ...rest } = props;
  const { open, handleClose } = React.useContext(ModalContext);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>): void => {
    if (event.target !== event.currentTarget) {
      return;
    }

    if (backdrop === true) {
      handleClose();
    }

    onClick?.(event);
  };

  if (!open || !backdrop) return null;

  return <div ref={ref} onClick={handleClick} {...rest} />;
});

ModalBackdrop.displayName = 'Modal.Backdrop';

export default ModalBackdrop;
