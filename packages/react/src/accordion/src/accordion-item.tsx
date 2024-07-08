// 'use client';
import React from 'react';

import { AccordionContext, AccordionProps } from './accordion';
import getState from './helpers/get-state';
import useAccordion from './hooks/use-accordion';

export interface AccordionItemProps
  extends Pick<AccordionProps, 'renderMode'>,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'children'> {
  index?: number;
  value?: string;
  /** accordion disabled */
  disabled?: boolean;
  children:
    | React.ComponentPropsWithoutRef<'div'>['children']
    // | React.HTMLAttributes<HTMLDivElement>['children']
    | ((expanded: boolean) => React.ReactNode);
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
      <div
        {...rest}
        data-state={getState(expanded)}
        data-disabled={disabled ? '' : undefined}
        ref={ref}
      >
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
});

AccordionItem.displayName = 'Accordion.Item';

export default AccordionItem;
