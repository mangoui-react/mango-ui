import React from 'react';

import { useControlled } from '@mangoui/use-controlled';

import { FormElementBaseProps, TypeAttributes } from '../../types/common';

import { RadioValue } from './radio-group-item';

export interface RadioGroupProps
  extends FormElementBaseProps<RadioValue>,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'defaultValue'> {
  /**
   * Checkbox 컴포넌트 방향
   * @default 'horizontal'
   */
  orientation?: TypeAttributes.Orientation;
  /** checked 변경시 호출 */
  onValueChange?: (value: RadioValue) => void;
}

export interface RadioGroupContextValue
  extends Pick<RadioGroupProps, 'name' | 'value' | 'disabled' | 'readOnly'> {
  onValueChange?: (value: RadioValue) => void;
}

export const RadioGroupContext = React.createContext<RadioGroupContextValue>({});

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>((props, ref) => {
  const {
    orientation = 'horizontal',
    name,
    defaultValue,
    value: valueProp,
    disabled,
    readOnly,
    children,
    onValueChange,
    ...rest
  } = props;

  const [value, setValue] = useControlled<RadioValue | undefined>(valueProp, defaultValue);

  const handleChange = React.useCallback(
    (childValue: RadioValue) => {
      setValue(childValue);
      onValueChange?.(childValue);
    },
    [onValueChange, setValue],
  );

  const contextValue = React.useMemo(
    () => ({
      name,
      value,
      disabled,
      readOnly,
      onValueChange: handleChange,
    }),
    [disabled, handleChange, name, readOnly, value],
  );

  return (
    <RadioGroupContext.Provider value={contextValue}>
      <div data-orientation={orientation} {...rest} ref={ref}>
        {children}
      </div>
    </RadioGroupContext.Provider>
  );
});

RadioGroup.displayName = 'RadioGroup.Root';

export default RadioGroup;
