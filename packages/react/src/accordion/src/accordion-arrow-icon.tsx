// 'use client';
import React from 'react';

import { ArrowOutlineDownIcon } from '../../internal/icons/arrow-outline-down-icon';

import { AccordionItemContext } from './accordion-item';

// export interface AccordionArrowIconProps extends React.SVGProps<SVGSVGElement> {}
export interface AccordionArrowIconProps extends React.ComponentPropsWithoutRef<'svg'> {}

const AccordionArrowIcon = React.forwardRef<SVGSVGElement, AccordionArrowIconProps>(
  (props, ref) => {
    const { style, ...rest } = props;
    const { expanded } = React.useContext(AccordionItemContext);

    return (
      <ArrowOutlineDownIcon
        {...rest}
        ref={ref}
        style={
          expanded
            ? { transform: 'rotate(180deg)', ...style }
            : { transition: 'transform 0.2s', ...style }
        }
      />
    );
  },
);

AccordionArrowIcon.displayName = 'Accordion.ArrowIcon';

export default AccordionArrowIcon;
