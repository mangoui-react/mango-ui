import React from 'react';

import { useControlled } from '@melio-ui/use-controlled';

import { pattern } from '../internal/regexp';
import { FormElementBaseProps } from '../types/common';

export type NumberInputValue = number | null;

export interface NumberInputProps
  extends FormElementBaseProps<NumberInputValue>,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'defaultValue'> {
  /** 최소값 */
  min?: number;
  /** 최대값 */
  max?: number;
  /** 증가/감소 간격 */
  step?: number;
  /** 값 변경시 호출 */
  onValueChange?: (value: NumberInputValue) => void;
}

export interface NumberInputContextValue {
  name?: string; // NumberInputProps['name'];
  value?: NumberInputValue; // NumberInputProps['value'];
  disabled?: boolean; // NumberInputProps['disabled'];
  readOnly?: boolean; // NumberInputProps['readOnly'];
  //
  disabledPlusButton: boolean;
  disabledMinusButton: boolean;
  setDisabledPlusButton: React.Dispatch<React.SetStateAction<boolean>>;
  setdisabledMinusButton: React.Dispatch<React.SetStateAction<boolean>>;
  //
  onPlus: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onMinus: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onNumberInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onNumberInputBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  onNumberInputKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const NumberInputContext = React.createContext<NumberInputContextValue>({
  disabledPlusButton: false,
  disabledMinusButton: false,
  setDisabledPlusButton: () => {},
  setdisabledMinusButton: () => {},
  //
  onPlus: () => {},
  onMinus: () => {},
  onNumberInputChange: () => {},
  onNumberInputBlur: () => {},
  onNumberInputKeyDown: () => {},
});

/**
 * 숫자 입력 컴포넌트
 *
 * @author 안형노 <elle0510@gmail.com>
 */
const NumberInput = React.forwardRef<HTMLDivElement, NumberInputProps>((props, ref) => {
  const {
    name,
    defaultValue,
    value: valueProp,
    disabled,
    readOnly,
    min = -Infinity,
    max = Infinity,
    step = 1,
    children,
    onValueChange,
    onBlur,
    onKeyDown,
    ...rest
  } = props;

  const [value, setValue] = useControlled<NumberInputValue | undefined>(valueProp, defaultValue);

  const [disabledPlusButton, setDisabledPlusButton] = React.useState<boolean>(false);
  const [disabledMinusButton, setdisabledMinusButton] = React.useState<boolean>(false);

  const isMaxValue = React.useCallback(
    (val?: NumberInputValue): boolean => {
      if (val === undefined || val === null) return false;
      return val >= max;
    },
    [max],
  );

  const isMinValue = React.useCallback(
    (val?: NumberInputValue): boolean => {
      if (val === undefined || val === null) return false;
      return val <= min;
    },
    [min],
  );

  const isNumber = React.useCallback((val: string): boolean => {
    if (!pattern.number.test(val)) {
      // setValue(undefined);
      return false;
    }
    return true;
  }, []);

  const changeValue = React.useCallback(
    (val: NumberInputValue) => {
      setDisabledPlusButton(isMaxValue(val));
      setdisabledMinusButton(isMinValue(val));
      setValue(val);
      onValueChange?.(val);
    },
    [isMaxValue, isMinValue, onValueChange, setValue],
  );

  // max 보다 크면 max 리턴, min 보다 작으면 min 리턴, 그렇지 않으면 값 그대로 리턴
  const checkMinMax = React.useCallback(
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

  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const val = event.target.value;
      if (val !== '' && !isNumber(val)) {
        setValue(val as never);
        onValueChange?.(val as never);
        return;
      }
      const newVal = val === '' ? null : +val;
      changeValue(newVal);
    },
    [changeValue, isNumber, onValueChange, setValue],
  );

  const handlePlus = React.useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
    if (disabled || readOnly) return;

    // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
    const val = typeof value === 'string' ? 0 : (value || 0) + step;
    const result = checkMinMax(val);
    changeValue(result);
  }, [changeValue, checkMinMax, disabled, readOnly, step, value]);

  const handleMinus = React.useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
    if (disabled || readOnly) return;

    // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
    const val = typeof value === 'string' ? 0 : (value || 0) - step;
    const result = checkMinMax(val);
    changeValue(result);
  }, [changeValue, checkMinMax, disabled, readOnly, step, value]);

  const changeInputValue = React.useCallback(() => {
    const result = typeof value === 'number' ? checkMinMax(value) : null;

    changeValue(result);
  }, [changeValue, checkMinMax, value]);

  const handleBlur = React.useCallback(
    (event: React.FocusEvent<HTMLInputElement>) => {
      changeInputValue();
      onBlur?.(event);
    },
    [changeInputValue, onBlur],
  );

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      // event.stopPropagation();
      if (event.key === 'Enter') {
        event.preventDefault();
        changeInputValue();
      }
      onKeyDown?.(event);
    },
    [changeInputValue, onKeyDown],
  );

  const contextValue = React.useMemo(
    () => ({
      name,
      value,
      disabled,
      readOnly,
      //
      disabledPlusButton,
      disabledMinusButton,
      setDisabledPlusButton,
      setdisabledMinusButton,
      //
      onPlus: handlePlus,
      onMinus: handleMinus,
      onNumberInputChange: handleChange,
      onNumberInputBlur: handleBlur,
      onNumberInputKeyDown: handleKeyDown,
    }),
    [
      disabled,
      disabledMinusButton,
      disabledPlusButton,
      handleBlur,
      handleChange,
      handleKeyDown,
      handleMinus,
      handlePlus,
      name,
      readOnly,
      value,
    ],
  );

  return (
    <NumberInputContext.Provider value={contextValue}>
      <div
        ref={ref}
        data-disabled={disabled ? '' : undefined}
        data-readonly={readOnly ? '' : undefined}
        {...rest}
      >
        {children}
      </div>
    </NumberInputContext.Provider>
  );
});

NumberInput.displayName = 'NumberInput';

export default NumberInput;
