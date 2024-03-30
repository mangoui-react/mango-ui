// 'use client';
import React, { useCallback, useContext, useEffect } from 'react';

import { pattern } from '../internal/regexp';
import useControlled from '../internal/useControlled';

import { NumberInputContext } from './NumberInputGroup';

export type NumberInputValueType = number | null;

export interface NumberInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'defaultValue' | 'onChange'> {
  value?: NumberInputValueType;
  defaultValue?: NumberInputValueType;
  /** 최소값 */
  min?: number;
  /** 최대값 */
  max?: number;
  /** 증가/감소 간격 */
  step?: number;
  /** 값 변경시 호출 */
  onChange?: (
    event: React.SyntheticEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement>,
    value: NumberInputValueType,
  ) => void;
}

const NumberInput = React.forwardRef<HTMLInputElement, NumberInputProps>(
  (
    {
      defaultValue,
      value: valueProp,
      disabled,
      readOnly,
      // invalid,
      min = -Infinity,
      max = Infinity,
      step = 1,
      onChange,
      onBlur,
      onKeyDown,
      ...rest
    },
    ref,
  ) => {
    const {
      setDisabledPlusButton,
      setdisabledMinusButton,
      //
      setOnPlus,
      setOnMinus,
    } = useContext(NumberInputContext);

    const [value, setValue] = useControlled<NumberInputValueType | undefined>(
      valueProp,
      defaultValue,
    );

    const isMaxValue = useCallback(
      (val?: NumberInputValueType): boolean => {
        if (val === undefined || val === null) return false;
        return val >= max;
      },
      [max],
    );

    const isMinValue = useCallback(
      (val?: NumberInputValueType): boolean => {
        if (val === undefined || val === null) return false;
        return val <= min;
      },
      [min],
    );

    const isNumber = useCallback((val: string): boolean => {
      if (!pattern.number.test(val)) {
        // setValue(undefined);
        return false;
      }
      return true;
    }, []);

    const changeValue = useCallback(
      (
        e: React.SyntheticEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement>,
        val: NumberInputValueType,
      ) => {
        setDisabledPlusButton(isMaxValue(val));
        setdisabledMinusButton(isMinValue(val));
        setValue(val);
        onChange?.(e, val);
      },
      [isMaxValue, isMinValue, onChange, setDisabledPlusButton, setValue, setdisabledMinusButton],
    );

    // max 보다 크면 max 리턴, min 보다 작으면 min 리턴, 그렇지 않으면 값 그대로 리턴
    const checkMinMax = useCallback(
      (val: number): number => {
        let _val = val;
        if (val > max) {
          _val = max;
        } else if (val < min) {
          _val = min;
        }
        return _val;
      },
      [max, min],
    );

    const handleChange = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        const val = event.target.value;
        if (val !== '' && !isNumber(val)) {
          setValue(val as never);
          onChange?.(event, val as never);
          return;
        }
        const newVal = val === '' ? null : +val;
        changeValue(event, newVal);
      },
      [changeValue, isNumber, onChange, setValue],
    );

    const handlePlus = useCallback(
      (event: React.MouseEvent<HTMLButtonElement>) => {
        // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
        if (disabled || readOnly) return;

        // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
        const val = typeof value === 'string' ? 0 : (value || 0) + step;
        const result = checkMinMax(val);
        changeValue(event, result);
      },
      [changeValue, checkMinMax, disabled, readOnly, step, value],
    );

    const handleMinus = useCallback(
      (event: React.MouseEvent<HTMLButtonElement>) => {
        // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
        if (disabled || readOnly) return;

        // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
        const val = typeof value === 'string' ? 0 : (value || 0) - step;
        const result = checkMinMax(val);
        changeValue(event, result);
      },
      [changeValue, checkMinMax, disabled, readOnly, step, value],
    );

    const changeInputValue = useCallback(
      (e: React.SyntheticEvent<HTMLInputElement>) => {
        const result = typeof value === 'number' ? checkMinMax(value) : null;

        changeValue(e, result);
      },
      [changeValue, checkMinMax, value],
    );

    const handleBlur = useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        changeInputValue(e);
        onBlur?.(e);
      },
      [changeInputValue, onBlur],
    );

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLInputElement>) => {
        // event.stopPropagation();
        if (e.key === 'Enter') {
          e.preventDefault();
          changeInputValue(e);
        }
        onKeyDown?.(e);
      },
      [changeInputValue, onKeyDown],
    );

    // NumberInputContext plus/minus 함수 셋팅
    useEffect(() => {
      setOnPlus(() => handlePlus);
    }, [handlePlus, setOnPlus]);

    useEffect(() => {
      setOnMinus(() => handleMinus);
    }, [handleMinus, setOnMinus]);

    return (
      <input
        ref={ref}
        value={Number.isNaN(value) ? '' : value?.toString() ?? ''}
        disabled={disabled}
        readOnly={readOnly}
        // invalid={invalid}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        {...rest}
      />
    );
  },
);

NumberInput.displayName = 'NumberInput';

export default NumberInput;
