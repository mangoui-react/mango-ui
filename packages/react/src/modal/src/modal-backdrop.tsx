import React from 'react';

import { preventBodyScroll } from '../../internal/remove-scroll';

import { ModalContext } from './modal';

export interface ModalBackdropProps extends React.ComponentPropsWithoutRef<'div'> {
  /**
   * Prevents closing when clicking on backdrop.
   * default is closing when clicking.
   * if true, do not close when clicking.
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

  // focus guard - 마우스 휠시 뒷배경 스크롤 안되게 함.
  const preventScroll = React.useRef<(() => void) | undefined>();
  React.useEffect(() => {
    if (open) {
      preventScroll.current = preventBodyScroll();
    } else {
      preventScroll.current?.();
    }
  }, [open]);

  if (!open) return null;

  return <div {...rest} ref={ref} onClick={handleClick} />;
});

ModalBackdrop.displayName = 'Modal.Backdrop';

export default ModalBackdrop;
