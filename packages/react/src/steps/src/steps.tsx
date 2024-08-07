import React from 'react';

import { TypeAttributes } from '../../types/common';

export interface StepsProps extends React.ComponentPropsWithoutRef<'div'> {
  // TODO: stepIndex 로 수정 생각해 보자. 그리고 step 에 id 설정하고 id를 선택하는 방법도 추가하자.
  /** 현재 Step */
  currentStep?: number;
  /** step 방향 */
  orientation?: TypeAttributes.Orientation;
}

export type StepsContextValue = Pick<StepsProps, 'currentStep' | 'orientation'>;
export const StepsContext = React.createContext<StepsContextValue>({});

const Steps = React.forwardRef<HTMLDivElement, StepsProps>((props, ref) => {
  const { currentStep, orientation = 'horizontal', children, ...rest } = props;

  const contextValue = React.useMemo(
    () => ({ currentStep, orientation }),
    [currentStep, orientation],
  );

  return (
    <StepsContext.Provider value={contextValue}>
      <div data-orientation={orientation} {...rest} ref={ref}>
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
