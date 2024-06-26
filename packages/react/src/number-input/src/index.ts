'use client';

import Root from './number-input';
import ButtonGroup from './number-input-button-group';
import Field from './number-input-field';
import Minus from './number-input-minus';
import Plus from './number-input-plus';

export { default as NumberInputRoot } from './number-input';
export { default as NumberInputButtonGroup } from './number-input-button-group';
export { default as NumberInputField } from './number-input-field';
export { default as NumberInputMinus } from './number-input-minus';
export { default as NumberInputPlus } from './number-input-plus';

export * from './number-input';
export * from './number-input-field';
export * from './number-input-button-group';
export * from './number-input-plus';
export * from './number-input-minus';

export const NumberInput = {
  Root,
  Field,
  ButtonGroup,
  Plus,
  Minus,
};
