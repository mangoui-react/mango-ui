import React from 'react';

import { ModalContext } from './modal';

export interface ModalBackdropProps extends React.ComponentPropsWithoutRef<'div'> {
  /**
   * Prevents closing when clicking on backdrop.
   * default is closing when clicking.
   * if true, do not close when clicking.
   */
  preventCloseOnClick?: boolean;
}

// TODO: focus guard 만들 필요 있음 - 마우스 휠시 뒷배경 스크롤 되면 안됨(현재는 스크롤 되는 문제 있음)
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
