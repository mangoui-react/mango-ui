'use client';

import Root from './avatar';
import Extra from './avatar-extra';
import Group from './avatar-group';
import GroupContent from './avatar-group-content';
import Img from './avatar-img';

export { default as AvatarRoot } from './avatar';
export { default as AvatarExtra } from './avatar-extra';
export { default as AvatarGroup } from './avatar-group';
export { default as AvatarGroupContent } from './avatar-group-content';
export { default as AvatarImg } from './avatar-img';

export * from './avatar';
export * from './avatar-extra';
export * from './avatar-group';
export * from './avatar-group-content';
export * from './avatar-img';

// export const Avatar = Object.assign(Root, { Extra, Group, GroupContent, Img });

export const Avatar = {
  Root,
  Extra,
  Group,
  GroupContent,
  Img,
};
