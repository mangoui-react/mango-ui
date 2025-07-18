import React from 'react';

import {
  TooltipArrow,
  TooltipContent,
  TooltipPortal,
  TooltipRoot,
  TooltipTrigger,
} from '@mangoui/tooltip';

import './styles.css';

export default function TooltipDemo() {
  return (
    <TooltipRoot>
      <TooltipTrigger asChild>
        <button className="tooltip-trigger">Hover me</button>
      </TooltipTrigger>
      <TooltipPortal>
        <TooltipContent className="tooltip-content">
          tooltip message
          <TooltipArrow className="tooltip-arrow" />
        </TooltipContent>
      </TooltipPortal>
    </TooltipRoot>
  );
}
