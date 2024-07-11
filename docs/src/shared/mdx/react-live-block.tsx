'use client';

import React from 'react';

import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';

import { UserIcon } from '@/shared/icons/user-icon';
// import * as Melio from '@melio-ui/react';
import * as SharedUi from '@/shared/ui';

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

const ReactLiveScope = {
  React,
  ...React,
  // ...Melio,
  UserIcon,
  ...SharedUi,
};

export default function ReactLiveBlock({
  code,
  scope = ReactLiveScope,
  // scope,
  ...rest
}: ReactLiveBlockProps): JSX.Element {
  return (
    <LiveProvider code={code} scope={scope} {...rest}>
      <LivePreview className="rounded-xl border border-slate-600 p-6" />
      <div className="relative my-3 rounded border border-slate-600 text-sm">
        <LiveEditor className="[&>*]:!px-4 [&>*]:!py-3" />
        <CopyButton code={code ?? ''} />
      </div>
      <LiveError />
    </LiveProvider>
  );
}
