import React from 'react';

import { CheckIcon } from '../../internal/icons/check-icon';
import { CloseIcon } from '../../internal/icons/close-icon';

import { StepContext, StepStatusValue } from './steps-step';

export interface StepsStatusProps extends React.ComponentPropsWithoutRef<'div'> {
  finish?: React.ReactNode;
  wait?: React.ReactNode;
  process?: React.ReactNode;
  error?: React.ReactNode;
}

type StatusValueObject = { [k in StepStatusValue]: React.ReactNode };

const STEP_STATUS_ICON: StatusValueObject = {
  finish: <CheckIcon />,
  wait: null,
  process: null,
  error: <CloseIcon />,
};

const StepsStatus = React.forwardRef<HTMLDivElement, StepsStatusProps>((props, ref) => {
  const { index = 0, status = 'wait' } = React.useContext(StepContext);
  const { finish, wait, process, error, ...rest } = props;

  const statusIcon = React.useMemo(() => {
    if (status === 'finish') return finish;
    if (status === 'process') return process;
    if (status === 'error') return error;

    return wait;
  }, [error, finish, process, status, wait]);

  const statusSvgEl = statusIcon ?? STEP_STATUS_ICON[status];

  return statusSvgEl ? (
    React.cloneElement(statusSvgEl as React.ReactElement<React.SVGProps<SVGSVGElement>>, {})
  ) : (
    <div data-status={status} {...rest} ref={ref}>
      {index + 1}
    </div>
  );
});

StepsStatus.displayName = 'Steps.Status';

export default StepsStatus;
