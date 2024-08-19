import React from 'react';

import { cn } from '@/shared/utils/cn';

export interface CopyButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  code: string;
}

export function CopyButton({ className, code, onClick, ...props }: CopyButtonProps) {
  const [hasCopied, setHasCopied] = React.useState(false);

  React.useEffect(() => {
    if (hasCopied) {
      setTimeout(() => {
        setHasCopied(false);
      }, 1500);
    }
  }, [hasCopied]);

  const handleCopyClipBoard = async (text?: string) => {
    try {
      await navigator.clipboard.writeText(text ?? '');
      setHasCopied(true);
      // alert('클립보드에 복사되었습니다.');
    } catch (error) {
      alert('Clipboard copy failed.');
    }
  };

  return (
    <button
      {...props}
      className={cn(
        'absolute right-2 top-2',
        'h-8 w-8',
        'inline-flex items-center justify-center',
        'hover:rounded-md hover:bg-slate-600',
        className,
      )}
      onClick={() => {
        void handleCopyClipBoard(code);
      }}
    >
      {hasCopied ? <CheckIcon /> : <CopyIcon />}
    </button>
  );
}

function CopyIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
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

function CheckIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="64 64 896 896"
      focusable="false"
      data-icon="check"
      fill="currentColor"
      aria-hidden="true"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" />
    </svg>
  );
}
