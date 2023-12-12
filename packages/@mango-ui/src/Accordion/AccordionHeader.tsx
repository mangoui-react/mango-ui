// 'use client';

import React, { useCallback, useContext } from 'react';

import { ComponentBaseProps } from '../types/common';

import { AccordionContext } from './Accordion';
import { AccordionItemContext } from './AccordionItem';
import getState from './helpers/getState';
import useAccordion from './hooks/useAccordion';

export interface AccordionHeaderProps
  extends ComponentBaseProps,
    React.HTMLAttributes<HTMLDivElement> {}

/**
 * 아코디언 헤더 컴포넌트
 *
 * @author 안형노 <elle0510@gmail.com>
 */
const AccordionHeader = React.forwardRef<HTMLDivElement, AccordionHeaderProps>(
  ({ children, onClick, ...rest }, ref) => {
    const { expandedIndex, expandedValue, setExpanded, toggle, multiple } =
      useContext(AccordionContext);

    const { index, value, expanded, disabled } = useContext(AccordionItemContext);

    const { onHeaderClick } = useAccordion({
      index,
      value,
      expandedIndex,
      expandedValue,
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
