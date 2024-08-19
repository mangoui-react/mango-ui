/* eslint-disable no-useless-escape */
import React from 'react';

import Link from 'next/link';

import { ExternalLinkIcon } from '@/shared/icons/external-link-icon';
import * as Demos from '@/shared/mdx/demos';

import CodeBlock from './code-block';
import { DataAttributesTable } from './data-attributes-table';
import DemoCodeBlock from './demo-code-block';
import DemoContainer from './demo-container';
import { ImportSyntax } from './import-syntax';
import { PackageManagers } from './package-managers';
import { PropsTable } from './props-table';

// TODO: 어떤 용도인지 모하는 놈인지 알아보자. mdx 문서에서의 Button 인듯
// const Button = (props: React.ComponentPropsWithoutRef<'button'>) => <button {...props} />;

export const MDXComponents = {
  h1: (props: any) => (
    <h1
      style={{ marginTop: '2rem', marginBottom: '0.25rem', fontSize: '1.875rem', fontWeight: 700 }}
      {...props}
    />
  ),
  h2: ({ children, ...props }: any) => {
    const textContent = React.Children.toArray(children).join('');
    const id = transformToSlug(textContent);
    return (
      <h2
        style={{
          marginTop: '3rem',
          marginBottom: '0.75rem',
          fontSize: '1.5rem',
          fontWeight: 700,
          scrollMarginTop: '6rem',
        }}
        id={id}
        {...props}
      >
        {children}
      </h2>
    );
  },
  h3: ({ children, ...props }: any) => {
    const textContent = React.Children.toArray(children).join('');
    const id = transformToSlug(textContent);
    return (
      <h3
        style={{
          marginTop: '2.5rem',
          marginBottom: '0.5rem',
          fontSize: '1.125rem',
          fontWeight: 700,
          scrollMarginTop: '6rem',
        }}
        id={id}
        {...props}
      >
        {children}
      </h3>
    );
  },
  Description: ({ children, ...props }: any) => {
    const childText = typeof children === 'string' ? children : children.props.children;
    return (
      <p {...props} className="mb-10 mt-2">
        {childText}
      </p>
    );
  },
  strong: (props: any) => <strong {...props} />,
  p: (props: any) => <p {...props} style={{ marginBottom: '1rem' }} />,
  a: ({ href = '', children, ...props }: any) => {
    if (href.startsWith('http')) {
      return (
        <a
          {...props}
          className="inline-flex items-center gap-1 text-[#70b8ff]"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
          <ExternalLinkIcon />
        </a>
      );
    }
    return (
      <Link href={href} passHref legacyBehavior>
        <a {...props}>{children}</a>
      </Link>
    );
  },
  ul: (props: any) => (
    <ul style={{ listStyle: 'disc', marginTop: '0.5rem', marginLeft: '1.25rem' }} {...props} />
  ),
  ol: (props: any) => <ol {...props} />,
  li: (props: any) => <li style={{ paddingBottom: 4 }} {...props} />,
  pre: (props: any) => {
    // if (typeof props.children === 'string') return <Pre {...props} />
    return <CodeBlock {...props} />;
  },
  blockquote: (props: any) => (
    <blockquote
      style={{
        padding: '0 1em',
        marginBottom: '1rem',
        marginTop: '1rem',
        borderLeft: '.25em solid #30363d',
      }}
      {...props}
    />
  ),
  // Button,
  PackageManagers,
  ImportSyntax,
  DemoContainer,
  DemoCodeBlock,
  PropsTable,
  DataAttributesTable,
  ...Demos,
};

const transformToSlug = (input: string) => {
  return input
    .toLowerCase()
    .trim()
    .split(' ')
    .join('-')
    .split('&')
    .join('-and-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
};
