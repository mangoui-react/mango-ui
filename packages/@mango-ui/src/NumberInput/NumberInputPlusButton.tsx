// 'use client';

import React, { useCallback, useContext } from 'react';

import { ComponentBaseProps } from '../types/common';
import { NumberInputContext } from './NumberInputGroup';

export interface NumberInputPlusButtonProps
  extends ComponentBaseProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {}

const NumberInputPlusButton = React.forwardRef<HTMLButtonElement, NumberInputPlusButtonProps>(
  ({ disabled, onClick, ...rest }, ref) => {
    const { disabledPlusButton, onPlus } = useContext(NumberInputContext);

    const handleClick = useCallback(
      (event: React.MouseEvent<HTMLButtonElement>) => {
        onClick?.(event);
        onPlus(event);
      },
      [onClick, onPlus],
    );

    return (
      <button ref={ref} disabled={disabledPlusButton || disabled} onClick={handleClick} {...rest} />
    );
  },
);

NumberInputPlusButton.displayName = 'NumberInput.PlusButton';

export default NumberInputPlusButton;
