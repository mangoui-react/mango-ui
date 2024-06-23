// 'use client';
import React from 'react';

import { AccordionContext } from './accordion';
import { AccordionItemContext } from './accordion-item';
import getState from './helpers/get-state';
import useAccordion from './hooks/use-accordion';

export interface AccordionHeaderProps extends React.ComponentPropsWithoutRef<'div'> {}

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
