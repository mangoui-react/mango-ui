import React from 'react';

import { NumberInputContext } from './NumberInput';

export interface NumberInputFieldProps extends React.ComponentPropsWithoutRef<'input'> {}

const NumberInputField = React.forwardRef<HTMLInputElement, NumberInputFieldProps>((props, ref) => {
  const {
    name: nameCtx,
    value: valueCtx,
    disabled: disabledCtx,
    readOnly: readOnlyCtx,
    onNumberInputChange,
    onNumberInputBlur,
    onNumberInputKeyDown,
  } = React.useContext(NumberInputContext);

  const {
    name = nameCtx,
    value = valueCtx,
    disabled = disabledCtx,
    readOnly = readOnlyCtx,
    onChange,
    onBlur,
    onKeyDown,
    ...rest
  } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onNumberInputChange(event);
    onChange?.(event);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>): void => {
    onNumberInputBlur(event);
    onBlur?.(event);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    onNumberInputKeyDown(event);
    onKeyDown?.(event);
  };

  return (
    <input
      ref={ref}
      name={name}
      value={Number.isNaN(value) ? '' : value?.toString() ?? ''}
      disabled={disabled}
      readOnly={readOnly}
      onChange={handleChange}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      {...rest}
    />
  );
});

NumberInputField.displayName = 'NumberInput.Field';

export default NumberInputField;
