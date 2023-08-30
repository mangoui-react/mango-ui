// 'use client';

import React from 'react';

import { ComponentBaseProps } from '../types/common';

// import Avatar from './Avatar';

export interface AvatarGroupProps extends ComponentBaseProps, React.HTMLAttributes<HTMLDivElement> {
  /**
   * 보여지는 avatar 최대 개수
   * @default 5
   */
  max?: number;
  /**
   * max 추가시 개수 표시
   */
  extraAvatar?: React.ReactNode;
}

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ max = 5, extraAvatar = <div />, children, ...rest }, ref) => {
    const computedMax = max < 1 ? 1 : max;

    const length = React.Children.count(children);
    const extraAvatars = length > computedMax ? length - computedMax : 0;

    return (
      <div ref={ref} {...rest}>
        {React.Children.toArray(children)
          .slice(0, length - extraAvatars)
          // .reverse()
          .map((child, index) => {
            if (!React.isValidElement(child)) {
              return null;
            }
            return React.cloneElement(child as React.ReactElement);
          })}
        {extraAvatars
          ? React.cloneElement(extraAvatar as React.ReactElement, {
              children: (extraAvatar as React.ReactElement).props.children ?? `+${extraAvatars}`,
            })
          : null}
      </div>
    );
  },
);

AvatarGroup.displayName = 'Avatar.Group';

export default AvatarGroup;
