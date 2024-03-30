// 'use client';
import React from 'react';

import { ComponentPropsWithoutRef } from '../types/common';

import { AvatarGroupContext } from './AvatarGroup';

export interface AvatarGroupContentProps extends ComponentPropsWithoutRef<'div'> {}

/**
 * 아바타 그룹 컨텐츠 컴포넌트
 *
 * @author 안형노 <elle0510@gmail.com>
 */
const AvatarGroupContent = React.forwardRef<HTMLDivElement, AvatarGroupContentProps>(
  (props, ref) => {
    const { children, ...rest } = props;
    const { computedMax, extraAvatarCount } = React.useContext(AvatarGroupContext);

    const length = React.Children.count(children);
    extraAvatarCount.current = length > computedMax ? length - computedMax : 0;

    return (
      <div ref={ref} {...rest}>
        {React.Children.toArray(children)
          .slice(0, length - extraAvatarCount.current)
          .map((child) => {
            if (!React.isValidElement(child)) {
              return null;
            }
            return React.cloneElement(child as React.ReactElement);
          })}
      </div>
    );
  },
);

AvatarGroupContent.displayName = 'Avatar.GroupContent';

export default AvatarGroupContent;
