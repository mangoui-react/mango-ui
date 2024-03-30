// 'use client';
// export { default } from './Accordion';
// export { default as AccordionPanel } from './AccordionPanel';
// export { default as AccordionHeader } from './AccordionHeader';
// export { default as AccordionContent } from './AccordionContent';
// export { default as AccordionArrowIcon } from './AccordionArrowIcon';
import Root from './Accordion';
import ArrowIcon from './AccordionArrowIcon';
import Content from './AccordionContent';
import Header from './AccordionHeader';
import Item from './AccordionItem';
import Title from './AccordionTitle';

export * from './Accordion';
export * from './AccordionItem';
export * from './AccordionHeader';
export * from './AccordionTitle';
export * from './AccordionContent';
export * from './AccordionArrowIcon';

export type { ExpandedIndexType, ExpandedValueType } from './types';

// const Accordion = Object.assign(Root, { Item, Header, Title, Content, ArrowIcon });

const Accordion = {
  Root,
  Item,
  Header,
  Title,
  Content,
  ArrowIcon,
};

export default Accordion;
// export default {
//   Root,
//   Item,
//   Header,
//   Title,
//   Content,
//   ArrowIcon,
// };
