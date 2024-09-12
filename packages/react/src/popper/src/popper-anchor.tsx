import React from 'react';

import { Slot } from '@melio-ui/slot';
import { useMergedRef } from '@melio-ui/use-merged-ref';

import { PopperContext } from './popper';
import { Measurable } from './types';

export interface PopperAnchorProps extends React.ComponentPropsWithoutRef<'div'> {
  virtualRef?: React.RefObject<Measurable>;
  asChild?: boolean;
}

const PopperAnchor = React.forwardRef<HTMLDivElement, PopperAnchorProps>((props, ref) => {
  const { virtualRef, asChild, ...rest } = props;

  const { onAnchorChange } = React.useContext(PopperContext);

  const popperAnchorRef = React.useRef<HTMLDivElement>(null);
  const composedRefs = useMergedRef(popperAnchorRef, ref);

  const Component: any = asChild ? Slot : 'div';

  React.useEffect(() => {
    onAnchorChange(virtualRef?.current || popperAnchorRef.current);
  });

  return virtualRef ? null : <Component {...rest} ref={composedRefs} />;
});

PopperAnchor.displayName = 'Popper.Anchor';

export default PopperAnchor;
