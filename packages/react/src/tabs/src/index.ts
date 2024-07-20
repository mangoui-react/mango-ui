'use client';

import Root from './tabs';
import Content from './tabs-content';
import List from './tabs-list';
import Tab from './tabs-tab';

export { default as TabsTab } from './tabs-tab';
export { default as TabsContent } from './tabs-content';
export { default as TabsList } from './tabs-list';
export { default as TabsRoot } from './tabs';

export * from './tabs';
export * from './tabs-list';
export * from './tabs-tab';
export * from './tabs-content';

export const Tabs = {
  Root,
  Tab,
  Content,
  List,
};
