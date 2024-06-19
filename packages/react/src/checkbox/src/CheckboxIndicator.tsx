import React from 'react';

import { CheckboxContext } from './Checkbox';
import { getState } from './helpers/getState';

export interface CheckboxIndicatorProps
  extends Omit<React.ComponentPropsWithoutRef<'span'>, 'children'> {
  children:
    | React.ComponentPropsWithoutRef<'span'>['children']
    | ((checked: boolean, indeterminate?: boolean) => React.ReactNode);
}

const CheckboxIndicator = React.forwardRef<HTMLSpanElement, CheckboxIndicatorProps>(
  (props, ref) => {
    const { children: childrenProp, onClick, ...rest } = props;

    const { checked, indeterminate, disabled, readOnly, onIndicatorClick } =
      React.useContext(CheckboxContext);

    const handleClick = (event: React.MouseEvent<HTMLSpanElement>): void => {
      // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
      if (disabled || readOnly) return;
      onIndicatorClick(event);
      onClick?.(event);

      // const descriptor = Object.getOwnPropertyDescriptor(
      //   window.HTMLInputElement.prototype,
      //   'checked',
      // ) as PropertyDescriptor;
      // const setChecked = descriptor.set;
      // setChecked?.call(document.getElementById(uuid), checked);

      // document.getElementById(uuid)?.dispatchEvent(new Event('change', { bubbles: true }));
    };

    const children =
      typeof childrenProp === 'function' ? childrenProp(checked, indeterminate) : childrenProp;

    return (
      <span ref={ref} data-state={getState(checked, indeterminate)} onClick={handleClick} {...rest}>
        {children}
      </span>
    );
  },
);

CheckboxIndicator.displayName = 'Checkbox.Indicator';

export default CheckboxIndicator;
