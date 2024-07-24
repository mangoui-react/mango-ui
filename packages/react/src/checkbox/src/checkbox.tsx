import React from 'react';

import { useChecked } from '../../internal/use-checked';
import { FormElementBaseProps } from '../../types/common';

import { CheckboxGroupContext } from './checkbox-group';
import { getState } from './helpers/get-state';

export type CheckboxValue = string | number | undefined; // unknown;
export interface CheckboxProps
  extends FormElementBaseProps<CheckboxValue>,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'defaultChecked' | 'defaultValue'> {
  /** The checked state of the checkbox when it is first rendered. Use this when there is no need to control the checked state. */
  defaultChecked?: boolean;
  /** check 유무 */
  checked?: boolean;
  /** This refers to a state indicating partial selection, meaning that some, but not all, of the related checkboxes are selected. */
  indeterminate?: boolean;
  /**
   * input element 에 적용되는 attributes
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes)
   */
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  /** checked change 시 호출 */
  onCheckedChange?: (checked: boolean) => void;
}

export interface CheckboxContextValue
  extends Pick<CheckboxProps, 'indeterminate' | 'disabled' | 'readOnly'> {
  checked: boolean;
  uuid: string;
  onIndicatorClick: (event: React.MouseEvent<HTMLSpanElement>) => void;
}

export const CheckboxContext = React.createContext<CheckboxContextValue>({
  checked: false,
  uuid: 'eds-checkbox',
  onIndicatorClick: () => {},
});

const Checkbox = React.forwardRef<HTMLDivElement, CheckboxProps>((props, ref) => {
  const {
    name: nameCtx,
    value: valueCtx,
    disabled: disabledCtx,
    readOnly: readOnlyCtx,
    onValueChange: onValueChangeCtx,
  } = React.useContext(CheckboxGroupContext);

  const {
    defaultChecked = false,
    checked: checkedProp,
    name = nameCtx,
    value,
    disabled = disabledCtx ?? false,
    readOnly = readOnlyCtx ?? false,
    indeterminate = false,
    inputProps,
    children,
    onCheckedChange,
    ...rest
  } = props;

  const isChecked = React.useMemo(() => {
    // CheckGroup 의 Checkbox
    if (typeof valueCtx !== 'undefined' && typeof value !== 'undefined') {
      return valueCtx.some((_value) => _value === value);
    }

    // 일반 Checkbox
    return checkedProp;
  }, [checkedProp, value, valueCtx]);

  // const initialChecked = typeof isChecked !== 'undefined' ? isChecked : defaultChecked;
  const [checked, setChecked] = useChecked<boolean>(isChecked, defaultChecked);

  const changeChecked = React.useCallback(
    (newChecked: boolean) => {
      setChecked(newChecked);
      onCheckedChange?.(newChecked);
      onValueChangeCtx?.(value, newChecked); // newChecked 은 CheckboxGroup 에서 내부적으로 사용
    },
    [onCheckedChange, onValueChangeCtx, setChecked, value],
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newChecked = event.target.checked;
    changeChecked(newChecked);
  };

  const handleIndicatorClick = React.useCallback(
    (event: React.MouseEvent<HTMLSpanElement>) => {
      const newChecked = !checked;
      changeChecked(newChecked);
    },
    [changeChecked, checked],
  );

  // input, label id 설정
  const uuid = React.useId();

  const contextValue = React.useMemo(
    () => ({
      uuid,
      checked,
      indeterminate,
      disabled,
      readOnly,
      onIndicatorClick: handleIndicatorClick,
    }),
    [checked, disabled, handleIndicatorClick, indeterminate, readOnly, uuid],
  );

  return (
    <CheckboxContext.Provider value={contextValue}>
      <div
        data-state={getState(checked, indeterminate)}
        data-disabled={disabled ? '' : undefined}
        data-readonly={readOnly ? '' : undefined}
        {...rest}
        ref={ref}
      >
        <input
          type="checkbox"
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
    </CheckboxContext.Provider>
  );
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;
