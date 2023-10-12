// 'use client';

import React, { useCallback, useContext } from 'react';

import { ComponentBaseProps } from '../types/common';

import { AccordionContext } from './Accordion';
import { AccordionPanelContext } from './AccordionPanel';
import useAccordion from './hooks/useAccordion';
import getState from './helpers/getState';

export interface AccordionHeaderProps
  extends ComponentBaseProps,
    React.HTMLAttributes<HTMLDivElement> {}

const AccordionHeader = React.forwardRef<HTMLDivElement, AccordionHeaderProps>(
  ({ children, onClick, ...rest }, ref) => {
    const { expandedIndex, expandedId, setExpanded, toggle, multiple } =
      useContext(AccordionContext);

    const { index, id, expanded, disabled } = useContext(AccordionPanelContext);

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
      <div ref={ref} data-state={getState(expanded)} onClick={handleClick} {...rest}>
        {children}
      </div>
    );
  },
);

AccordionHeader.displayName = 'Accordion.Header';

export default AccordionHeader;
