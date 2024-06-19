import React from 'react';

import { CheckboxContext } from './Checkbox';
import { getState } from './helpers/getState';

export interface CheckboxLabelProps extends React.ComponentPropsWithoutRef<'label'> {}

const CheckboxLabel = React.forwardRef<HTMLLabelElement, CheckboxLabelProps>((props, ref) => {
  const { children, ...rest } = props;

  const {
    uuid: uuidCtx,
    checked,
    indeterminate,
    disabled,
    readOnly,
  } = React.useContext(CheckboxContext);

  const handleClick = (event: React.MouseEvent<HTMLLabelElement>): void => {
    event.stopPropagation();
  };

  // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
  const uuid = disabled || readOnly ? undefined : uuidCtx;

  return (
    <label
      ref={ref}
      htmlFor={uuid}
      data-state={getState(checked, indeterminate)}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </label>
  );
});

CheckboxLabel.displayName = 'Checkbox.Label';

export default CheckboxLabel;
