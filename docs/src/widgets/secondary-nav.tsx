'use client';

import { useEffect, useState } from 'react';

export default function SecondaryNav() {
  const [targets, setTargets] = useState<HTMLElement[]>([]);
  const [links, setLinks] = useState<HTMLElement[]>([]);

  const scrollSpy = () => {
    const links = document.querySelectorAll('[data-scrollspy-link]');
    if (links.length < 1) return;
    const addActive = (i: number) => {
      const link = links[i] ? links[i] : links[0];
      link.classList.add('scrollspy-active');
    };
    const removeActive = (i: number) => {
      links[i].classList.remove('scrollspy-active');
    };
    const removeAllActive = () => {
      [...Array(targets.length).keys()].forEach((link) => {
        removeActive(link);
      });
    };
    const targetMargin = 100;
    let currentActive = 0;
    addActive(0);
    // listen for scroll events
    window.addEventListener('scroll', () => {
      const current =
        targets.length -
        [...targets]
          .reverse()
          .findIndex((target) => window.scrollY >= target.offsetTop - targetMargin) -
        1;
      if (current !== currentActive) {
        removeAllActive();
        currentActive = current;
        addActive(current);
      }
    });
  };

  // select targets
  useEffect(() => {
    const targets = document.querySelectorAll('h2') as NodeListOf<HTMLElement>;
    setTargets(Array.from(targets));
  }, []);

  // populate the right sidebar
  useEffect(() => {
    const linksArray: HTMLElement[] = [];
    targets.map((target) => {
      linksArray.push(target);
    });
    setLinks(linksArray);
  }, [targets]);

  // init scrollspy
  useEffect(() => {
    scrollSpy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [links]);

  return (
    <div className="hidden w-48 shrink-0 xl:block">
      {links.length > 0 && (
        <nav>
          <div className="no-scrollbar fixed bottom-0 h-[calc(100vh-5rem)] w-48 overflow-y-auto pb-8 pt-32">
            <div className="border-l border-slate-200 dark:border-slate-800">
              <div className="py-1.5 pl-4 text-xs font-[650] uppercase text-slate-400 dark:text-slate-200">
                On this page
              </div>
              <ul className="text-sm">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      data-scrollspy-link
                      className="relative block py-1.5 pl-4 font-normal text-slate-600 before:absolute before:-left-px before:bottom-2 before:top-2 before:w-0.5"
                      href={`#${link.id}`}
                    >
                      {link.textContent}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
}
