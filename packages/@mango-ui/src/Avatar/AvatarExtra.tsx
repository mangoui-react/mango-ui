// 'use client';
import React from 'react';

import Slot from '../internal/components/Slot';
import { ComponentPropsWithoutRef } from '../types/common';

import Avatar from './Avatar';
import { AvatarGroupContext } from './AvatarGroup';

export interface AvatarExtraProps extends ComponentPropsWithoutRef<'div'> {
  asChild?: boolean;
}

/**
 * 아바타 그룹 추가 표시 컴포넌트
 *
 * @author 안형노 <elle0510@gmail.com>
 */
const AvatarExtra = React.forwardRef<HTMLDivElement, AvatarExtraProps>((props, ref) => {
  const { children, asChild, ...rest } = props;
  const { extraAvatarCount } = React.useContext(AvatarGroupContext);
  const Component = asChild ? Slot : Avatar;

  const displayExtraCount = extraAvatarCount.current;

  return displayExtraCount > 0 ? (
    <Component ref={ref} {...rest}>
      {children ?? `+${displayExtraCount}`}
    </Component>
  ) : null;
});

AvatarExtra.displayName = 'Avatar.Extra';

export default AvatarExtra;
