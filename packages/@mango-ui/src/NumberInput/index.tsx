// export { default } from './NumberInput';
// export { default as NumberInputField } from './NumberInputField';
// export { default as NumberInputButtonGroup } from './NumberInputButtonGroup';
// export { default as NumberInputPlus } from './NumberInputPlus';
// export { default as NumberInputMinus } from './NumberInputMinus';
import Root from './NumberInput';
import ButtonGroup from './NumberInputButtonGroup';
import Field from './NumberInputField';
import Minus from './NumberInputMinus';
import Plus from './NumberInputPlus';

export * from './NumberInput';
export * from './NumberInputField';
export * from './NumberInputButtonGroup';
export * from './NumberInputPlus';
export * from './NumberInputMinus';

const NumberInput = {
  Root,
  Field,
  ButtonGroup,
  Plus,
  Minus,
};

export default NumberInput;
