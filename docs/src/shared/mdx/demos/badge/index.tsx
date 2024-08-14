import React from 'react';

import { BadgeContent, BadgeRoot } from '@melio-ui/badge';

import './styles.css';

export default function BadgeDemo() {
  return (
    <BadgeRoot className="badge-root">
      <BadgeContent className="badge-content">{2}</BadgeContent>
      <UserIcon />
    </BadgeRoot>
  );
}

function UserIcon() {
  return (
    <svg
      width="2em"
      height="2em"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      color="#e2e8f0"
    >
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
  );
}
