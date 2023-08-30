// 'use client';

import React from 'react';

import { ComponentBaseProps } from '../types/common';
import UserIcon from '../internal/icons/UserIcon';

export interface AvatarIconProps extends ComponentBaseProps, React.SVGProps<SVGSVGElement> {}

// TODO: children 은 제공하지 않고 디폴트 아이콘만 제공하는 방식으로 할까?
// TODO: <AvatarIcon icon={icon} /> props 형태중 어느것이 베스트 인지 고민
const AvatarIcon = React.forwardRef<SVGSVGElement, AvatarIconProps>(
  ({ children, ...rest }, ref) => {
    // return React.cloneElement<AvatarIconProps>(
    //   (children ?? <UserIcon />) as React.ReactElement<AvatarIconProps>,
    //   {
    //     ref,
    //     ...rest,
    //   },
    // );
    return <UserIcon ref={ref} {...rest} />;
  },
);

AvatarIcon.displayName = 'Avatar.Icon';

export default AvatarIcon;
