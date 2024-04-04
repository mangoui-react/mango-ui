// export { default } from './Tabs';
// export { default as TabList } from './TabList';
// export { default as Tab } from './Tab';
// export { default as TabContent } from './TabContent';
import Tab from './Tab';
import Content from './TabContent';
import List from './TabList';
import Root from './Tabs';

export * from './Tabs';
export * from './TabList';
export * from './Tab';
export * from './TabContent';

const Tabs = {
  Root,
  Tab,
  Content,
  List,
};

export default Tabs;
