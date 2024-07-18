import React from 'react';

import {
  StepsContent,
  StepsIndicator,
  StepsRoot,
  StepsSeparator,
  StepsStatus,
  StepsStep,
} from '@melio-ui/steps';

import './styles.css';

export default function StepsDemo() {
  return (
    <StepsRoot className="stpes-root" currentStep={1}>
      <StepsStep className="steps-step">
        <StepsIndicator className="steps-indicator">
          <StepsStatus />
        </StepsIndicator>
        <StepsContent className="steps-content">
          <div>Step01</div>
        </StepsContent>
        <StepsSeparator className="steps-separator" />
      </StepsStep>

      <StepsStep className="steps-step">
        <StepsIndicator className="steps-indicator">
          <StepsStatus />
        </StepsIndicator>
        <StepsContent className="steps-content">
          <div>Step02</div>
          <div>This is a description</div>
        </StepsContent>
        <StepsSeparator className="steps-separator" />
      </StepsStep>

      <StepsStep className="steps-step">
        <StepsIndicator className="steps-indicator">
          <StepsStatus />
        </StepsIndicator>
        <StepsContent className="steps-content">
          <div>Step03</div>
        </StepsContent>
        <StepsSeparator className="steps-separator" />
      </StepsStep>
    </StepsRoot>
  );
}
