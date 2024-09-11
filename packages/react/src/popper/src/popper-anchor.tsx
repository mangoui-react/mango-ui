import React from 'react';

import { useMergedRef } from '@melio-ui/use-merged-ref';

import { PopperContext } from './popper';
import { Measurable } from './types';

export interface PopperAnchorProps extends React.ComponentPropsWithoutRef<'div'> {
  virtualRef?: React.RefObject<Measurable>;
}

const PopperAnchor = React.forwardRef<HTMLDivElement, PopperAnchorProps>((props, ref) => {
  const { virtualRef, ...rest } = props;

  const { onAnchorChange } = React.useContext(PopperContext);

  const popperAnchorRef = React.useRef<HTMLDivElement>(null);
  const composedRefs = useMergedRef(popperAnchorRef, ref);

  React.useEffect(() => {
    onAnchorChange(virtualRef?.current || popperAnchorRef.current);
  });

  return virtualRef ? null : <div {...rest} ref={composedRefs} />;
});

PopperAnchor.displayName = 'Popper.Anchor';

export default PopperAnchor;
