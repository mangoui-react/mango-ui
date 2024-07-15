import React from 'react';

import {
  CircularProgressIndicator,
  CircularProgressLabel,
  CircularProgressRoot,
} from '@melio-ui/circular-progress';

import './styles.css';

export default function CircularProgressDemo() {
  return (
    <CircularProgressRoot className="root" value={30}>
      <CircularProgressIndicator className="indicator" />
      <CircularProgressLabel className="label">30%</CircularProgressLabel>
    </CircularProgressRoot>
  );
}
