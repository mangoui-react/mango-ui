import React from 'react';

import Slot from '../internal/components/Slot';
import ArrowDownIcon from '../internal/icons/ArrowDownIcon';

import { NumberInputContext } from './NumberInput';

export interface NumberInputMinusProps extends React.ComponentPropsWithoutRef<'button'> {
  asChild?: boolean;
}

const NumberInputMinus = React.forwardRef<HTMLButtonElement, NumberInputMinusProps>(
  (props, ref) => {
    const {
      disabled: disabledCtx,
      disabledMinusButton,
      onMinus,
    } = React.useContext(NumberInputContext);
    const { disabled = disabledCtx, children, asChild, onClick, ...rest } = props;

    const Component = asChild ? Slot : 'button';

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
      onMinus(event);
      onClick?.(event);
    };

    return (
      <Component
        ref={ref}
        type="button"
        disabled={disabled ?? disabledMinusButton}
        onClick={handleClick}
        {...rest}
      >
        {children ?? <ArrowDownIcon />}
      </Component>
    );
  },
);

NumberInputMinus.displayName = 'NumberInput.Minus';

export default NumberInputMinus;
