// 'use client';

import React from 'react';
import { ComponentBaseProps } from '../types/common';

export interface ButtonIconProps extends ComponentBaseProps, React.SVGProps<SVGSVGElement> {}

// deprecated: 필요하다고 판단되면 그때 제공
const ButtonIcon = React.forwardRef<SVGSVGElement, ButtonIconProps>(
  ({ children, ...rest }, ref) => {
    return React.cloneElement<ButtonIconProps>(children as React.ReactElement<ButtonIconProps>, {
      ref,
      ...rest,
    });
  },
);

ButtonIcon.displayName = 'Button.Icon';

export default ButtonIcon;
