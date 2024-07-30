import React, { useCallback, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

// TODO: 타입은 아래로 바꿨을때 문제 없는지 확인해 보자
// export type ContainerType = HTMLElement | (() => HTMLElement | null) | null;
export type ContainerType = HTMLElement | (() => HTMLElement);
type UsePortalParams = ContainerType | null;

export function usePortal(container?: UsePortalParams): {
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
