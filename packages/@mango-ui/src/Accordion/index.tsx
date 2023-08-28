// 'use client';

// export { default } from './Accordion';
// export { default as AccordionPanel } from './AccordionPanel';
// export { default as AccordionHeader } from './AccordionHeader';
// export { default as AccordionContent } from './AccordionContent';
// export { default as AccordionArrowIcon } from './AccordionArrowIcon';

import AccordionRoot from './Accordion';
import Panel from './AccordionPanel';
import Header from './AccordionHeader';
import Content from './AccordionContent';
import ArrowIcon from './AccordionArrowIcon';

export * from './Accordion';
export * from './AccordionPanel';
export * from './AccordionHeader';
export * from './AccordionContent';
export * from './AccordionArrowIcon';
export type { ExpandedIndexType, ExpandedIdType } from './types';

// TODO: Accordion.Panel 방식 더 찾아보자
const Accordion = Object.assign(AccordionRoot, { Panel, Header, Content, ArrowIcon });

export default Accordion;
