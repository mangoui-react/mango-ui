import React from 'react';

import { getProgressState } from '../../internal/getProgressState';

export interface CircularProgressProps extends React.ComponentPropsWithoutRef<'div'> {
  /** bar value (진행 표시) */
  value?: number;
  /**
   * bar 최대값
   * @default 100
   */
  max?: number;
  indeterminate?: boolean;
}

export interface CircularProgressContextValue
  extends Pick<CircularProgressProps, 'value' | 'max' | 'indeterminate'> {
  computedValue: number;
}
export const CircularProgressContext = React.createContext<CircularProgressContextValue>({
  computedValue: 0,
  max: 100,
});

/**
 * 원 프로그레스 컴포넌트
 *
 * @author 안형노 <elle0510@gmail.com>
 */
const CircularProgress = React.forwardRef<HTMLDivElement, CircularProgressProps>((props, ref) => {
  const { value = 0, max = 100, indeterminate, children, ...rest } = props;

  // const computedPercent = useMemo(() => (value ?? 0) * 2.64, [value]);

  const computedValue = React.useMemo(
    () => Math.round(((value <= max && value >= 0 ? value : 0) / max) * 100),
    [max, value],
  );

  const contextValue = React.useMemo(
    () => ({ value, max, computedValue, indeterminate }),
    [computedValue, indeterminate, max, value],
  );

  return (
    <CircularProgressContext.Provider value={contextValue}>
      <div
        ref={ref}
        data-state={getProgressState(value, max, indeterminate)}
        data-value={value}
        data-max={max}
        {...rest}
      >
        {children}
      </div>
    </CircularProgressContext.Provider>
  );
});

CircularProgress.displayName = 'CircularProgress';

export default CircularProgress;
