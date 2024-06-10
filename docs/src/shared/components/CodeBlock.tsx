'use client';

import React, { useEffect, useState } from 'react';
// import SyntaxHighlighter from 'react-syntax-highlighter';
// import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

// react-live 내에서 prism-react-renderer 사용함
import { Highlight, themes } from 'prism-react-renderer';

import ReactLiveBlock from './ReactLiveBlock';

export default function CodeBlock(props: any): JSX.Element {
  // console.log('CodeBlock props', props);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const {
    className,
    // live = true,
    // manual,
    // render,
    children,
    // viewlines,
    // ln,
    // mountStylesheet = false,
  } = props.children.props;

  // const _live = live === 'true' || live === true

  const language = className?.replace(/language-/, '');
  const rawCode = children.trim();

  const reactLiveBlockProps = {
    code: rawCode,
    language,
    // theme,
    // noInline: manual,
    // mountStylesheet,
  };

  if (isMounted && language === 'jsx' /* && _live === true */) {
    return <ReactLiveBlock {...reactLiveBlockProps} />;
  }

  // return (
  //   <SyntaxHighlighter language={language} style={dark}>
  //     {rawCode}
  //   </SyntaxHighlighter>
  // );

  return (
    <Highlight theme={themes.shadesOfPurple} code={rawCode} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className="p-5" style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              {/* <span>{i + 1}</span> */}
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}
