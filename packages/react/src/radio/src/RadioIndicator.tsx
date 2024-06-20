import React from 'react';

import { RadioContext } from './Radio';
import { getState } from './helpers/getState';

export interface RadioIndicatorProps
  extends Omit<React.ComponentPropsWithoutRef<'span'>, 'children'> {
  children:
    | React.ComponentPropsWithoutRef<'span'>['children']
    | ((checked: boolean) => React.ReactNode);
}

const RadioIndicator = React.forwardRef<HTMLSpanElement, RadioIndicatorProps>((props, ref) => {
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
    <span ref={ref} data-state={getState(checked)} onClick={handleClick} {...rest}>
      {children}
    </span>
  );
});

RadioIndicator.displayName = 'Radio.Indicator';

export default RadioIndicator;
