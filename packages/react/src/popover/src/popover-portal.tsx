import React from 'react';

import { ContainerType, usePortal } from '@melio-ui/use-portal';

export interface PopoverPortalProps {
  children?: React.ReactNode;
  /**
   * Popover 이 mount 되는 node (해당 node에는 position: relative 속성이 필요.)
   * @default document.body
   */
  container?: ContainerType;
}

export default function PopoverPortal(props: PopoverPortalProps): React.JSX.Element {
  const { container, children } = props;

  const { Portal } = usePortal(container);

  return <Portal>{children}</Portal>;
}

PopoverPortal.displayName = 'Popover.Portal';
