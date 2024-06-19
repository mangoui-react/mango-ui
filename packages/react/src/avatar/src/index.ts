// export { default } from './Avatar';
// export { default as AvatarGroup } from './AvatarGroup';
// export { default as AvatarIcon } from './AvatarIcon';
// export { default as AvatarImg } from './AvatarImg';
import Root from './Avatar';
import Extra from './AvatarExtra';
import Group from './AvatarGroup';
import GroupContent from './AvatarGroupContent';
import Img from './AvatarImg';

export * from './Avatar';
export * from './AvatarExtra';
export * from './AvatarGroup';
export * from './AvatarGroupContent';
export * from './AvatarImg';

// const Avatar = Object.assign(AvatarRoot, { Extra, Group, GroupContent, Img });

const Avatar = {
  Root,
  Extra,
  Group,
  GroupContent,
  Img,
};

export { Avatar };
