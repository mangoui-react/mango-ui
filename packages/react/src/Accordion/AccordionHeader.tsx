// 'use client';
import React from 'react';

import { ComponentPropsWithoutRef } from '../types/common';

import { AccordionContext } from './Accordion';
import { AccordionItemContext } from './AccordionItem';
import getState from './helpers/getState';
import useAccordion from './hooks/useAccordion';

export interface AccordionHeaderProps extends ComponentPropsWithoutRef<'div'> {}

/**
 * 아코디언 헤더 컴포넌트
 *
 * @author 안형노 <elle0510@gmail.com>
 */
const AccordionHeader = React.forwardRef<HTMLDivElement, AccordionHeaderProps>((props, ref) => {
  const { children, onClick, ...rest } = props;
  const { expandedIndex, expandedValue, setExpanded, toggle, multiple } =
    React.useContext(AccordionContext);

  const { index, value, expanded, disabled } = React.useContext(AccordionItemContext);

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

  const handleClick = (event: React.MouseEvent<HTMLDivElement>): void => {
    onHeaderClick(event);
    onClick?.(event);
  };

  return (
    <div
      ref={ref}
      data-state={getState(expanded)}
      data-disabled={disabled ? '' : undefined}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </div>
  );
});

AccordionHeader.displayName = 'Accordion.Header';

export default AccordionHeader;
