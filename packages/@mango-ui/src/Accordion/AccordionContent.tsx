// 'use client';

import React, { useCallback, useContext, useMemo, useRef } from 'react';

import { ComponentBaseProps } from '../types/common';
import { AccordionItemContext } from './AccordionItem';
import getState from './helpers/getState';

export interface AccordionContentProps
  extends ComponentBaseProps,
    React.HTMLAttributes<HTMLDivElement> {}

const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ style, children, ...rest }, ref) => {
    const { expanded, renderMode } = useContext(AccordionItemContext);

    // TODO: headless 에 위배됨. 동작에 필요한 스타일에 한해서 내장으로 하는 것에 대해서 고민해보자.
    // null 로 show/hide 처리시 컴포넌트 라이프사이클을 제어 할 수 없음. 무조건 create 되는 방식
    // 1. data-state 속성 추가 필요(done)
    // 2. --mango-accordion-content-height 변수를 인라인 스타일로 지정하고 이 변수를 app에서 사용하여 스타일을 줌
    // 3. apps 에서 open/close 시 content 애니메이션 작업(done), arrow 아이콘 애니메이션 작업 해보자
    const expandStyle = useMemo(() => {
      return expanded ? { display: 'block', height: 'auto' } : { display: 'none', height: 0 };
    }, [expanded]);

    const isSelected = useRef<boolean>(false);
    const renderChildren = useCallback(() => {
      if (renderMode === 'selected' && expanded) {
        isSelected.current = true;
      }

      return renderMode === 'force' || isSelected.current || expanded ? children : null;
    }, [children, expanded, renderMode]);

    return (
      <div ref={ref} data-state={getState(expanded)} style={{ ...expandStyle, ...style }} {...rest}>
        {renderChildren()}
      </div>
    );
  },
);

AccordionContent.displayName = 'Accordion.Content';

export default AccordionContent;
