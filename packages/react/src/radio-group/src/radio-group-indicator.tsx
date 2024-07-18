import React from 'react';

import { getState } from './helpers/get-state';
import { RadioContext } from './radio-group-item';

export interface RadioGroupIndicatorProps
  extends Omit<React.ComponentPropsWithoutRef<'span'>, 'children'> {
  children:
    | React.ComponentPropsWithoutRef<'span'>['children']
    | ((checked: boolean) => React.ReactNode);
}

const RadioGroupIndicator = React.forwardRef<HTMLSpanElement, RadioGroupIndicatorProps>(
  (props, ref) => {
    const { children: childrenProp, onClick, ...rest } = props;

    const { checked, disabled, readOnly, onIndicatorClick } = React.useContext(RadioContext);

    const handleClick = (event: React.MouseEvent<HTMLSpanElement>): void => {
      // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
      if (disabled || readOnly) return;
      onIndicatorClick(event);
      onClick?.(event);
    };

    const children = typeof childrenProp === 'function' ? childrenProp(checked) : childrenProp;

    return (
      <span data-state={getState(checked)} {...rest} ref={ref} onClick={handleClick}>
        {children}
      </span>
    );
  },
);

RadioGroupIndicator.displayName = 'RadioGroup.Indicator';

export default RadioGroupIndicator;
