import React from 'react';

import { CloseIcon } from '../../internal/icons/close-icon';

export interface ModalCloseButtonProps extends React.ComponentPropsWithoutRef<'button'> {}

// TODO: 필요없을 듯...(좀 더 생각해 보고 결정하자) children 없애고 <CloseIcon /> 만 하자
const ModalCloseButton = React.forwardRef<HTMLButtonElement, ModalCloseButtonProps>(
  (props, ref) => {
    const { children, ...rest } = props;

    return (
      <button {...rest} ref={ref} type="button">
        {children ?? <CloseIcon />}
      </button>
    );
  },
);

ModalCloseButton.displayName = 'Modal.CloseButton';

export default ModalCloseButton;
