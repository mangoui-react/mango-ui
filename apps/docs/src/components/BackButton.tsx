'use client';

import { useRouter } from 'next/navigation';

export default function BackButton(): JSX.Element {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => {
        router.back();
      }}
    >{`<-- 뒤로`}</button>
  );
}
