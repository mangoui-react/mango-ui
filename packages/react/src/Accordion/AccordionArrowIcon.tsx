// 'use client';
import React from 'react';

import ArrowOutlineDownIcon from '../internal/icons/ArrowOutlineDownIcon';
import { ComponentPropsWithoutRef } from '../types/common';

import { AccordionItemContext } from './AccordionItem';

// export interface AccordionArrowIconProps extends React.SVGProps<SVGSVGElement> {}
export interface AccordionArrowIconProps extends ComponentPropsWithoutRef<'svg'> {}

/**
 * 아코디언 헤더 Arrow 아이콘 컴포넌트
 *
 * @author 안형노 <elle0510@gmail.com>
 */
const AccordionArrowIcon = React.forwardRef<SVGSVGElement, AccordionArrowIconProps>(
  (props, ref) => {
    const { style, ...rest } = props;
    const { expanded } = React.useContext(AccordionItemContext);

    return (
      <ArrowOutlineDownIcon
        ref={ref}
        style={
          expanded
            ? { transform: 'rotate(180deg)', ...style }
            : { transition: 'transform 0.2s', ...style }
        }
        {...rest}
      />
    );
  },
);

AccordionArrowIcon.displayName = 'Accordion.ArrowIcon';

export default AccordionArrowIcon;
