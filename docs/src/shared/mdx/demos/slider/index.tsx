import React from 'react';

import { SliderRange, SliderRoot, SliderThumb, SliderTrack } from '@melio-ui/slider';

import './styles.css';

export default function SliderDemo() {
  return (
    <SliderRoot className="slider-root">
      <SliderTrack className="slider-track">
        <SliderRange className="slider-range" />
      </SliderTrack>
      <SliderThumb className="slider-thumb" />
    </SliderRoot>
  );
}
