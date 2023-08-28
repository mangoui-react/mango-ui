// 'use client';

import React, { useCallback, useContext, useMemo, useRef } from 'react';

import { ComponentBaseProps } from '../types/common';
import { AccordionProps } from './Accordion';
import { AccordionPanelContext } from './AccordionPanel';

export interface AccordionContentProps
  extends ComponentBaseProps,
    Pick<AccordionProps, 'renderMode'>,
    React.HTMLAttributes<HTMLDivElement> {}

const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ style, children, ...rest }, ref) => {
    const { expanded, renderMode } = useContext(AccordionPanelContext);

    // TODO: headless 에 위배됨. 동작에 필요한 스타일에 한해서 내장으로 하는 것에 대해서 고민해보자.
    // null 로 show/hide 처리시 컴포넌트 라이프사이클을 제어 할 수 없음. 무조건 create 되는 방식
    const expandedStyle = useMemo(() => {
      const resultStyle = expanded
        ? { display: 'block', height: 'auto' }
        : { display: 'none', height: 0 };

      return {
        ...resultStyle,
        ...style,
      };
    }, [expanded, style]);

    const isSelected = useRef<boolean>(false);
    const renderChildren = useCallback(() => {
      if (renderMode === 'selected' && expanded) {
        isSelected.current = true;
      }

      return renderMode === 'force' || isSelected.current || expanded ? children : null;
    }, [children, expanded, renderMode]);

    return (
      <div ref={ref} style={expandedStyle} {...rest}>
        {renderChildren()}
      </div>
    );
  },
);

AccordionContent.displayName = 'Accordion.Content';

export default AccordionContent;
