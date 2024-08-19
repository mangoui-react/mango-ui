import Link from 'next/link';

import { Modal } from '@melio-ui/react';

interface SearchModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export default function SearchModal({ isOpen, setIsOpen }: SearchModalProps) {
  return (
    <Modal.Root
      open={isOpen}
      onOpenChange={(open) => {
        setIsOpen(open);
      }}
    >
      <Modal.Portal>
        <Modal.Backdrop />
        <Modal.Content className="max-h-full w-full max-w-2xl overflow-auto rounded bg-white shadow-lg dark:bg-slate-800">
          <Modal.Close asChild>
            <button type="button">Close</button>
          </Modal.Close>
          {/* Search form */}
          <form className="border-b border-slate-200 dark:border-slate-700">
            <div className="flex items-center">
              <label htmlFor="search-modal">
                <span className="sr-only">Search</span>
                <svg
                  className="ml-4 h-4 w-4 shrink-0 fill-slate-500 dark:fill-slate-400"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m14.707 13.293-1.414 1.414-2.4-2.4 1.414-1.414 2.4 2.4ZM6.8 12.6A5.8 5.8 0 1 1 6.8 1a5.8 5.8 0 0 1 0 11.6Zm0-2a3.8 3.8 0 1 0 0-7.6 3.8 3.8 0 0 0 0 7.6Z" />
                </svg>
              </label>
              <input
                id="search-modal"
                className="w-full appearance-none border-0 bg-white py-3 pl-2 pr-4 text-sm placeholder-slate-400 focus:ring-transparent dark:bg-slate-800 dark:placeholder:text-slate-500"
                type="search"
                placeholder="Search for anything…"
              />
            </div>
          </form>
          <div className="space-y-4 px-2 py-4">
            {/* Popular */}
            <div>
              <div className="mb-2 px-2 text-sm font-medium text-slate-500 dark:text-slate-400">
                Popular
              </div>
              <ul>
                <li>
                  <Link
                    className="flex items-center rounded px-2 py-1 text-sm leading-6 text-slate-800 outline-none focus-within:bg-slate-100 hover:bg-slate-100 dark:text-slate-200 dark:focus-within:bg-slate-700 dark:hover:bg-slate-700"
                    href="#0"
                  >
                    <svg
                      className="mr-3 h-3 w-3 shrink-0 fill-slate-400 dark:fill-slate-500"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11.953 4.29a.5.5 0 0 0-.454-.292H6.14L6.984.62A.5.5 0 0 0 6.12.173l-6 7a.5.5 0 0 0 .379.825h5.359l-.844 3.38a.5.5 0 0 0 .864.445l6-7a.5.5 0 0 0 .075-.534Z" />
                    </svg>
                    <span>Alternative Schemas</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex items-center rounded px-2 py-1 text-sm leading-6 text-slate-800 outline-none focus-within:bg-slate-100 hover:bg-slate-100 dark:text-slate-200 dark:focus-within:bg-slate-700 dark:hover:bg-slate-700"
                    href="#0"
                  >
                    <svg
                      className="mr-3 h-3 w-3 shrink-0 fill-slate-400 dark:fill-slate-500"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11.953 4.29a.5.5 0 0 0-.454-.292H6.14L6.984.62A.5.5 0 0 0 6.12.173l-6 7a.5.5 0 0 0 .379.825h5.359l-.844 3.38a.5.5 0 0 0 .864.445l6-7a.5.5 0 0 0 .075-.534Z" />
                    </svg>
                    <span>Query string parameters</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex items-center rounded px-2 py-1 text-sm leading-6 text-slate-800 outline-none focus-within:bg-slate-100 hover:bg-slate-100 dark:text-slate-200 dark:focus-within:bg-slate-700 dark:hover:bg-slate-700"
                    href="#0"
                  >
                    <svg
                      className="mr-3 h-3 w-3 shrink-0 fill-slate-400 dark:fill-slate-500"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11.953 4.29a.5.5 0 0 0-.454-.292H6.14L6.984.62A.5.5 0 0 0 6.12.173l-6 7a.5.5 0 0 0 .379.825h5.359l-.844 3.38a.5.5 0 0 0 .864.445l6-7a.5.5 0 0 0 .075-.534Z" />
                    </svg>
                    <span>Integrations</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex items-center rounded px-2 py-1 text-sm leading-6 text-slate-800 outline-none focus-within:bg-slate-100 hover:bg-slate-100 dark:text-slate-200 dark:focus-within:bg-slate-700 dark:hover:bg-slate-700"
                    href="#0"
                  >
                    <svg
                      className="mr-3 h-3 w-3 shrink-0 fill-slate-400 dark:fill-slate-500"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11.953 4.29a.5.5 0 0 0-.454-.292H6.14L6.984.62A.5.5 0 0 0 6.12.173l-6 7a.5.5 0 0 0 .379.825h5.359l-.844 3.38a.5.5 0 0 0 .864.445l6-7a.5.5 0 0 0 .075-.534Z" />
                    </svg>
                    <span>Organize Contacts with Tags</span>
                  </Link>
                </li>
              </ul>
            </div>
            {/* Actions */}
            <div>
              <div className="mb-2 px-2 text-sm font-medium text-slate-500">Actions</div>
              <ul>
                <li>
                  <Link
                    className="flex items-center rounded px-2 py-1 text-sm leading-6 text-slate-800 outline-none focus-within:bg-slate-100 hover:bg-slate-100 dark:text-slate-200 dark:focus-within:bg-slate-700 dark:hover:bg-slate-700"
                    href="#0"
                  >
                    <svg
                      className="mr-3 h-3 w-3 shrink-0 fill-blue-600"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11.854.146a.5.5 0 0 0-.525-.116l-11 4a.5.5 0 0 0-.015.934l4.8 1.921 1.921 4.8A.5.5 0 0 0 7.5 12h.008a.5.5 0 0 0 .462-.329l4-11a.5.5 0 0 0-.116-.525Z" />
                    </svg>
                    <span className="font-medium">Contact support</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex items-center rounded px-2 py-1 text-sm leading-6 text-slate-800 outline-none focus-within:bg-slate-100 hover:bg-slate-100 dark:text-slate-200 dark:focus-within:bg-slate-700 dark:hover:bg-slate-700"
                    href="#0"
                  >
                    <svg
                      className="mr-3 h-3 w-3 shrink-0 fill-purple-500"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M6 0C2.691 0 0 2.362 0 5.267c0 2.905 2.691 5.266 6 5.266a6.8 6.8 0 0 0 1.036-.079l2.725 1.485a.5.5 0 0 0 .739-.439V8.711A4.893 4.893 0 0 0 12 5.267C12 2.362 9.309 0 6 0Z" />
                    </svg>
                    <span className="font-medium">Submit feedback</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Modal.Content>
      </Modal.Portal>
    </Modal.Root>
  );
}
