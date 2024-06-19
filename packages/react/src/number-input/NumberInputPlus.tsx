import React from 'react';

import Slot from '../internal/components/Slot';
import ArrowUpIcon from '../internal/icons/ArrowUpIcon';

import { NumberInputContext } from './NumberInput';

export interface NumberInputPlusProps extends React.ComponentPropsWithoutRef<'button'> {
  asChild?: boolean;
}

const NumberInputPlus = React.forwardRef<HTMLButtonElement, NumberInputPlusProps>((props, ref) => {
  const {
    disabled: disabledCtx,
    disabledPlusButton,
    onPlus,
  } = React.useContext(NumberInputContext);
  const { disabled = disabledCtx, children, asChild, onClick, ...rest } = props;

  const Component = asChild ? Slot : 'button';

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    onPlus(event);
    onClick?.(event);
  };

  return (
    <Component
      ref={ref}
      type="button"
      disabled={disabled ?? disabledPlusButton}
      onClick={handleClick}
      {...rest}
    >
      {children ?? <ArrowUpIcon />}
    </Component>
  );
});

NumberInputPlus.displayName = 'NumberInput.Plus';

export default NumberInputPlus;
