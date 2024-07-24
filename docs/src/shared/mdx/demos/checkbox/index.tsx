import React from 'react';

import { CheckboxIcon, CheckboxIndicator, CheckboxLabel, CheckboxRoot } from '@melio-ui/checkbox';

import './styles.css';

export default function CheckboxDemo() {
  return (
    <CheckboxRoot className="checkbox-root">
      <CheckboxIndicator className="checkbox-indicator">
        <CheckboxIcon className="checkbox-icon" />
      </CheckboxIndicator>
      <CheckboxLabel className="checkbox-label">Label</CheckboxLabel>
    </CheckboxRoot>
  );
}
