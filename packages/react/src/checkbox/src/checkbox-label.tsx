import React from 'react';

import { CheckboxContext } from './checkbox';
import { getState } from './helpers/get-state';

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
      {...rest}
      data-state={getState(checked, indeterminate)}
      ref={ref}
      htmlFor={uuid}
      onClick={handleClick}
    >
      {children}
    </label>
  );
});

CheckboxLabel.displayName = 'Checkbox.Label';

export default CheckboxLabel;
