'use client';

import Step from './step';
import Content from './step-content';
import Indicator from './step-indicator';
import Separator from './step-separator';
import Status from './step-status';
import Root from './steps';

export { default as StepsStep } from './step';
export { default as StepsContent } from './step-content';
export { default as StepsIndicator } from './step-indicator';
export { default as StepsSeparator } from './step-separator';
export { default as StepsStatus } from './step-status';
export { default as StepsRoot } from './steps';

export * from './steps';
export * from './step';
export * from './step-indicator';
export * from './step-status';
export * from './step-content';
export * from './step-separator';

export const Steps = {
  Root,
  Step,
  Content,
  Indicator,
  Separator,
  Status,
};
