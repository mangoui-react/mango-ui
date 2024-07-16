import React from 'react';

import {
  DrawerBackdrop,
  DrawerClose,
  DrawerCloseButton,
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
        <button type="button">Open Drawer</button>
      </DrawerTrigger>
      <DrawerPortal>
        <DrawerBackdrop className="drawer-backdrop" backdrop />
        <DrawerContent className="drawer-content">
          <div className="drawer-header">Title</div>
          <DrawerClose asChild>
            <DrawerCloseButton className="drawer-closeButton" />
          </DrawerClose>
          <div className="drawer-body">Drawer Content</div>
          <div className="drawer-footer">
            <DrawerClose asChild>
              <button
                type="button"
                style={{
                  color: '#208aff',
                  backgroundColor: 'transparent',
                  marginRight: 3,
                }}
              >
                Cancel
              </button>
            </DrawerClose>
            <button
              type="button"
              style={{
                color: '#fff',
                borderColor: '#208aff',
                background: '#208aff',
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
