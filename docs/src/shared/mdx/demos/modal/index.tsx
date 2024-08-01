import React from 'react';

import {
  ModalBackdrop,
  ModalClose,
  ModalContent,
  ModalPortal,
  ModalRoot,
  ModalTrigger,
} from '@melio-ui/modal';

import './styles.css';

export default function ModalDemo() {
  return (
    <ModalRoot>
      <ModalTrigger asChild>
        <button type="button" className="modal-trigger">
          Open Modal
        </button>
      </ModalTrigger>
      <ModalPortal>
        <ModalBackdrop className="modal-backdrop" />
        <ModalContent className="modal-content">
          <ModalClose asChild>
            <button type="button" className="modal-close-button">
              <CloseIcon />
            </button>
          </ModalClose>
          <div className="modal-header">Title</div>
          <div className="modal-body">Modal Content</div>
          <div className="modal-footer">
            <ModalClose asChild>
              <button
                type="button"
                style={{
                  backgroundColor: 'transparent',
                  marginRight: 3,
                }}
              >
                Close
              </button>
            </ModalClose>
          </div>
        </ModalContent>
      </ModalPortal>
    </ModalRoot>
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
