import React from 'react';

import { useChecked } from '../../internal/useChecked';
import { FormElementBaseProps } from '../../types/common';

import { getState } from './helpers/get-state';
import { RadioGroupContext } from './radio-group';

export type RadioValue = string | number;
export interface RadioProps
  extends FormElementBaseProps<RadioValue>,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'defaultChecked' | 'defaultValue'> {
  /** 초기 check 유무 */
  defaultChecked?: boolean;
  /** check 유무 */
  checked?: boolean;
  /**
   * input element 에 적용되는 attributes
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes)
   */
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

export interface RadioContextValue extends Pick<RadioProps, 'disabled' | 'readOnly'> {
  checked: boolean;
  uuid: string;
  onIndicatorClick: (event: React.MouseEvent<HTMLSpanElement>) => void;
}

export const RadioContext = React.createContext<RadioContextValue>({
  checked: false,
  uuid: 'eds-radio',
  onIndicatorClick: () => {},
});

const Radio = React.forwardRef<HTMLDivElement, RadioProps>((props, ref) => {
  const {
    name: nameCtx,
    value: valueCtx,
    disabled: disabledCtx,
    readOnly: readOnlyCtx,
    onValueChange: onValueChangeCtx,
  } = React.useContext(RadioGroupContext);

  const {
    defaultChecked = false,
    checked: checkedProp,
    name = nameCtx,
    value,
    disabled = disabledCtx,
    readOnly = readOnlyCtx ?? false,
    inputProps,
    children,
    onChange,
    ...rest
  } = props;

  // RadioGroup 이면 group value, 아니면 prop checked
  const isChecked = typeof valueCtx !== 'undefined' ? valueCtx === value : checkedProp;
  const [checked, setChecked] = useChecked<boolean>(isChecked, defaultChecked);

  const changeChecked = React.useCallback(
    (newChecked: boolean) => {
      setChecked(newChecked);
      onValueChangeCtx?.(value ?? '');
    },
    [onValueChangeCtx, setChecked, value],
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newChecked = true;
    changeChecked(newChecked);
    onChange?.(event);
  };

  const handleIndicatorClick = React.useCallback(
    (event: React.MouseEvent<HTMLSpanElement>) => {
      const newChecked = true;
      changeChecked(newChecked);
    },
    [changeChecked],
  );

  // input, label id 설정
  const uuid = React.useId();

  const contextValue = React.useMemo(
    () => ({
      uuid,
      checked,
      disabled,
      readOnly,
      onIndicatorClick: handleIndicatorClick,
    }),
    [checked, disabled, handleIndicatorClick, readOnly, uuid],
  );

  return (
    <RadioContext.Provider value={contextValue}>
      <div
        ref={ref}
        data-state={getState(checked)}
        data-disabled={disabled ? '' : undefined}
        data-readonly={readOnly ? '' : undefined}
        {...rest}
      >
        <input
          type="radio"
          id={uuid}
          name={name}
          value={value}
          checked={checked}
          disabled={disabled}
          readOnly={readOnly}
          onChange={handleChange}
          {...inputProps}
        />
        {children}
      </div>
    </RadioContext.Provider>
  );
});

Radio.displayName = 'Radio';

export default Radio;
