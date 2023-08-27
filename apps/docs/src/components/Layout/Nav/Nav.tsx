'use client';

import Link from 'next/link';

import GettingStarted from './menu/GettingStarted';
import Components from './menu/Components';

const Nav = (): JSX.Element => {
  return (
    <nav className="shrink-0 z-[1300]">
      <div
        className="w-[260px] whitespace-nowrap box-border overflow-x-hidden shadow-none"
        style={{
          borderRight: '1px solid rgb(60, 60, 60)',
          transition: 'width 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
        }}
      >
        <div
          className="bg-black text-inherit overflow-y-auto flex flex-col h-full z-[1200] fixed top-0 left-0 outline-0 w-[260px] overflow-x-hidden shadow-none"
          style={{
            borderRight: '1px solid rgb(60, 60, 60)',
            transition: 'width 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
          }}
        >
          <div className="min-h-[60px] pt-2 pb-2 pl-6 flex items-center justify-start">Logo</div>
          <div className="grow h-full overflow-hidden">
            Menu
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>

              <GettingStarted />
              <Components />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
