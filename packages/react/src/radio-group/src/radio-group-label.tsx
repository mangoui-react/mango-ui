import React from 'react';

import { getState } from './helpers/get-state';
import { RadioContext } from './radio-group-item';

export interface RadioGroupLabelProps extends React.ComponentPropsWithoutRef<'label'> {}

const RadioGroupLabel = React.forwardRef<HTMLLabelElement, RadioGroupLabelProps>((props, ref) => {
  const { children, ...rest } = props;

  const { uuid: uuidCtx, checked, disabled, readOnly } = React.useContext(RadioContext);

  const handleClick = (event: React.MouseEvent<HTMLLabelElement>): void => {
    event.stopPropagation();
  };

  // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
  const uuid = disabled || readOnly ? undefined : uuidCtx;

  return (
    <label ref={ref} htmlFor={uuid} data-state={getState(checked)} onClick={handleClick} {...rest}>
      {children}
    </label>
  );
});

RadioGroupLabel.displayName = 'RadioGroup.Label';

export default RadioGroupLabel;
