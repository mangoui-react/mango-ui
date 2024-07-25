import React from 'react';

import { ModalContext } from './modal';

export interface ModalBackdropProps extends React.ComponentPropsWithoutRef<'div'> {
  /**
   * Modal 의 background.
   * default는 Click 시 close
   * true 이면 Click 시 close 안 됨
   */
  preventCloseOnClick?: boolean;
}

const ModalBackdrop = React.forwardRef<HTMLDivElement, ModalBackdropProps>((props, ref) => {
  const { preventCloseOnClick, onClick, ...rest } = props;
  const { open, handleClose } = React.useContext(ModalContext);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>): void => {
    if (event.target !== event.currentTarget) {
      return;
    }

    if (!preventCloseOnClick) {
      handleClose();
    }

    onClick?.(event);
  };

  if (!open) return null;

  return <div {...rest} ref={ref} onClick={handleClick} />;
});

ModalBackdrop.displayName = 'Modal.Backdrop';

export default ModalBackdrop;
