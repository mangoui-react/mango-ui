import React from 'react';

import { useMergedRef } from '@melio-ui/use-merged-ref';

import { SliderContext } from './slider';

export interface SliderTrackProps extends React.ComponentPropsWithoutRef<'div'> {}

const SliderTrack = React.forwardRef<HTMLDivElement, SliderTrackProps>((props, ref) => {
  const { children, ...rest } = props;
  const { railRef } = React.useContext(SliderContext);

  const handleRef = useMergedRef(ref, railRef);

  return (
    <div {...rest} ref={handleRef}>
      {children}
    </div>
  );
});

SliderTrack.displayName = 'Slider.Track';

export default SliderTrack;
