import React from 'react';

import { TypeAttributes } from '../types/common';

export interface BadgeProps extends React.ComponentPropsWithoutRef<'div'> {
  max?: number;
  placement?: TypeAttributes.Placement;
}

export interface BadgeContextValue extends Pick<BadgeProps, 'max'> {}
export const BadgeContext = React.createContext<BadgeContextValue>({});

/**
 * 배지 컴포넌트
 *
 * @author 안형노 <elle0510@gmail.com>
 */
const Badge = React.forwardRef<HTMLDivElement, BadgeProps>((props, ref) => {
  const { placement = 'top-right', max, children, ...rest } = props;

  const contextValue = React.useMemo(() => ({ max }), [max]);

  return (
    <BadgeContext.Provider value={contextValue}>
      <div ref={ref} data-placement={placement} {...rest}>
        {children}
      </div>
    </BadgeContext.Provider>
  );
});

Badge.displayName = 'Badge';

export default Badge;
