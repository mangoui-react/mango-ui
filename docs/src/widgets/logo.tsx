import Image from 'next/image';
import Link from 'next/link';

import LogoImg from '@/public/images/logo.svg';

export default function Logo() {
  return (
    <Link className="mb-2 inline-flex md:mb-0" href="/" aria-label="Cruip">
      <Image src={LogoImg} width={32} height={32} alt="Docs" />
      <span className="ml-2 text-2xl font-bold">MelioUI</span>
    </Link>
  );
}
