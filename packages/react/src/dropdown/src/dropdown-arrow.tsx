import React from 'react';

import { Popper } from '@melio-ui/popper';

type DropdownArrowElement = React.ElementRef<typeof Popper.Arrow>;
export interface DropdownArrowProps extends React.ComponentPropsWithoutRef<typeof Popper.Arrow> {}

const DropdownArrow = React.forwardRef<DropdownArrowElement, DropdownArrowProps>((props, ref) => {
  return <Popper.Arrow {...props} ref={ref} />;
});

DropdownArrow.displayName = 'Dropdown.Arrow';

export default DropdownArrow;
