'use client';

import { useEffect, useRef } from 'react';

// import { Transition } from '@headlessui/react';
// import Link from 'next/link';
// import { useSelectedLayoutSegments } from 'next/navigation';
import { useAppProvider } from '@/app/app-provider';
import { cn } from '@/shared/utils/cn';

import SidebarLink from './sidebar-link';

// import SidebarLinkGroup from './sidebar-link-group';
// import SidebarLinkSubgroup from './sidebar-link-subgroup';

export default function SupportSidebar() {
  // const sidebar = useRef<HTMLDivElement>(null);
  // const { sidebarOpen, setSidebarOpen } = useAppProvider();
  // const segments = useSelectedLayoutSegments();

  // close on click outside
  // useEffect(() => {
  //   const clickHandler = ({ target }: { target: EventTarget | null }): void => {
  //     if (!sidebar.current) return;
  //     if (!sidebarOpen || sidebar.current.contains(target as Node)) return;
  //     setSidebarOpen(false);
  //   };
  //   document.addEventListener('click', clickHandler);
  //   return () => document.removeEventListener('click', clickHandler);
  // });

  // close if the esc key is pressed
  // useEffect(() => {
  //   const keyHandler = ({ keyCode }: { keyCode: number }): void => {
  //     if (!sidebarOpen || keyCode !== 27) return;
  //     setSidebarOpen(false);
  //   };
  //   document.addEventListener('keydown', keyHandler);
  //   return () => document.removeEventListener('keydown', keyHandler);
  // });

  return (
    <>
      {/* Backdrop */}
      {/* <div
        // as="div"
        className="md:hidden fixed inset-0 z-10 bg-slate-900 bg-opacity-20 transition-opacity"
        // show={sidebarOpen}
        // enter="transition ease-out duration-200"
        // enterFrom="opacity-0"
        // enterTo="opacity-100"
        // leave="transition ease-out duration-100"
        // leaveFrom="opacity-100"
        // leaveTo="opacity-0"
        aria-hidden="true"
      /> */}

      {/* Sidebar */}
      <div>
        <aside
          // show={sidebarOpen}
          // unmount={false}
          // as="aside"
          id="sidebar"
          className="fixed bottom-0 left-0 top-0 z-10 h-screen w-64 border-r border-slate-200 md:left-auto md:!block md:shrink-0 md:!opacity-100 dark:border-slate-800 dark:bg-slate-900"
          // enter="transition ease-out duration-200 transform"
          // enterFrom="opacity-0 -translate-x-full"
          // enterTo="opacity-100 translate-x-0"
          // leave="transition ease-out duration-200"
          // leaveFrom="opacity-100"
          // leaveTo="opacity-0"
        >
          {/* Gradient bg displaying on light layout only */}
          <div
            className="pointer-events-none absolute inset-0 -left-[9999px] -z-10 bg-gradient-to-b from-slate-50 to-white dark:hidden"
            aria-hidden="true"
          ></div>

          <div className="no-scrollbar fixed bottom-0 top-0 w-64 overflow-y-auto px-4 sm:px-6 md:pl-0 md:pr-8">
            <div className="pb-8 pt-24 md:pt-28">
              {/* Docs nav */}
              <nav className="md:block">
                <ul className="text-sm">
                  <div
                    className={cn(
                      'relative flex items-center p-1 font-[650] text-slate-800',
                      'before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded before:bg-gradient-to-tr before:from-blue-400 before:to-purple-500 before:opacity-20',
                      'dark:text-slate-200',
                    )}
                  >
                    <svg
                      className="mr-3 shrink-0"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="fill-blue-400"
                        d="M19.888 7.804a.88.88 0 0 0-.314-.328l-7.11-4.346a.889.889 0 0 0-.927 0L4.426 7.476a.88.88 0 0 0-.314.328L12 12.624l7.888-4.82Z"
                      />
                      <path
                        className="fill-white dark:fill-slate-800"
                        d="M4.112 7.804a.889.889 0 0 0-.112.43v7.892c0 .31.161.597.426.758l7.11 4.346c.14.085.3.13.464.13v-8.736l-7.888-4.82Z"
                      />
                      <path
                        className="fill-blue-600"
                        d="M19.888 7.804c.073.132.112.28.112.43v7.892c0 .31-.161.597-.426.758l-7.11 4.346c-.14.085-.3.13-.464.13v-8.736l7.888-4.82Z"
                      />
                    </svg>
                    <span>Overview</span>
                  </div>
                  <ul className="mb-3 ml-4 border-l border-slate-200 pl-6 dark:border-slate-800">
                    <li className="mt-3">
                      <SidebarLink href="/overview/introduction">Introduction</SidebarLink>
                    </li>
                    <li className="mt-3">
                      <SidebarLink href="/overview/getting-started">Getting started</SidebarLink>
                    </li>
                  </ul>

                  <div
                    className={cn(
                      'relative flex items-center p-1 font-[650] text-slate-800',
                      'before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded before:bg-gradient-to-tr before:from-blue-400 before:to-purple-500 before:opacity-20',
                      'dark:text-slate-200',
                    )}
                  >
                    <svg
                      className="mr-3 shrink-0"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="fill-purple-400"
                        d="M19.888 7.804a.88.88 0 0 0-.314-.328l-7.11-4.346a.889.889 0 0 0-.927 0L4.426 7.476a.88.88 0 0 0-.314.328L12 12.624l7.888-4.82Z"
                      />
                      <path
                        className="fill-white dark:fill-slate-800"
                        d="M4.112 7.804a.889.889 0 0 0-.112.43v7.892c0 .31.161.597.426.758l7.11 4.346c.14.085.3.13.464.13v-8.736l-7.888-4.82Z"
                      />
                      <path
                        className="fill-purple-600"
                        d="M19.888 7.804c.073.132.112.28.112.43v7.892c0 .31-.161.597-.426.758l-7.11 4.346c-.14.085-.3.13-.464.13v-8.736l7.888-4.82Z"
                      />
                    </svg>
                    <span>Components</span>
                  </div>
                  <ul className="mb-3 ml-4 border-l border-slate-200 pl-6 dark:border-slate-800">
                    <li className="mt-3">
                      <SidebarLink href="/components/accordion">Accordion</SidebarLink>
                    </li>
                    <li className="mt-3">
                      <SidebarLink href="/components/alert">Alert</SidebarLink>
                    </li>
                    <li className="mt-3">
                      <SidebarLink href="/components/avatar">Avatar</SidebarLink>
                    </li>
                    <li className="mt-3">
                      <SidebarLink href="/components/badge">Badge</SidebarLink>
                    </li>
                    <li className="mt-3">
                      <SidebarLink href="/components/breadcrumb">Breadcrumb</SidebarLink>
                    </li>
                    <li className="mt-3">
                      <SidebarLink href="/components/checkbox">Checkbox</SidebarLink>
                    </li>
                    <li className="mt-3">
                      <SidebarLink href="/components/button">Button</SidebarLink>
                    </li>
                  </ul>
                </ul>
              </nav>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
