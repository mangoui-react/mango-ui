import React from 'react';

import {
  NumberInputButtonGroup,
  NumberInputField,
  NumberInputMinus,
  NumberInputPlus,
  NumberInputRoot,
} from '@melio-ui/number-input';

import './styles.css';

export default function NumberInputDemo() {
  return (
    <div style={{ padding: 10 }}>
      <NumberInputRoot className="number-input-root">
        <NumberInputField className="number-input-field" />
        <NumberInputButtonGroup className="number-input-button-group">
          <NumberInputPlus className="number-input-button" />
          <NumberInputMinus className="number-input-button" />
        </NumberInputButtonGroup>
      </NumberInputRoot>
    </div>
  );
}
