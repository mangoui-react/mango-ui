'use client';

import Root from './tooltip';
import Arrow from './tooltip-arrow';
import Content from './tooltip-content';
import Portal from './tooltip-portal';
import Trigger from './tooltip-trigger';

export { default as TooltipRoot } from './tooltip';
export { default as TooltipArrow } from './tooltip-arrow';
export { default as TooltipContent } from './tooltip-content';
export { default as TooltipPortal } from './tooltip-portal';
export { default as TooltipTrigger } from './tooltip-trigger';

export * from './tooltip';
export * from './tooltip-trigger';
export * from './tooltip-portal';
export * from './tooltip-content';
export * from './tooltip-arrow';

export const Tooltip = {
  Root,
  Arrow,
  Content,
  Portal,
  Trigger,
};
