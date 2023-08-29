// export { default } from './Button';
// export { default as ButtonGroup } from './ButtonGroup';
// export { default as ButtonIcon } from './ButtonIcon';

import ButtonRoot from './Button';
import Group from './ButtonGroup';
// import Icon from './ButtonIcon';

export * from './Button';
export * from './ButtonGroup';
// export * from './ButtonIcon';

const Button = Object.assign(ButtonRoot, { Group });

export default Button;
