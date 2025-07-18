import React from 'react';

import { SwitchRoot, SwitchThumb, SwitchTrack } from '@mangoui/switch';

import './styles.css';

export default function SwitchDemo() {
  return (
    <SwitchRoot className="switch-root">
      <SwitchTrack className="switch-track">
        <SwitchThumb className="switch-thumb" />
      </SwitchTrack>
    </SwitchRoot>
  );
}
