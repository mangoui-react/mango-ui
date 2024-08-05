import React from 'react';

import { SliderContext } from './slider';

export interface SliderRangeProps extends React.ComponentPropsWithoutRef<'div'> {}

const SliderRange = React.forwardRef<HTMLDivElement, SliderRangeProps>((props, ref) => {
  const { style, ...rest } = props;
  const { percentValue, orientation, disabled } = React.useContext(SliderContext);

  const trackWidthStyle = React.useMemo(() => {
    if (orientation === 'vertical') {
      return Array.isArray(percentValue)
        ? { bottom: `${percentValue[0]}%`, height: `${percentValue[1] - percentValue[0]}%` }
        : { bottom: '0%', height: `${percentValue}%` };
    }
    return Array.isArray(percentValue)
      ? { left: `${percentValue[0]}%`, width: `${percentValue[1] - percentValue[0]}%` }
      : { width: `${percentValue}%` };
  }, [orientation, percentValue]);

  return (
    <div
      data-disabled={disabled ? '' : undefined}
      data-orientation={orientation}
      {...rest}
      ref={ref}
      style={{ ...trackWidthStyle, ...style }}
    />
  );
});

SliderRange.displayName = 'Slider.Range';

export default SliderRange;
