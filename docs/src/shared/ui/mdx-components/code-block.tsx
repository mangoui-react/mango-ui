'use client';

import React, { useEffect, useState } from 'react';

// react-live 내에서 prism-react-renderer 사용함
import { Highlight, themes } from 'prism-react-renderer';

import { cn } from '@/shared/utils/cn';

import ReactLiveBlock from './react-live-block';

export default function CodeBlock({
  className: classNameProp,
  showLines = false,
  ...props
}: {
  className?: string;
  children: React.ReactElement;
  showLines?: boolean;
}): JSX.Element {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const {
    className,
    live = false,
    // manual,
    // render,
    children,
    // ln,
    // mountStylesheet = false,
  } = props.children.props;

  const _live = live === 'true' || live === true;

  const language = className?.replace(/language-/, '') ?? 'jsx';
  const rawCode = children.trim();

  const reactLiveBlockProps = {
    code: rawCode,
    language,
    theme: themes.shadesOfPurple,
    // noInline: manual,
    // mountStylesheet,
  };

  if (isMounted && language === 'jsx' && _live === true) {
    return <ReactLiveBlock {...reactLiveBlockProps} />;
  }

  return (
    <Highlight theme={themes.shadesOfPurple} code={rawCode} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div className={cn(className, classNameProp)} style={style} data-language={language}>
          <pre className={cn('py-5', className)} style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })} className="flex items-center">
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
  );
}
