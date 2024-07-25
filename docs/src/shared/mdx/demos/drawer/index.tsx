import React from 'react';

import {
  DrawerBackdrop,
  DrawerClose,
  DrawerContent,
  DrawerPortal,
  DrawerRoot,
  DrawerTrigger,
} from '@melio-ui/drawer';

import './styles.css';

export default function DrawerDemo() {
  return (
    <DrawerRoot>
      <DrawerTrigger asChild>
        <button
          type="button"
          style={{
            border: '1px solid #fff',
            padding: 5,
            borderRadius: 5,
          }}
        >
          Open Drawer
        </button>
      </DrawerTrigger>
      <DrawerPortal>
        <DrawerBackdrop className="drawer-backdrop" />
        <DrawerContent className="drawer-content">
          <div className="drawer-header">Title</div>
          <DrawerClose asChild>
            <button type="button" className="drawer-close-button">
              <CloseIcon />
            </button>
          </DrawerClose>
          <div className="drawer-body">Drawer Content</div>
          <div className="drawer-footer">
            <DrawerClose asChild>
              <button
                type="button"
                style={{
                  backgroundColor: 'transparent',
                  marginRight: 3,
                  padding: 5,
                }}
              >
                Cancel
              </button>
            </DrawerClose>
            <button
              type="button"
              style={{
                color: '#fff',
                backgroundColor: '#208aff',
                padding: 5,
                borderRadius: 5,
              }}
            >
              Confirm
            </button>
          </div>
        </DrawerContent>
      </DrawerPortal>
    </DrawerRoot>
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
