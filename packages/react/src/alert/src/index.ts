'use client';

import Root from './alert';
import Content from './alert-content';
import StatusIcon from './alert-status-icon';

export { default as AlertRoot } from './alert';
export { default as AlertContent } from './alert-content';
export { default as AlertStatusIcon } from './alert-status-icon';

export * from './alert';
export * from './alert-content';
export * from './alert-status-icon';

export const Alert = {
  Root,
  StatusIcon,
  Content,
};
