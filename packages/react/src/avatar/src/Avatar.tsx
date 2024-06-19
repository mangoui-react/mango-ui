// 'use client';
import React from 'react';

export interface AvatarProps extends React.ComponentPropsWithoutRef<'div'> {}

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
