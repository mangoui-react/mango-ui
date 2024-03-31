import React from 'react';

import { ComponentPropsWithoutRef } from '../types/common';

export interface ModalFooterProps extends ComponentPropsWithoutRef<'div'> {}

// TODO: 필요없을 듯...(좀 더 생각해 보고 결정하자)
const ModalFooter = React.forwardRef<HTMLDivElement, ModalFooterProps>((props, ref) => {
  const { children, ...rest } = props;

  return (
    <div ref={ref} {...rest}>
      {children}
    </div>
  );
});

ModalFooter.displayName = 'Modal.Footer';

export default ModalFooter;
