import { GithubIcon } from '@/shared/icons/github-icon';

import Logo from './logo';
// TODO: 개발자 도구 안열리고 복사 안되는 문제 있음. 확인 필요
// import Search from './search';
import ThemeToggle from './theme-toggle';

export default function Header() {
  return (
    <header className="fixed z-30 w-full">
      <div
        className="absolute inset-0 -z-10 border-b border-slate-200 bg-white bg-opacity-70 backdrop-blur dark:border-slate-800 dark:bg-slate-900"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Site branding */}
          <div className="grow">
            <div className="flex items-center">
              <Logo />
              {/* <Search /> */}
            </div>
          </div>

          {/* Desktop navigation */}
          <nav className="flex">
            {/* Right side elements links */}
            <ul className="flex grow flex-wrap items-center justify-end">
              {/* <li className="ml-4">
                <a
                  className="btn-sm inline-flex items-center bg-blue-600 text-slate-100 shadow-sm hover:bg-blue-700"
                  href="#0"
                >
                  Support
                </a>
              </li> */}
              <li>
                <button className="ml-3 flex items-center rounded-md p-2 hover:bg-slate-200 dark:hover:bg-slate-600">
                  <GithubIcon />
                </button>
              </li>
              {/* Lights switch */}
              <li>
                <ThemeToggle />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
