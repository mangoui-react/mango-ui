import React from 'react';

import Link from 'next/link';

export default function GettingStarted() {
  return (
    <>
      <li className="cursor-pointer hover:text-primary">
        <Link href="/getting-started">Getting started</Link>
      </li>
    </>
  );
}
