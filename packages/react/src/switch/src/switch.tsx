import React from 'react';

import { useControlled } from '@melio-ui/use-controlled';

import { FormElementBaseProps } from '../../types/common';

import { getState } from './helpers/get-state';

export interface SwitchProps
  extends FormElementBaseProps<string>,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'defaultChecked' | 'defaultValue'> {
  /** 초기 check 유무 */
  defaultChecked?: boolean;
  /** check 유무 */
  checked?: boolean;
  /**
   * input element 에 적용되는 attributes
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes)
   */
  inputProps?: React.ComponentPropsWithoutRef<'input'>;
  /** checked change 시 호출 */
  onCheckedChange?: (checked: boolean) => void;
}

export interface SwitchContextValue extends Pick<SwitchProps, 'checked' | 'disabled' | 'readOnly'> {
  uuid: string;
  onTrackClick: () => void;
}

export const SwitchContext = React.createContext<SwitchContextValue>({
  uuid: 'eds-switch',
  onTrackClick: () => {},
});

const Switch = React.forwardRef<HTMLDivElement, SwitchProps>((props, ref) => {
  const {
    defaultChecked = false,
    checked: checkedProp,
    name,
    value,
    disabled,
    readOnly,
    children,
    inputProps,
    onCheckedChange,
    ...rest
  } = props;

  const [checked, setChecked] = useControlled<boolean | undefined>(checkedProp, defaultChecked);

  const changeChecked = React.useCallback(
    (newChecked: boolean) => {
      setChecked(newChecked);
      onCheckedChange?.(newChecked);
    },
    [onCheckedChange, setChecked],
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newChecked = event.target.checked;
    changeChecked(newChecked);
  };

  const handleTrackClick = React.useCallback(() => {
    const newChecked = !checked;
    changeChecked(newChecked);
  }, [changeChecked, checked]);

  // input, label id 설정
  const uuid = React.useId();

  const contextValue = React.useMemo(
    () => ({
      uuid,
      checked,
      disabled,
      readOnly,
      onTrackClick: handleTrackClick,
    }),
    [checked, disabled, handleTrackClick, readOnly, uuid],
  );

  return (
    <SwitchContext.Provider value={contextValue}>
      <div
        data-state={getState(checked)}
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
          checked={checked ?? false}
          disabled={disabled}
          readOnly={readOnly}
          onChange={handleChange}
          {...inputProps}
        />
        {children}
      </div>
    </SwitchContext.Provider>
  );
});

Switch.displayName = 'Switch';

export default Switch;
