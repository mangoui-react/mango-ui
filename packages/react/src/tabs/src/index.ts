'use client';

import Tab from './tab';
import Content from './tab-content';
import List from './tab-list';
import Root from './tabs';

export { default as TabsTab } from './tab';
export { default as TabsContent } from './tab-content';
export { default as TabsList } from './tab-list';
export { default as TabsRoot } from './tabs';

export * from './tabs';
export * from './tab-list';
export * from './tab';
export * from './tab-content';

export const Tabs = {
  Root,
  Tab,
  Content,
  List,
};
