'use client';

import React, { useEffect, useState } from 'react';

// react-live 내에서 prism-react-renderer 사용함
import { Highlight, themes } from 'prism-react-renderer';

import { cn } from '@/shared/utils/cn';

import { CopyButton } from './copy-button';
import ReactLiveBlock from './react-live-block';

export default function CodeBlock({
  showLines = false,
  live: liveProp,
  ...props
}: {
  children: React.ReactElement;
  live?: boolean;
  showLines?: boolean;
}): React.JSX.Element {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const {
    className,
    live = liveProp ?? true,
    // manual,
    render,
    children,
    // mountStylesheet = false,
  } = props.children.props as any;

  const _live = live === 'true' || live === true;

  const language = className?.replace(/language-/, '') ?? 'jsx';
  const rawCode = children.trim();

  const reactLiveBlockProps = {
    code: rawCode,
    language,
    theme: themes.vsDark,
    noInline: render,
    // mountStylesheet,
  };

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-boolean-literal-compare
  if (isMounted && language === 'jsx' && _live === true) {
    return <ReactLiveBlock {...reactLiveBlockProps} />;
  }

  return (
    <div className="relative text-sm">
      <Highlight theme={themes.vsDark} code={rawCode} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <div data-language={language}>
            <pre className={cn('px-4 py-3', 'max-h-96 overflow-y-auto', className)} style={style}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  {showLines && (
                    <span style={{ opacity: 0.3, marginRight: 20, fontSize: 12 }}>{i + 1}</span>
                  )}
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          </div>
        )}
      </Highlight>
      <CopyButton code={rawCode} />
    </div>
  );
}
