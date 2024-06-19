// 'use client';
import React from 'react';

import { ComponentPropsWithoutRef } from '../../types/common';

export interface AccordionTitleProps extends ComponentPropsWithoutRef<'div'> {}

/**
 * 아코디언 헤더 타이틀 컴포넌트
 *
 * @author 안형노 <elle0510@gmail.com>
 */
// TODO: 이 컴포넌트는 없어도 될 듯
const AccordionTitle = React.forwardRef<HTMLDivElement, AccordionTitleProps>((props, ref) => {
  return <div ref={ref} {...props} />;
});

AccordionTitle.displayName = 'Accordion.Title';

export default AccordionTitle;
