import React from 'react';

import { ContainerType, usePortal } from '@mangoui/use-portal';

export interface TooltipPortalProps {
  children?: React.ReactNode;
  /**
   * Tooltip 이 mount 되는 node
   * open 과 함께 사용해야 적용됨
   * @default document.body
   */
  container?: ContainerType;
}

export default function TooltipPortal(props: TooltipPortalProps): React.JSX.Element {
  const { container, children } = props;

  const { Portal } = usePortal(container);

  return <Portal>{children}</Portal>;
}

TooltipPortal.displayName = 'Tooltip.Portal';
