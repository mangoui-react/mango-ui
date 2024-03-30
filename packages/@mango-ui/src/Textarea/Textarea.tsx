import React, { useCallback } from 'react';

import useControlled from '../internal/useControlled';
import { ComponentBaseProps } from '../types/common';

export interface TextareaProps
  extends ComponentBaseProps,
    React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  // type?: React.HTMLInputTypeAttribute;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
}

// TODO: 그냥 textarea 으로 하는것 생각해보자 - headless 인 경우 컴포넌트 구현 의미가 없는듯?
const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    { value: valueProp, defaultValue = '', rows = 3, disabled, readOnly, onChange, ...rest },
    ref,
  ) => {
    const [value, setValue] = useControlled<string | undefined>(valueProp, defaultValue);

    const handleChange = useCallback(
      (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = event.target.value;
        setValue(newValue);
        onChange?.(event);
      },
      [onChange, setValue],
    );

    return (
      <textarea
        ref={ref}
        value={value}
        rows={rows}
        disabled={disabled}
        readOnly={readOnly}
        onChange={handleChange}
        {...rest}
      />
    );
  },
);

Textarea.displayName = 'Textarea';

export default Textarea;
