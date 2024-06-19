import React from 'react';

import { createPopper } from '@popperjs/core';

import { ContainerType, usePortal } from '../../hooks';
import setRef from '../../internal/setRef';

import { Placement } from '../types';

interface PopperProps {
  /** Tooltip show/hide */
  open?: boolean;
  /**
   * Tootip 이 display되는 위치
   * @default 'top'
   */
  placement?: Placement;
  /**
   * Tooltip 이 mount 되는 node
   * @default document.body
   */
  container?: ContainerType; // HTMLElement | (() => HTMLElement);
  childNodeRef: React.MutableRefObject<HTMLElement | undefined>;
  children?: React.ReactNode;
}

/**
 * @popperjs/core 래핑 컴포넌트
 * 실제 사용하지 않음
 */
export default function Popper(props: PopperProps): JSX.Element | null {
  const { open, placement = 'top', container, childNodeRef, children } = props;
  const { Portal } = usePortal(container);
  const tooltipRef = React.useRef<HTMLDivElement>();

  const handleOpen = React.useCallback(() => {
    if (!open || !childNodeRef.current || !tooltipRef.current) {
      return;
    }

    createPopper(childNodeRef.current, tooltipRef.current, {
      placement,
      modifiers: [{ name: 'offset', options: { offset: [0, 8] } }],
    });
  }, [childNodeRef, open, placement]);

  const handleRef = React.useCallback(
    (node: any) => {
      setRef(tooltipRef, node);
      handleOpen();
    },
    [handleOpen],
  );

  if (!open) {
    return null;
  }

  return (
    <Portal>
      <div ref={handleRef} role="tooltip">
        {children}
      </div>
    </Portal>
  );
}
