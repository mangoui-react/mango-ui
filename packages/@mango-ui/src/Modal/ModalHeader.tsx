import React from 'react';

import { ComponentPropsWithoutRef } from '../types/common';

export interface ModalHeaderProps extends ComponentPropsWithoutRef<'div'> {}

// TODO: 필요없을 듯...(좀 더 생각해 보고 결정하자)
const ModalHeader = React.forwardRef<HTMLDivElement, ModalHeaderProps>((props, ref) => {
  const { children, ...rest } = props;

  return (
    <div ref={ref} {...rest}>
      {children}
    </div>
  );
});

ModalHeader.displayName = 'Modal.Header';

export default ModalHeader;
