// 'use client';

import React from 'react';

import { ComponentBaseProps } from '../types/common';

import { AccordionContext, AccordionProps } from './Accordion';
import getState from './helpers/getState';
import useAccordion from './hooks/useAccordion';

export interface AccordionItemProps
  extends Omit<ComponentBaseProps, 'children'>,
    Pick<AccordionProps, 'renderMode'>,
    Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  index?: number;
  value?: string;
  /** accordion disabled */
  disabled?: boolean;
  children: ComponentBaseProps['children'] | ((expanded: boolean) => React.ReactNode);
}

export interface AccordionItemContextValue extends Pick<AccordionProps, 'disabled' | 'renderMode'> {
  index: number;
  value?: string;
  expanded: boolean;
}
export const AccordionItemContext = React.createContext<AccordionItemContextValue>({
  index: 0,
  expanded: false,
  renderMode: 'selected',
});

/**
 * 아코디언 아이템 컴포넌트
 *
 * @author 안형노 <elle0510@gmail.com>
 */
const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>((props, ref) => {
  const {
    expandedIndex,
    expandedValue,
    setExpanded,
    toggle,
    multiple,
    disabled: disabledCtx,
    renderMode: renderModeCtx,
  } = React.useContext(AccordionContext);

  const {
    className,
    index = 0,
    value,
    disabled = disabledCtx,
    renderMode = renderModeCtx,
    children: childrenProp,
    ...rest
  } = props;

  // console.log('AccordionItem expandedIndex', expandedIndex);
  const { expanded } = useAccordion({
    index,
    value,
    expandedIndex,
    expandedValue,
    setExpanded,
    toggle,
    multiple,
    disabled,
  });

  const children = typeof childrenProp === 'function' ? childrenProp(expanded) : childrenProp;

  const contextValue = React.useMemo(
    () => ({ index, value, expanded, disabled, renderMode }),
    [disabled, expanded, value, index, renderMode],
  );

  return (
    <AccordionItemContext.Provider value={contextValue}>
      <div ref={ref} data-state={getState(expanded)} {...rest}>
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
});

AccordionItem.displayName = 'Accordion.Item';

export default AccordionItem;
