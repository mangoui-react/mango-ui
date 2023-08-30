// 'use client';

import React, { useContext } from 'react';

import { ComponentBaseProps } from '../types/common';
import ChevronDownIcon from '../internal/icons/ChevronDownIcon';
import { AccordionPanelContext } from './AccordionPanel';

export interface AccordionArrowIconProps
  extends ComponentBaseProps,
    React.SVGProps<SVGSVGElement> {}

// TODO: children 은 제공하지 않고 디폴트 아이콘만 제공하는 방식으로 할까?
const AccordionArrowIcon = React.forwardRef<SVGSVGElement, AccordionArrowIconProps>(
  ({ style, children, ...rest }, ref) => {
    const { expanded } = useContext(AccordionPanelContext);

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
