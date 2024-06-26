'use client';

import Root from './slider';
import Range from './slider-range';
import Thumb from './slider-thumb';
import ThumbLabel from './slider-thumb-label';
import Track from './slider-track';

export { default as SliderRoot } from './slider';
export { default as SliderRange } from './slider-range';
export { default as SliderThumb } from './slider-thumb';
export { default as SliderThumbLabel } from './slider-thumb-label';
export { default as SliderTrack } from './slider-track';

export * from './slider';
export * from './slider-track';
export * from './slider-range';
export * from './slider-thumb';
export * from './slider-thumb-label';

export const Slider = {
  Root,
  Range,
  Thumb,
  ThumbLabel,
  Track,
};
