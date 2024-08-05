import React from 'react';

import { SliderContext } from './slider';
import { SliderThumbContext } from './slider-thumb';

export interface SliderThumbLabelProps extends React.ComponentPropsWithoutRef<'span'> {
  auto?: boolean;
}

const SliderThumbLabel = React.forwardRef<HTMLSpanElement, SliderThumbLabelProps>((props, ref) => {
  const { auto, children, ...rest } = props;
  const { orientation, disabled } = React.useContext(SliderContext);
  const { thumbValue, isActiveThumb } = React.useContext(SliderThumbContext);

  if (auto && !isActiveThumb) {
    return null;
  }

  return (
    <span
      data-disabled={disabled ? '' : undefined}
      data-orientation={orientation}
      {...rest}
      ref={ref}
    >
      {children ?? thumbValue}
    </span>
  );
});

SliderThumbLabel.displayName = 'Slider.ThumbLabel';

export default SliderThumbLabel;
