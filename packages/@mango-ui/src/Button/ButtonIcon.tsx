// 'use client';

import React from 'react';
import { ComponentBaseProps } from '../types/common';

export interface ButtonIconProps extends ComponentBaseProps, React.SVGProps<SVGSVGElement> {}

// TODO: children 은 제공하지 않고 디폴트 아이콘만 제공하는 방식으로 하면 이 컴포넌트는 필요없음
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
