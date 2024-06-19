import React from 'react';

import CloseIcon from '../../internal/icons/CloseIcon';

export interface ModalCloseButtonProps extends React.ComponentPropsWithoutRef<'button'> {}

// TODO: 필요없을 듯...(좀 더 생각해 보고 결정하자) children 없애고 <CloseIcon /> 만 하자
const ModalCloseButton = React.forwardRef<HTMLButtonElement, ModalCloseButtonProps>(
  (props, ref) => {
    const { children, ...rest } = props;

    return (
      <button ref={ref} type="button" {...rest}>
        {children ?? <CloseIcon />}
      </button>
    );
  },
);

ModalCloseButton.displayName = 'Modal.CloseButton';

export default ModalCloseButton;
