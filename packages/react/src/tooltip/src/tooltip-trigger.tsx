import React from 'react';

import { Popper } from '@melio-ui/popper';
import { Slot } from '@melio-ui/slot';
import { useMergedRef } from '@melio-ui/use-merged-ref';

import { TooltipContext } from './tooltip';

export interface TooltipTriggerProps extends React.ComponentPropsWithoutRef<'button'> {
  asChild?: boolean;
}

const TooltipTrigger = React.forwardRef<HTMLButtonElement, TooltipTriggerProps>((props, ref) => {
  const { children, asChild, onPointerMove, onPointerLeave, ...rest } = props;
  const { open, triggerRef, isPointerInTransitRef, onOpen, onClose } =
    React.useContext(TooltipContext);
  const handleTriggerRef = useMergedRef(triggerRef, ref);

  const hasPointerMoveOpenedRef = React.useRef(false);

  const Component = asChild ? Slot : 'button';

  const handlePointerMove = (event: React.PointerEvent<HTMLButtonElement>): void => {
    if (!hasPointerMoveOpenedRef.current && !isPointerInTransitRef.current) {
      onOpen();
      hasPointerMoveOpenedRef.current = true;
    }
    onPointerMove?.(event);
  };

  const handlePointerLeave = (event: React.PointerEvent<HTMLButtonElement>): void => {
    if (isPointerInTransitRef.current) {
      onClose();
    }

    hasPointerMoveOpenedRef.current = false;
    onPointerLeave?.(event);
  };

  return (
    <Popper.Anchor asChild>
      <Component
        type="button"
        data-state={open ? 'open' : 'closed'}
        {...rest}
        ref={handleTriggerRef}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
      >
        {children ?? 'Tooltip'}
      </Component>
    </Popper.Anchor>
  );
});

TooltipTrigger.displayName = 'Tooltip.Trigger';

export default TooltipTrigger;
