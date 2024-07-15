import React from 'react';

// TODO: lodash 제거 하고 remove 직접 구현하자(packages 에서 lodash, @types/lodash 제거해야 함)
import remove from 'lodash/fp/remove';

import { useControlled } from '@melio-ui/use-controlled';

import { FormElementBaseProps, TypeAttributes } from '../../types/common';

import { CheckboxValue } from './checkbox';

export interface CheckboxGroupProps
  extends FormElementBaseProps<CheckboxValue[]>,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'defaultValue'> {
  /**
   * Checkbox 컴포넌트 방향
   * @default 'horizontal'
   */
  orientation?: TypeAttributes.Orientation;
  /** checked 변경시 호출 */
  onValueChange?: (value: CheckboxValue[]) => void;
}

export interface CheckboxGroupContextValue {
  name?: string;
  value?: CheckboxValue[];
  disabled?: boolean;
  readOnly?: boolean;
  onValueChange?: (value: CheckboxValue, checked: boolean) => void;
}

export const CheckboxGroupContext = React.createContext<CheckboxGroupContextValue>({});

const CheckboxGroup = React.forwardRef<HTMLDivElement, CheckboxGroupProps>((props, ref) => {
  const {
    orientation = 'horizontal',
    name,
    defaultValue = [],
    value: valueProp,
    disabled,
    readOnly,
    children,
    onValueChange,
    ...rest
  } = props;

  const [value, setValue] = useControlled<CheckboxValue[] | undefined>(valueProp, defaultValue);

  const getValue = React.useCallback(() => {
    return value ?? defaultValue ?? [];
  }, [defaultValue, value]);

  const handleChange = React.useCallback(
    (childValue: CheckboxValue, childChecked: boolean) => {
      let newValue = [...getValue()];

      if (childChecked) {
        newValue.push(childValue);
      } else {
        newValue = remove((_value) => _value === childValue, newValue);
      }

      onValueChange?.(newValue);
      setValue(newValue);
    },
    [getValue, onValueChange, setValue],
  );

  const contextValue = React.useMemo(
    () => ({
      name,
      value: getValue(),
      disabled,
      readOnly,
      onValueChange: handleChange,
    }),
    [disabled, getValue, handleChange, name, readOnly],
  );

  return (
    <CheckboxGroupContext.Provider value={contextValue}>
      <div {...rest} data-orientation={orientation} ref={ref}>
        {children}
      </div>
    </CheckboxGroupContext.Provider>
  );
});

CheckboxGroup.displayName = 'Checkbox.Group';

export default CheckboxGroup;
