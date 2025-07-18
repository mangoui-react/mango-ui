import React from 'react';

import { Slot } from '@mangoui/slot';

import { ArrowUpIcon } from '../../internal/icons/arrow-up-icon';

import { NumberInputContext } from './number-input';

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
      {...rest}
      ref={ref}
      type="button"
      disabled={disabled ?? disabledPlusButton}
      onClick={handleClick}
    >
      {children ?? <ArrowUpIcon />}
    </Component>
  );
});

NumberInputPlus.displayName = 'NumberInput.Plus';

export default NumberInputPlus;
