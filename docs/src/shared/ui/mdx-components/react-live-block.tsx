'use client';

import React from 'react';

import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';

import * as Melio from '@melio-ui/react';

import * as Mango from '@/shared/mango-react';

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
  const handleCopyClipBoard = async (text?: string) => {
    try {
      await navigator.clipboard.writeText(text ?? '');
      alert('클립보드에 복사되었습니다.');
    } catch (error) {
      alert('클립보드 복사에 실패하였습니다.');
    }
  };

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
        <button className="absolute top-10 right-2" onClick={() => handleCopyClipBoard(code)}>
          <DocsCopyIcon />
        </button>
        <LiveEditor />
      </div>
      <LiveError />
    </LiveProvider>
  );
}

function DocsCopyIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
      />
    </svg>
  );
}
