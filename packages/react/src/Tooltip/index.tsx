// export { default } from './Tooltip';
// export { default as TooltipTrigger } from './TooltipTrigger';
// export { default as TooltipPortal } from './TooltipPortal';
// export { default as TooltipContent } from './TooltipContent';
// export { default as TooltipArrow } from './TooltipArrow';
import Root from './Tooltip';
import Arrow from './TooltipArrow';
import Content from './TooltipContent';
import Portal from './TooltipPortal';
import Trigger from './TooltipTrigger';

export * from './Tooltip';
export * from './TooltipTrigger';
export * from './TooltipPortal';
export * from './TooltipContent';
export * from './TooltipArrow';

const Tooltip = {
  Root,
  Arrow,
  Content,
  Portal,
  Trigger,
};

export default Tooltip;
