import React from 'react';

import {
  RadioGroupIcon,
  RadioGroupIndicator,
  RadioGroupItem,
  RadioGroupLabel,
  RadioGroupRoot,
} from '@melio-ui/radio-group';

import './styles.css';

export default function RadioGroupDemo() {
  return (
    <RadioGroupRoot className="radio-group-root">
      <RadioGroupItem className="radio-group-item" value="1">
        <RadioGroupIndicator className="radio-group-indicator">
          <RadioGroupIcon className="radio-group-icon" />
        </RadioGroupIndicator>
        <RadioGroupLabel className="radio-group-label">Radio1</RadioGroupLabel>
      </RadioGroupItem>

      <RadioGroupItem className="radio-group-item" value="2">
        <RadioGroupIndicator className="radio-group-indicator">
          <RadioGroupIcon className="radio-group-icon" />
        </RadioGroupIndicator>
        <RadioGroupLabel className="radio-group-label">Radio2</RadioGroupLabel>
      </RadioGroupItem>

      <RadioGroupItem className="radio-group-item" value="3">
        <RadioGroupIndicator className="radio-group-indicator">
          <RadioGroupIcon className="radio-group-icon" />
        </RadioGroupIndicator>
        <RadioGroupLabel className="radio-group-label">Radio3</RadioGroupLabel>
      </RadioGroupItem>
    </RadioGroupRoot>
  );
}
