import React from 'react';

import { useMergedRef } from '@mangoui/use-merged-ref';

import { SliderContext } from './slider';

export interface SliderTrackProps extends React.ComponentPropsWithoutRef<'div'> {}

const SliderTrack = React.forwardRef<HTMLDivElement, SliderTrackProps>((props, ref) => {
  const { children, ...rest } = props;
  const { railRef, disabled, orientation } = React.useContext(SliderContext);

  const handleRef = useMergedRef(ref, railRef);

  return (
    <div
      data-disabled={disabled ? '' : undefined}
      data-orientation={orientation}
      {...rest}
      ref={handleRef}
    >
      {children}
    </div>
  );
});

SliderTrack.displayName = 'Slider.Track';

export default SliderTrack;
