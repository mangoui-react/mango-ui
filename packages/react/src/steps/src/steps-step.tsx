import React from 'react';

import { StepsContext } from './steps';

export type StepStatusValue = 'finish' | 'wait' | 'process' | 'error';
export interface StepsStepProps extends React.ComponentPropsWithoutRef<'div'> {
  /** step 의 상태 */
  status?: StepStatusValue;
  /** Steps 내부에서 사용하는 prop */
  index?: number;
}

export type StepContextValue = Pick<StepsStepProps, 'status' | 'index'>;

export const StepContext = React.createContext<StepContextValue>({});

const StepsStep = React.forwardRef<HTMLDivElement, StepsStepProps>((props, ref) => {
  const { status: statusProp, index = 0, children, ...rest } = props;

  const { currentStep = 0, orientation } = React.useContext(StepsContext);

  const status = React.useMemo(() => {
    if (statusProp !== undefined) return statusProp;
    if (currentStep === index) {
      return 'process';
    }
    if (currentStep > index) {
      return 'finish';
    }
    return 'wait';
  }, [currentStep, index, statusProp]);

  const contextValue = React.useMemo(() => ({ index, status }), [index, status]);

  return (
    <StepContext.Provider value={contextValue}>
      <div ref={ref} data-status={status} data-orientation={orientation} {...rest}>
        {children}
      </div>
    </StepContext.Provider>
  );
});

StepsStep.displayName = 'Steps.Step';

export default StepsStep;
