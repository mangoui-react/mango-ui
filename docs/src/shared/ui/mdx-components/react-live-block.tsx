'use client';

import React from 'react';

import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';

import * as Melio from '@melio-ui/react';

import * as Mango from '@/shared/mango-react';

import { CopyButton } from './copy-button';

export interface ReactLiveBlockProps {
  code?: string;
  disabled?: boolean;
  enableTypeScript?: boolean;
  language?: string;
  noInline?: boolean;
  scope?: Record<string, unknown>;
  // theme?: typeof themes.nightOwl;
  theme?: any;
  transformCode?(code: string): void;
}

const Button = (props: React.ComponentPropsWithoutRef<'button'>) => <button {...props} />;

const ReactLiveScope = {
  React,
  ...React,
  Button,
  ...Melio,
  ...Mango,
};

export default function ReactLiveBlock({
  code,
  scope = ReactLiveScope,
  // scope,
  ...rest
}: ReactLiveBlockProps): JSX.Element {
  return (
    <LiveProvider code={code} scope={scope} {...rest}>
      <LivePreview className="border border-slate-600 rounded-xl p-6" />
      <div className="relative">
        {/* <div className="flex items-center justify-end gap-1">
          <button>expand</button>
          <button onClick={() => handleCopyClipBoard(code)}>
            <DocsCopyIcon />
          </button>
        </div> */}
        <CopyButton code={code ?? ''} />
        <LiveEditor />
      </div>
      <LiveError />
    </LiveProvider>
  );
}
