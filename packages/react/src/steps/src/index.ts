'use client';

import Root from './steps';
import Content from './steps-content';
import Indicator from './steps-indicator';
import Separator from './steps-separator';
import Status from './steps-status';
import Step from './steps-step';

export { default as StepsStep } from './steps-step';
export { default as StepsContent } from './steps-content';
export { default as StepsIndicator } from './steps-indicator';
export { default as StepsSeparator } from './steps-separator';
export { default as StepsStatus } from './steps-status';
export { default as StepsRoot } from './steps';

export * from './steps';
export * from './steps-step';
export * from './steps-indicator';
export * from './steps-status';
export * from './steps-content';
export * from './steps-separator';

export const Steps = {
  Root,
  Step,
  Content,
  Indicator,
  Separator,
  Status,
};
