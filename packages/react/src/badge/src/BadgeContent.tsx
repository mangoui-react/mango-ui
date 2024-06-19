import React from 'react';

import { BadgeContext } from './Badge';

export interface BadgeContentProps extends React.ComponentPropsWithoutRef<'div'> {
  children?: string | number;
}

const BadgeContent = React.forwardRef<HTMLDivElement, BadgeContentProps>((props, ref) => {
  const { children, ...rest } = props;

  const { max } = React.useContext(BadgeContext);

  const displayChildren = React.useMemo(
    () => (max && typeof children === 'number' && children > max ? `${max}+` : children),
    [children, max],
  );

  return (
    <div ref={ref} {...rest}>
      {displayChildren}
    </div>
  );
});

BadgeContent.displayName = 'Badge.Content';

export default BadgeContent;
