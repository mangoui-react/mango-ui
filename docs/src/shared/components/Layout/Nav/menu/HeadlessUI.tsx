import React, { useCallback, useState } from 'react';

import Link from 'next/link';

const HeadlessUI = () => {
  const [collapse, setCollapse] = useState(false);

  const handleClick = useCallback(() => {
    setCollapse((prev) => !prev);
  }, []);

  return (
    <>
      <li className="cursor-pointer hover:text-primary" onClick={handleClick}>
        Headless UI
      </li>
      {collapse && (
        <div className="ml-5">
          <ul>
            <li>
              <Link href="/headlessui/avatar">Avatar</Link>
            </li>
            <li>
              <Link href="/headlessui/button">Button</Link>
            </li>
            <li>
              <Link href="/headlessui/accordion">Accordion</Link>
            </li>
            <li>
              <Link href="/headlessui/input">Input</Link>
            </li>
            <li>
              <Link href="/headlessui/textarea">Textarea</Link>
            </li>
            <li>
              <Link href="/headlessui/number-input">NumberInput</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default HeadlessUI;
