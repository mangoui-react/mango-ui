'use client';

import Root from './popper';
import Anchor from './popper-anchor';
import Arrow from './popper-arrow';
import Content from './popper-content';

export { default as PopperRoot } from './popper';
export { default as PopperAnchor } from './popper-anchor';
export { default as PopperContent } from './popper-content';
export { default as PopperArrow } from './popper-arrow';

export * from './popper';
export * from './popper-anchor';
export * from './popper-content';
export * from './popper-arrow';

export const Popper = {
  Root,
  Anchor,
  Content,
  Arrow,
};
