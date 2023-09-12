import React, { useCallback } from 'react';

import useControlled from '../hooks/useControlled';
import { ComponentBaseProps } from '../types/common';

export interface InputProps
  extends ComponentBaseProps,
    React.InputHTMLAttributes<HTMLInputElement> {
  // type?: React.HTMLInputTypeAttribute;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
}

// TODO: 그냥 input 으로 하는것 생각해보자 - headless 인 경우 컴포넌트 구현 의미가 없는듯?
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ value: valueProp, defaultValue = '', disabled, readOnly, onChange, ...rest }, ref) => {
    const [value, setValue] = useControlled<string | undefined>(valueProp, defaultValue);

    const handleChange = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setValue(newValue);
        onChange?.(event);
      },
      [onChange, setValue],
    );

    return (
      <input
        ref={ref}
        value={value}
        disabled={disabled}
        readOnly={readOnly}
        onChange={handleChange}
        {...rest}
      />
    );
  },
);

export default Input;
