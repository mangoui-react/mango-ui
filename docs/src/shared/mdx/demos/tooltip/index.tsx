import React from 'react';

import {
  TooltipArrow,
  TooltipContent,
  TooltipPortal,
  TooltipRoot,
  TooltipTrigger,
} from '@melio-ui/tooltip';

import './styles.css';

export default function TooltipDemo() {
  return (
    <TooltipRoot>
      <TooltipTrigger asChild>
        <button className="tooltip-button">Hover me</button>
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
