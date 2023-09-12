'use client';

// import React from 'react';
import Link from 'next/link';

// import BellIcon from '@/icons/BellIcon';
// import GitHubIcon from '@/icons/GitHubIcon';

// import { Button } from '@/ui';

const Header = (): JSX.Element => {
  return (
    <header className="flex flex-col bg-background shadow-none box-border shrink-0 fixed top-0 right-0 left-auto text-inherit z-[1201] w-[calc(100%_-_260px)] border-b border-b-slate-600">
      <div className="relative flex items-center px-4 py-2 min-h-[60px]">
        <div className="w-full">
          <input />
        </div>
        {/* <div className="shrink-0 ml-2">
          <Link href="https://github.com/elle510/mango-admin" target="_blank">
            <SassButton className="border-0" icon={<GitHubIcon />} />
          </Link>
        </div>
        <div className="shrink-0 ml-2">
          <SassButton icon={<BellIcon />}>버튼1</SassButton>
        </div> */}

        <div className="shrink-0 ml-1">
          <Link href="https://github.com/elle510/mango-admin" target="_blank">
            {/* <Button className="border-0 px-1 text-[1.25rem]" icon={<GitHubIcon />} /> */}
            <button>GitHub</button>
          </Link>
        </div>
        <div className="shrink-0 ml-1">
          {/* <Button className="border-0 px-1 text-[1.25rem]" icon={<BellIcon />} /> */}
          <button>Bell</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
