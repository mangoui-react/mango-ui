/* eslint-disable @typescript-eslint/array-type */

/* eslint-disable @typescript-eslint/no-unnecessary-type-constraint */
// https://github.com/jaredLunde/react-hook/tree/master/packages/merged-ref 소스 복사해사 사용
import * as React from 'react';

export function useMergedRef<T>(...refs: (React.Ref<T> | undefined)[]): React.RefCallback<T> {
  return (element: T) => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') ref(element);
      else if (ref && typeof ref === 'object') (ref as React.MutableRefObject<T>).current = element;
    });
  };
}
