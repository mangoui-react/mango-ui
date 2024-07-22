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
        <div style={{ width: 120 }}>Tooltip</div>
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
