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

// export interface PopoverPortalContextValue {
//   containerEl?: Element | HTMLElement;
// }
// export const PopoverPortalContext = React.createContext<PopoverPortalContextValue>({});

export default function PopoverPortal(props: PopoverPortalProps): JSX.Element {
  const { container, children } = props;

  const { Portal } = usePortal(container);

  // const contextValue = React.useMemo(
  //   () => ({
  //     containerEl,
  //   }),
  //   [containerEl],
  // );

  return <Portal>{children}</Portal>;
}

PopoverPortal.displayName = 'Popover.Portal';
