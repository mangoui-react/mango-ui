'use client';

import React, { useContext, useMemo } from 'react';

import { ComponentBaseProps } from '../types/common';

import { AccordionContext, AccordionProps } from './Accordion';
import useAccordion from './hooks/useAccordion';

export interface AccordionPanelProps
  extends Omit<ComponentBaseProps, 'children'>,
    Pick<AccordionProps, 'renderMode'>,
    Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  index?: number;
  id?: string;
  /** accordion disabled */
  disabled?: boolean;
  children: ComponentBaseProps['children'] | ((expanded: boolean) => React.ReactNode);
}

export interface AccordionPanelContextType extends Pick<AccordionProps, 'disabled' | 'renderMode'> {
  index: number;
  id?: string;
  expanded: boolean;
}
export const AccordionPanelContext = React.createContext<AccordionPanelContextType>({
  index: 0,
  expanded: false,
  renderMode: 'selected',
});

const AccordionPanel = React.forwardRef<HTMLDivElement, AccordionPanelProps>((props, ref) => {
  const {
    expandedIndex,
    expandedId,
    setExpanded,
    toggle,
    multiple,
    disabled: disabledContext,
    renderMode: renderModeContext,
  } = useContext(AccordionContext);

  const {
    index = 0,
    id,
    title,
    disabled = disabledContext,
    renderMode = renderModeContext,
    children: childrenProp,
    ...rest
  } = props;

  const { expanded } = useAccordion({
    index,
    id,
    expandedIndex,
    expandedId,
    setExpanded,
    toggle,
    multiple,
    disabled,
  });

  const contextValue = useMemo(
    () => ({ index, id, expanded, disabled, renderMode }),
    [disabled, expanded, id, index, renderMode],
  );

  const children = useMemo(
    () => (typeof childrenProp === 'function' ? childrenProp(expanded) : childrenProp),
    [childrenProp, expanded],
  );

  return (
    <AccordionPanelContext.Provider value={contextValue}>
      <div ref={ref} {...rest}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child as React.ReactElement);
          }
          return child;
        })}
      </div>
    </AccordionPanelContext.Provider>
  );
});

AccordionPanel.displayName = 'Accordion.Panel';

export default AccordionPanel;
