'use client';

import React from 'react';

import { Accordion } from '@melio-ui/accordion';

import './styles.css';

export default function AccordionDemo() {
  return (
    <Accordion.Root className="root">
      <Accordion.Item className="item">
        <Accordion.Header className="header">
          <span className="title">Panel Header1</span>
          <Accordion.ArrowIcon />
        </Accordion.Header>
        <Accordion.Content className="content">Content1</Accordion.Content>
      </Accordion.Item>

      <Accordion.Item className="item">
        <Accordion.Header className="header">
          <span className="title">Panel Header2</span>
          <Accordion.ArrowIcon />
        </Accordion.Header>
        <Accordion.Content className="content">Content2</Accordion.Content>
      </Accordion.Item>

      <Accordion.Item className="item">
        <Accordion.Header className="header">
          <span className="title">Panel Header3</span>
          <Accordion.ArrowIcon />
        </Accordion.Header>
        <Accordion.Content className="content">Content3</Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}
