import React from 'react';

export interface AvatarGroupContextValue {
  computedMax: number;
  extraAvatarCount: React.MutableRefObject<number>;
}
export const AvatarGroupContext = React.createContext<AvatarGroupContextValue>({
  computedMax: 5,
  extraAvatarCount: { current: 0 },
});

export interface AvatarGroupProps extends React.ComponentPropsWithoutRef<'div'> {
  /**
   * 보여지는 avatar 최대 개수
   * @default 5
   */
  max?: number;
}

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
