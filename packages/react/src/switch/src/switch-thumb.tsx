import React from 'react';

import { getState } from './helpers/get-state';
import { SwitchContext } from './switch';

export interface SwitchThumbProps extends React.ComponentPropsWithoutRef<'span'> {}

const SwitchThumb = React.forwardRef<HTMLSpanElement, SwitchThumbProps>((props, ref) => {
  const { children, ...rest } = props;

  const { checked, disabled, readOnly } = React.useContext(SwitchContext);

  return (
    <span
      data-state={getState(checked)}
      data-disabled={disabled ? '' : undefined}
      data-readonly={readOnly ? '' : undefined}
      {...rest}
      ref={ref}
    >
      {children}
    </span>
  );
});

SwitchThumb.displayName = 'Switch.Thumb';

export default SwitchThumb;
