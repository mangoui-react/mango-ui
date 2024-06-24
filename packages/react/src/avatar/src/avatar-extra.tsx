import React from 'react';

import { Slot } from '@melio-ui/slot';

import Avatar from './avatar';
import { AvatarGroupContext } from './avatar-group';

export interface AvatarExtraProps extends React.ComponentPropsWithoutRef<'div'> {
  asChild?: boolean;
}

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
