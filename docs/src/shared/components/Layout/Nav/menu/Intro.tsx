import React from 'react';

import Link from 'next/link';

export default function Intro() {
  return (
    <>
      <li className="cursor-pointer hover:text-primary">
        <Link href="/overview/introduction">Introduction</Link>
      </li>
    </>
  );
}
