// 'use client';

import React, { useContext } from 'react';

import { ComponentBaseProps } from '../types/common';
import ChevronDownIcon from '../internal/icons/ChevronDownIcon';
import { AccordionItemContext } from './AccordionItem';

export interface AccordionArrowIconProps
  extends ComponentBaseProps,
    React.SVGProps<SVGSVGElement> {}

/**
 * 아코디언 화살 아이콘 컴포넌트
 *
 * @author 안형노 <elle0510@gmail.com>
 */
// TODO: children 은 제공하지 않고 디폴트 아이콘만 제공하는 방식으로 할까? or asChild 같은 속성을 이용할까?
const AccordionArrowIcon = React.forwardRef<SVGSVGElement, AccordionArrowIconProps>(
  (props, ref) => {
    const { style, children, ...rest } = props;

    const { expanded } = useContext(AccordionItemContext);

    return React.cloneElement<AccordionArrowIconProps>(
      (children ?? <ChevronDownIcon />) as React.ReactElement<AccordionArrowIconProps>,
      {
        ref,
        style: expanded
          ? { transform: 'rotate(180deg)', ...style }
          : { transition: 'transform 0.2s', ...style },
        ...rest,
      },
    );
  },
);

AccordionArrowIcon.displayName = 'Accordion.ArrowIcon';

export default AccordionArrowIcon;
