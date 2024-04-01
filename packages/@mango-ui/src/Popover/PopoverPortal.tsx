import React from 'react';

import { ContainerType, usePortal } from '../hooks';

export interface PopoverPortalProps {
  children?: React.ReactNode;
  /**
   * Popover 이 mount 되는 node (해당 node에는 position: relative 속성이 필요.)
   * @default document.body
   */
  container?: ContainerType;
}

export interface PopoverPortalContextValue {
  containerEl?: Element | HTMLElement;
}
export const PopoverPortalContext = React.createContext<PopoverPortalContextValue>({});

export default function PopoverPortal(props: PopoverPortalProps): JSX.Element {
  const { container, children } = props;

  const { Portal, target: containerEl } = usePortal(container);

  const contextValue = React.useMemo(
    () => ({
      containerEl,
    }),
    [containerEl],
  );

  return (
    <PopoverPortalContext.Provider value={contextValue}>
      <Portal>{children}</Portal>
    </PopoverPortalContext.Provider>
  );
}

PopoverPortal.displayName = 'Popover.Portal';
