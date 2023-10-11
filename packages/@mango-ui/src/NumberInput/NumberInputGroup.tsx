// 'use client';

import React, { useMemo, useState } from 'react';

import { ComponentBaseProps } from '../types/common';

export interface NumberInputGroupProps
  extends ComponentBaseProps,
    React.HTMLAttributes<HTMLDivElement> {}

export interface NumberInputContextValue {
  disabledPlusButton: boolean;
  disabledMinusButton: boolean;
  setDisabledPlusButton: React.Dispatch<React.SetStateAction<boolean>>;
  setdisabledMinusButton: React.Dispatch<React.SetStateAction<boolean>>;
  //
  onPlus: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onMinus: (event: React.MouseEvent<HTMLButtonElement>) => void;
  setOnPlus: React.Dispatch<
    React.SetStateAction<(event: React.MouseEvent<HTMLButtonElement>) => void>
  >;
  setOnMinus: React.Dispatch<
    React.SetStateAction<(event: React.MouseEvent<HTMLButtonElement>) => void>
  >;
}

export const NumberInputContext = React.createContext<NumberInputContextValue>({
  disabledPlusButton: false,
  disabledMinusButton: false,
  setDisabledPlusButton: () => {},
  setdisabledMinusButton: () => {},
  //
  onPlus: () => {},
  onMinus: () => {},
  setOnPlus: () => {},
  setOnMinus: () => {},
});

const NumberInputGroup = React.forwardRef<HTMLDivElement, NumberInputGroupProps>((props, ref) => {
  const [disabledPlusButton, setDisabledPlusButton] = useState<boolean>(false);
  const [disabledMinusButton, setdisabledMinusButton] = useState<boolean>(false);

  const [onPlus, setOnPlus] = useState<(event: React.MouseEvent<HTMLButtonElement>) => void>(
    () => {},
  );
  const [onMinus, setOnMinus] = useState<(event: React.MouseEvent<HTMLButtonElement>) => void>(
    () => {},
  );

  const contextValue = useMemo(
    () => ({
      disabledPlusButton,
      disabledMinusButton,
      setDisabledPlusButton,
      setdisabledMinusButton,
      //
      onPlus,
      onMinus,
      setOnPlus,
      setOnMinus,
    }),
    [disabledMinusButton, disabledPlusButton, onMinus, onPlus],
  );

  return (
    <NumberInputContext.Provider value={contextValue}>
      <div ref={ref} {...props} />
    </NumberInputContext.Provider>
  );
});

NumberInputGroup.displayName = 'NumberInput.Group';

export default NumberInputGroup;
