// 'use client';
import React from 'react';

export interface AvatarProps extends React.ComponentPropsWithoutRef<'div'> {}

/**
 * 아바타 컴포넌트
 *
 * @author 안형노 <elle0510@gmail.com>
 */
const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  const { children, ...rest } = props;

  return (
    <div ref={ref} {...rest}>
      {children}
    </div>
  );
});

Avatar.displayName = 'Avatar';

export default Avatar;
