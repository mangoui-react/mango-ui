import React from 'react';

import {
  ModalBackdrop,
  ModalClose,
  ModalCloseButton,
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
        <button type="button">Open Modal</button>
      </ModalTrigger>
      <ModalPortal>
        <ModalBackdrop className="modal-backdrop" />
        <ModalContent className="modal-content">
          <ModalClose asChild>
            <ModalCloseButton className="modal-closeButton" />
          </ModalClose>
          <div className="modal-body">Modal Content</div>
          <div className="modal-footer">
            <ModalClose asChild>
              <button
                type="button"
                style={{
                  color: '#208aff',
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
