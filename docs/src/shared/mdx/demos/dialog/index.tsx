import React from 'react';

import {
  DialogBackdrop,
  DialogClose,
  DialogContent,
  DialogPortal,
  DialogRoot,
  DialogTrigger,
} from '@melio-ui/dialog';

import './styles.css';

export default function DialogDemo() {
  return (
    <DialogRoot>
      <DialogTrigger asChild>
        <button type="button" className="dialog-trigger">
          Open Dialog
        </button>
      </DialogTrigger>
      <DialogPortal>
        <DialogBackdrop className="dialog-backdrop" />
        <DialogContent className="dialog-content">
          <DialogClose asChild>
            <button type="button" className="dialog-close-button">
              <CloseIcon />
            </button>
          </DialogClose>
          <div className="dialog-header">Title</div>
          <div className="dialog-body">Dialog Content</div>
          <div className="dialog-footer">
            <DialogClose asChild>
              <button
                type="button"
                style={{
                  backgroundColor: 'transparent',
                  marginRight: 3,
                }}
              >
                Close
              </button>
            </DialogClose>
          </div>
        </DialogContent>
      </DialogPortal>
    </DialogRoot>
  );
}

function CloseIcon() {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
        fill="currentColor"
      />
    </svg>
  );
}
