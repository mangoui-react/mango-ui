import React from 'react';

import { usePortal } from '../hooks';

export interface ModalPortalProps {
  children?: React.ReactNode;
  /**
   * Modal 이 mount 되는 node
   * @default document.body
   */
  container?: HTMLElement | (() => HTMLElement);
}

export default function ModalPortal(props: ModalPortalProps): JSX.Element {
  const { container, children } = props;

  const { Portal } = usePortal(container);

  return <Portal>{children}</Portal>;
}

ModalPortal.displayName = 'Modal.Portal';
