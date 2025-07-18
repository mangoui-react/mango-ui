import React from 'react';

import {
  CircularProgressIndicator,
  CircularProgressLabel,
  CircularProgressRoot,
} from '@mangoui/circular-progress';

import './styles.css';

export default function CircularProgressDemo() {
  return (
    <CircularProgressRoot className="circular-progress-root" value={30}>
      <CircularProgressIndicator className="circular-progress-indicator" />
      <CircularProgressLabel className="circular-progress-label">30%</CircularProgressLabel>
    </CircularProgressRoot>
  );
}
