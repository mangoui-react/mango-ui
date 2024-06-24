import React from 'react';

import { getState } from './helpers/get-state';
import { SwitchContext } from './switch';

export interface SwitchTrackProps extends React.ComponentPropsWithoutRef<'span'> {}

const SwitchTrack = React.forwardRef<HTMLSpanElement, SwitchTrackProps>((props, ref) => {
  const { children, onClick, ...rest } = props;

  const { checked, disabled, readOnly, onTrackClick } = React.useContext(SwitchContext);

  const handleClick = (event: React.MouseEvent<HTMLSpanElement>): void => {
    if (disabled || readOnly) return;
    onTrackClick();
    onClick?.(event);
  };

  return (
    <span ref={ref} data-state={getState(checked)} onClick={handleClick} {...rest}>
      {children}
    </span>
  );
});

SwitchTrack.displayName = 'Switch.Track';

export default SwitchTrack;
