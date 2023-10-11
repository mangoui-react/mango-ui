// 'use client';

import React, { useCallback, useContext } from 'react';

import { ComponentBaseProps } from '../types/common';
import { NumberInputContext } from './NumberInputGroup';

export interface NumberInputMinusButtonProps
  extends ComponentBaseProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {}

const NumberInputMinusButton = React.forwardRef<HTMLButtonElement, NumberInputMinusButtonProps>(
  ({ disabled, onClick, ...rest }, ref) => {
    const { disabledMinusButton, onMinus } = useContext(NumberInputContext);

    const handleClick = useCallback(
      (event: React.MouseEvent<HTMLButtonElement>) => {
        onClick?.(event);
        onMinus(event);
      },
      [onClick, onMinus],
    );

    return (
      <button
        ref={ref}
        disabled={disabledMinusButton || disabled}
        onClick={handleClick}
        {...rest}
      />
    );
  },
);

NumberInputMinusButton.displayName = 'NumberInput.MinusButton';

export default NumberInputMinusButton;
