import React from 'react';

import { ProgressIndicator, ProgressRoot } from '@mangoui/progress';

import './styles.css';

export default function ProgressDemo() {
  return (
    <ProgressRoot className="progress-root" value={30}>
      <ProgressIndicator className="progress-indicator" />
    </ProgressRoot>
  );
}
