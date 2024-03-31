import React from 'react';

import { ComponentPropsWithoutRef } from '../types/common';

export interface ModalBodyProps extends ComponentPropsWithoutRef<'div'> {}

// TODO: 필요없을 듯...(좀 더 생각해 보고 결정하자)
const ModalBody = React.forwardRef<HTMLDivElement, ModalBodyProps>((props, ref) => {
  const { children, ...rest } = props;

  return (
    <div ref={ref} {...rest}>
      {children}
    </div>
  );
});

ModalBody.displayName = 'Modal.Body';

export default ModalBody;
