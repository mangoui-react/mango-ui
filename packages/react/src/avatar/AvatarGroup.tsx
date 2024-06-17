// 'use client';
import React from 'react';

import { ComponentPropsWithoutRef } from '../types/common';

// import Avatar from './Avatar';

export interface AvatarGroupContextValue {
  computedMax: number;
  extraAvatarCount: React.MutableRefObject<number>;
}
export const AvatarGroupContext = React.createContext<AvatarGroupContextValue>({
  computedMax: 5,
  extraAvatarCount: { current: 0 },
});

export interface AvatarGroupProps extends ComponentPropsWithoutRef<'div'> {
  /**
   * 보여지는 avatar 최대 개수
   * @default 5
   */
  max?: number;
}

/**
 * 아바타 그룹 컴포넌트
 *
 * @author 안형노 <elle0510@gmail.com>
 */
const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>((props, ref) => {
  const { max = 5, children, ...rest } = props;

  const extraAvatarCount = React.useRef<number>(0);

  const computedMax = max < 1 ? 1 : max;

  const contextValue = React.useMemo(() => ({ computedMax, extraAvatarCount }), [computedMax]);

  return (
    <AvatarGroupContext.Provider value={contextValue}>
      <div ref={ref} {...rest}>
        {children}
      </div>
    </AvatarGroupContext.Provider>
  );
});

AvatarGroup.displayName = 'Avatar.Group';

export default AvatarGroup;
