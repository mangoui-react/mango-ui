import React, { useCallback, useState } from 'react';

import Link from 'next/link';

export default function GettingStarted(): JSX.Element {
  const [collapse, setCollapse] = useState(false);

  const handleClick = useCallback(() => {
    setCollapse((prev) => !prev);
  }, []);

  return (
    <>
      <li className="cursor-pointer hover:text-primary" onClick={handleClick}>
        Getting Started
      </li>
      {collapse && (
        <div className="ml-5">
          <ul>
            <li>
              <Link href="/getting-started/installation">Installation</Link>
            </li>
            <li>
              <Link href="/getting-started/usage">Usage</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
