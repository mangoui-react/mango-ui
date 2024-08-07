import React from 'react';

import { getState } from './helpers/get-state';
import { SwitchContext } from './switch';

export interface SwitchLabelProps extends React.ComponentPropsWithoutRef<'label'> {}

const SwitchLabel = React.forwardRef<HTMLLabelElement, SwitchLabelProps>((props, ref) => {
  const { children, ...rest } = props;

  const { uuid: uuidCtx, checked, disabled, readOnly } = React.useContext(SwitchContext);

  const handleClick = (event: React.MouseEvent<HTMLLabelElement>): void => {
    event.stopPropagation();
  };

  // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
  const uuid = disabled || readOnly ? undefined : uuidCtx;

  return (
    <label
      data-state={getState(checked)}
      data-disabled={disabled ? '' : undefined}
      data-readonly={readOnly ? '' : undefined}
      {...rest}
      ref={ref}
      htmlFor={uuid}
      onClick={handleClick}
    >
      {children}
    </label>
  );
});

SwitchLabel.displayName = 'Switch.Label';

export default SwitchLabel;
