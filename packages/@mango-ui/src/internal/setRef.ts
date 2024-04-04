import React from 'react';

export default function setRef<T>(
  ref: React.MutableRefObject<T | null> | ((instance: T | null) => void),
  node: T | null,
): void {
  if (typeof ref === 'function') {
    ref(node);
  } else if (ref) {
    ref.current = node;
  }
}
