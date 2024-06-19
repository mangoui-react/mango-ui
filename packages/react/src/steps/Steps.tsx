import React from 'react';

import { TypeAttributes } from '../types/common';

export interface StepsProps extends React.ComponentPropsWithoutRef<'div'> {
  // TODO: stepIndex 로 수정 생각해 보자
  /** 현재 Step */
  currentStep?: number;
  /** step 방향 */
  orientation?: TypeAttributes.Orientation;
}

export type StepsContextValue = Pick<StepsProps, 'currentStep' | 'orientation'>;
export const StepsContext = React.createContext<StepsContextValue>({});

/**
 * 스텝 컴포넌트
 *
 * @author 안형노 <elle0510@gmail.com>
 */
const Steps = React.forwardRef<HTMLDivElement, StepsProps>((props, ref) => {
  const { currentStep, orientation = 'horizontal', children, ...rest } = props;

  const contextValue = React.useMemo(
    () => ({ currentStep, orientation }),
    [currentStep, orientation],
  );

  return (
    <StepsContext.Provider value={contextValue}>
      <div ref={ref} data-orientation={orientation} {...rest}>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child as React.ReactElement, {
            index,
          });
        })}
      </div>
    </StepsContext.Provider>
  );
});

Steps.displayName = 'Steps';

export default Steps;
