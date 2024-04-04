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
import Description from './StepDescription';
import Indicator from './StepIndicator';
import Separator from './StepSeparator';
import Status from './StepStatus';
import Title from './StepTitle';
import Root from './Steps';

export * from './Steps';
export * from './Step';
export * from './StepIndicator';
export * from './StepStatus';
export * from './StepContent';
export * from './StepTitle';
export * from './StepDescription';
export * from './StepSeparator';

const Steps = {
  Root,
  Step,
  Content,
  Description,
  Indicator,
  Separator,
  Status,
  Title,
};

export default Steps;
