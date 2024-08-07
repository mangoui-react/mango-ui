'use client';

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
  const [currentStep, setCurrentStep] = React.useState(1);

  const handlePrev = () => {
    setCurrentStep((prev) => {
      let step = prev - 1;
      if (step < 0) {
        step = 0;
      }
      return step;
    });
  };

  const handleNext = () => {
    setCurrentStep((prev) => {
      let step = prev + 1;
      if (step > 2) {
        step = 2;
      }
      return step;
    });
  };

  return (
    <div className="steps-container">
      <StepsRoot className="stpes-root" currentStep={currentStep}>
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
        </StepsStep>
      </StepsRoot>

      <div className="steps-move">
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}
