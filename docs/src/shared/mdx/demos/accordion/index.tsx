import React from 'react';

import {
  AccordionArrowIcon,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionRoot,
} from '@melio-ui/accordion';

import './styles.css';

export default function AccordionDemo() {
  return (
    <AccordionRoot className="root">
      <AccordionItem className="item">
        <AccordionHeader className="header">
          <span className="title">Panel Header</span>
          <AccordionArrowIcon />
        </AccordionHeader>
        <AccordionContent className="content">Content1</AccordionContent>
      </AccordionItem>

      <AccordionItem className="item">
        <AccordionHeader className="header">
          <span className="title">Panel Header2</span>
          <AccordionArrowIcon />
        </AccordionHeader>
        <AccordionContent className="content">Content2</AccordionContent>
      </AccordionItem>

      <AccordionItem className="item">
        <AccordionHeader className="header">
          <span className="title">Panel Header3</span>
          <AccordionArrowIcon />
        </AccordionHeader>
        <AccordionContent className="content">Content3</AccordionContent>
      </AccordionItem>
    </AccordionRoot>
  );
}
