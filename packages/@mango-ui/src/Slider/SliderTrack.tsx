import React from 'react';

import { useMergedRef } from '../hooks';
import { ComponentPropsWithoutRef } from '../types/common';

import { SliderContext } from './Slider';

export interface SliderTrackProps extends ComponentPropsWithoutRef<'div'> {}

const SliderTrack = React.forwardRef<HTMLDivElement, SliderTrackProps>((props, ref) => {
  const { children, ...rest } = props;
  const { railRef } = React.useContext(SliderContext);

  const handleRef = useMergedRef(ref, railRef);

  return (
    <div ref={handleRef} {...rest}>
      {children}
    </div>
  );
});

SliderTrack.displayName = 'Slider.Track';

export default SliderTrack;
