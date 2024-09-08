import React from 'react';

import { usePortal } from '@melio-ui/use-portal';

export interface DialogPortalProps {
  children?: React.ReactNode;
  /**
   * Dialog 이 mount 되는 node
   * @default document.body
   */
  container?: HTMLElement | (() => HTMLElement); // TODO: ContentType 사용
}

export default function DialogPortal(props: DialogPortalProps): JSX.Element {
  const { container, children } = props;

  const { Portal } = usePortal(container);

  return <Portal>{children}</Portal>;
}

DialogPortal.displayName = 'Dialog.Portal';
