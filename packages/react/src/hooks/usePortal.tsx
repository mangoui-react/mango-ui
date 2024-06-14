import React, { useCallback, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

export type ContainerType = HTMLElement | (() => HTMLElement | null) | null;

export default function usePortal(container?: ContainerType): {
  Portal: React.FC<{ children: React.ReactNode }>;
  target: Element | HTMLElement | undefined;
} {
  const [mountEl, setmountEl] = useState<Element | HTMLElement>();

  useEffect(() => {
    const containerEl = typeof container === 'function' ? container() : container;
    setmountEl(containerEl ?? document.body);
  }, [container]);

  const Portal: React.FC<{ children: React.ReactNode }> = useCallback(
    ({ children }) => {
      return mountEl ? ReactDOM.createPortal(children, mountEl) : null;
    },
    [mountEl],
  );

  return { Portal, target: mountEl };
}
