// 'use client';

import React from 'react';

import { ComponentBaseProps } from '../types/common';

export interface AccordionTitleProps
  extends ComponentBaseProps,
    React.HTMLAttributes<HTMLDivElement> {}

/**
 * 아코디언 헤더 타이틀 컴포넌트
 *
 * @author 안형노 <elle0510@gmail.com>
 */
// TODO: 이 컴포넌트는 없어도 될 듯
const AccordionTitle = React.forwardRef<HTMLDivElement, AccordionTitleProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <div ref={ref} {...rest}>
        {children}
      </div>
    );
  },
);

AccordionTitle.displayName = 'Accordion.Title';

export default AccordionTitle;
