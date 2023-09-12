import React, { useCallback, useState } from 'react';

import Link from 'next/link';

export default function Components(): JSX.Element {
  const [collapse, setCollapse] = useState(false);

  const handleClick = useCallback(() => {
    setCollapse((prev) => !prev);
  }, []);

  return (
    <>
      <li className="cursor-pointer hover:text-primary" onClick={handleClick}>
        Components
      </li>
      {collapse && (
        <div className="ml-5">
          <ul>
            <li>
              <Link href="/components/avatar">Avatar</Link>
            </li>
            <li>
              <Link href="/components/button">Button</Link>
            </li>
            <li>
              <Link href="/components/accordion">Accordion</Link>
            </li>
            <li>
              <Link href="/components/input">Input</Link>
            </li>
            <li>
              <Link href="/components/textarea">Textarea</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
