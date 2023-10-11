// // 'use client';

// export { default } from './NumberInput';
// export { default as NumberInputGroup } from './NumberInputGroup';
// export { default as NumberInputButtonGroup } from './NumberInputButtonGroup';
// export { default as NumberInputPlusButton } from './NumberInputPlusButton';
// export { default as NumberInputMinusButton } from './NumberInputMinusButton';

import NumberInputRoot from './NumberInput';
import Group from './NumberInputGroup';
import ButtonGroup from './NumberInputButtonGroup';
import PlusButton from './NumberInputPlusButton';
import MinusButton from './NumberInputMinusButton';

export * from './NumberInput';
export * from './NumberInputGroup';
export * from './NumberInputButtonGroup';
export * from './NumberInputPlusButton';
export * from './NumberInputMinusButton';

const NumberInput = Object.assign(NumberInputRoot, { Group, ButtonGroup, PlusButton, MinusButton });

export default NumberInput;
