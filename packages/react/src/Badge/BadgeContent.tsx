import React from 'react';

import { ComponentPropsWithoutRef } from '../types/common';

import { BadgeContext } from './Badge';

export interface BadgeContentProps extends ComponentPropsWithoutRef<'div'> {
  children?: string | number;
}

/**
 * 배지 내용 컴포넌트
 *
 * @author 안형노 <elle0510@gmail.com>
 */
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
