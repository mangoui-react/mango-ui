// 'use client';

import React, { useCallback, useContext } from 'react';

import { ComponentBaseProps } from '../types/common';

import useAccordion from './hooks/useAccordion';
import { AccordionContext } from './Accordion';
import { AccordionPanelContext } from './AccordionPanel';

export interface AccordionHeaderProps
  extends ComponentBaseProps,
    React.HTMLAttributes<HTMLDivElement> {}

const AccordionHeader = React.forwardRef<HTMLDivElement, AccordionHeaderProps>(
  ({ children, onClick, ...rest }, ref) => {
    const { expandedIndex, expandedId, setExpanded, toggle, multiple } =
      useContext(AccordionContext);

    const { index, id, disabled } = useContext(AccordionPanelContext);

    const { onHeaderClick } = useAccordion({
      index,
      id,
      expandedIndex,
      expandedId,
      setExpanded,
      toggle,
      multiple,
      disabled,
    });

    const handleClick = useCallback(
      (event: React.MouseEvent<HTMLDivElement>) => {
        onHeaderClick(event);
        onClick?.(event);
      },
      [onClick, onHeaderClick],
    );

    return (
      <div ref={ref} onClick={handleClick} {...rest}>
        {children}
      </div>
    );
  },
);

AccordionHeader.displayName = 'Accordion.Header';

export default AccordionHeader;
