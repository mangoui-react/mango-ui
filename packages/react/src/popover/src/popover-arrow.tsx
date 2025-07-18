import React from 'react';

import { Popper } from '@mangoui/popper';

type PopoverArrowElement = React.ElementRef<typeof Popper.Arrow>;
export interface PopoverArrowProps extends React.ComponentPropsWithoutRef<typeof Popper.Arrow> {}

const PopoverArrow = React.forwardRef<PopoverArrowElement, PopoverArrowProps>((props, ref) => {
  return <Popper.Arrow {...props} ref={ref} />;
});

PopoverArrow.displayName = 'Popover.Arrow';

export default PopoverArrow;
