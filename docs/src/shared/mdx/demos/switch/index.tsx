import React from 'react';

import { SwitchLabel, SwitchRoot, SwitchThumb, SwitchTrack } from '@melio-ui/switch';

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
