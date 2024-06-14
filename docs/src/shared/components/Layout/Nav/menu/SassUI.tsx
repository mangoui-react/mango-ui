import React, { useCallback, useState } from 'react';

import Link from 'next/link';

const SassUI = () => {
  const [collapse, setCollapse] = useState(false);

  const handleClick = useCallback(() => {
    setCollapse((prev) => !prev);
  }, []);

  return (
    <>
      <li className="cursor-pointer hover:text-primary" onClick={handleClick}>
        Sass UI
      </li>
      {collapse && (
        <div className="ml-5">
          <ul>
            <li>
              <Link href="/sassui/avatar">Avatar</Link>
            </li>
            <li>
              <Link href="/sassui/button">Button</Link>
            </li>
            <li>
              <Link href="/sassui/accordion">Accordion</Link>
            </li>
            <li>
              <Link href="/sassui/input">Input</Link>
            </li>
            <li>
              <Link href="/sassui/textarea">Textarea</Link>
            </li>
            <li>
              <Link href="/sassui/number-input">NumberInput</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default SassUI;
