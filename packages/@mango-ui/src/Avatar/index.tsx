// export { default } from './Avatar';
// export { default as AvatarGroup } from './AvatarGroup';
// export { default as AvatarIcon } from './AvatarIcon';
// export { default as AvatarImg } from './AvatarImg';

import AvatarRoot from './Avatar';
import Group from './AvatarGroup';
import Icon from './AvatarIcon';
import Img from './AvatarImg';

export * from './Avatar';
export * from './AvatarGroup';
export * from './AvatarIcon';
export * from './AvatarImg';

const Avatar = Object.assign(AvatarRoot, { Group, Icon, Img });

export default Avatar;
