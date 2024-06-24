import React from 'react';

import { AvatarGroupContext } from './avatar-group';

export interface AvatarGroupContentProps extends React.ComponentPropsWithoutRef<'div'> {}

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
