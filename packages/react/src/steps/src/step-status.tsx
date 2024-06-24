import React from 'react';

import { CheckIcon } from '../../internal/icons/CheckIcon';
import { CloseIcon } from '../../internal/icons/CloseIcon';

import { StepContext, StepStatusValue } from './step';

export interface StepStatusProps extends React.ComponentPropsWithoutRef<'div'> {
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

const StepStatus = React.forwardRef<HTMLDivElement, StepStatusProps>((props, ref) => {
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
    <div ref={ref} data-status={status} {...rest}>
      {index + 1}
    </div>
  );
});

StepStatus.displayName = 'Steps.Status';

export default StepStatus;
