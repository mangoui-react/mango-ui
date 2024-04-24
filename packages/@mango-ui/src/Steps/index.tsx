// export { default } from './Steps';
// export { default as Step } from './Step';
// export { default as StepIndicator } from './StepIndicator';
// export { default as StepStatus } from './StepStatus';
// export { default as StepContent } from './StepContent';
// export { default as StepTitle } from './StepTitle';
// export { default as StepDescription } from './StepDescription';
// export { default as StepSeparator } from './StepSeparator';
import Step from './Step';
import Content from './StepContent';
import Indicator from './StepIndicator';
import Separator from './StepSeparator';
import Status from './StepStatus';
import Root from './Steps';

export * from './Steps';
export * from './Step';
export * from './StepIndicator';
export * from './StepStatus';
export * from './StepContent';
export * from './StepSeparator';

const Steps = {
  Root,
  Step,
  Content,
  Indicator,
  Separator,
  Status,
};

export default Steps;
