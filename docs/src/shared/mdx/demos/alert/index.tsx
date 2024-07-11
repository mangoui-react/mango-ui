import React from 'react';

import { AlertContent, AlertRoot, AlertStatusIcon } from '@melio-ui/alert';

import './styles.css';

export default function AlertDemo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <AlertRoot className="alert-root">
        <AlertStatusIcon className="alert-icon" />
        <AlertContent className="alert-content">This is an info alert</AlertContent>
      </AlertRoot>

      <AlertRoot className="alert-root" status="success">
        <AlertStatusIcon className="alert-icon" />
        <AlertContent className="alert-content">This is an success alert</AlertContent>
      </AlertRoot>

      <AlertRoot className="alert-root" status="warning">
        <AlertStatusIcon className="alert-icon" />
        <AlertContent className="alert-content">This is an warning alert</AlertContent>
      </AlertRoot>

      <AlertRoot className="alert-root" status="error">
        <AlertStatusIcon className="alert-icon" />
        <AlertContent className="alert-content">This is an error alert</AlertContent>
      </AlertRoot>
    </div>
  );
}
