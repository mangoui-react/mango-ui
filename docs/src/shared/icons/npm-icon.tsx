import React from 'react';

export function NpmIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      version="1.1"
      viewBox="0 0 16 16"
      focusable="false"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M0 0v16h16v-16h-16zM13 13h-2v-8h-3v8h-5v-10h10v10z"></path>
    </svg>
  );
}
