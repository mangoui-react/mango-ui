import React from 'react';

export interface AvatarProps extends React.ComponentPropsWithoutRef<'div'> {}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  const { children, ...rest } = props;

  return (
    <div {...rest} ref={ref}>
      {children}
    </div>
  );
});

Avatar.displayName = 'Avatar';

export default Avatar;
