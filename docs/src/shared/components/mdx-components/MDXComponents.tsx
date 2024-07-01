import * as Demos from '@/shared/components/demos';

import CodeBlock from './CodeBlock';
import DemoCodeBlock from './DemoCodeBlock';
import DemoContainer from './DemoContainer';
import { PackageManagers } from './PackageManagers';
import { ImportSyntax } from './import-syntax';

// TODO: 어떤 용도인지 모하는 놈인지 알아보자. mdx 문서에서의 Button 인듯
const Button = (props: React.ComponentPropsWithoutRef<'button'>) => <button {...props} />;

export const MDXComponents = {
  h1: (props: any) => (
    <h1 style={{ marginTop: '2rem', marginBottom: '0.25rem', fontSize: '1.875rem' }} {...props} />
  ),
  h2: (props: any) => (
    <h2 style={{ marginTop: '4rem', marginBottom: '0.5rem', fontSize: '1.5rem' }} {...props} />
  ),
  strong: (props: any) => <strong {...props} />,
  p: (props: any) => <p {...props} />,
  ul: (props: any) => (
    <ul style={{ listStyle: 'disc', marginTop: '0.5rem', marginLeft: '1.25rem' }} {...props} />
  ),
  ol: (props: any) => <ol {...props} />,
  li: (props: any) => <li style={{ paddingBottom: 4 }} {...props} />,
  pre: (props: any) => {
    // if (typeof props.children === 'string') return <Pre {...props} />
    return <CodeBlock {...props} />;
  },
  Button,
  PackageManagers,
  ImportSyntax,
  DemoContainer,
  DemoCodeBlock,
  ...Demos,
};
