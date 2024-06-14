import React from 'react';

import { ComponentPropsWithoutRef } from '../types/common';

import { SwitchContext } from './Switch';
// import { CheckboxContext } from './Checkbox';
import getState from './helpers/getState';

export interface SwitchLabelProps extends ComponentPropsWithoutRef<'label'> {}

const SwitchLabel = React.forwardRef<HTMLLabelElement, SwitchLabelProps>((props, ref) => {
  const { children, ...rest } = props;

  const { uuid: uuidCtx, checked, disabled, readOnly } = React.useContext(SwitchContext);

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

SwitchLabel.displayName = 'Switch.Label';

export default SwitchLabel;
