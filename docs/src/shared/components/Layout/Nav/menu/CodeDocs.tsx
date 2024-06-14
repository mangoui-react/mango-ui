import React, { useCallback, useState } from 'react';

import Link from 'next/link';

export default function CodeDocs() {
  const [collapse, setCollapse] = useState(false);

  const handleClick = useCallback(() => {
    setCollapse((prev) => !prev);
  }, []);

  return (
    <>
      <li className="cursor-pointer hover:text-primary" onClick={handleClick}>
        코드 문서화
      </li>
      {collapse && (
        <div className="ml-5">
          <ul>
            <li>
              <Link href="/sandpack/sandpack-examples">Sandpack 공식 예제</Link>
            </li>
            <li>
              <Link href="/sandpack/my-examples">Sandpack My 예제</Link>
            </li>
            <li>
              <Link href="/react-live/react-live-examples">React Live 공식 문서 예제</Link>
            </li>
            <li>
              <Link href="/react-live/my-examples">React Live My 예제</Link>
            </li>
            <li>
              <Link href="/posts">Contentlayer 공식 예제</Link>
            </li>
            <li>
              <Link href="/docs/button">Contentlayer My 예제</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
