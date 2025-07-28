import React from 'react';

import { ContainerType, usePortal } from '@mangoui/use-portal';

export interface SelectPortalProps {
  children?: React.ReactNode;
  /**
   * Popover 이 mount 되는 node (해당 node에는 position: relative 속성이 필요.)
   * @default document.body
   */
  container?: ContainerType;
}

export default function SelectPortal(props: SelectPortalProps): React.JSX.Element {
  const { container, children } = props;

  const { Portal } = usePortal(container);

  return <Portal>{children}</Portal>;
}

SelectPortal.displayName = 'Select.Portal';
