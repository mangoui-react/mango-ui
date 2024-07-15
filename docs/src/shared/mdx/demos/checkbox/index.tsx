import React from 'react';

import { CheckboxIcon, CheckboxIndicator, CheckboxLabel, CheckboxRoot } from '@melio-ui/checkbox';

import './styles.css';

export default function CheckboxDemo() {
  return (
    <CheckboxRoot className="root">
      <CheckboxIndicator className="indicator">
        <CheckboxIcon className="icon" />
      </CheckboxIndicator>
      <CheckboxLabel className="label">체크박스</CheckboxLabel>
    </CheckboxRoot>
  );
}
