import React from 'react';

import { ComponentPropsWithoutRef } from '../types/common';

import { RadioContext } from './Radio';
import getState from './helpers/getState';

export interface RadioLabelProps extends ComponentPropsWithoutRef<'label'> {}

const RadioLabel = React.forwardRef<HTMLLabelElement, RadioLabelProps>((props, ref) => {
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

RadioLabel.displayName = 'Radio.Label';

export default RadioLabel;
