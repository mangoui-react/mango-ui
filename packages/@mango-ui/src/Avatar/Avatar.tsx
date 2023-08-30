// 'use client';

import React from 'react';

import { ComponentBaseProps } from '../types/common';

export interface AvatarProps extends ComponentBaseProps, React.HTMLAttributes<HTMLDivElement> {}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(({ children, ...rest }, ref) => {
  return (
    <div ref={ref} {...rest}>
      {children}
    </div>
  );
});

Avatar.displayName = 'Avatar';

export default Avatar;
