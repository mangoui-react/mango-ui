/* eslint-disable @typescript-eslint/array-type */

/* eslint-disable @typescript-eslint/no-unnecessary-type-constraint */
// https://github.com/jaredLunde/react-hook/tree/master/packages/merged-ref 소스 복사해사 사용
import * as React from 'react';

// export function useMergedRef<T>(...refs: (React.Ref<T> | undefined)[]): React.RefCallback<T> {
//   return (element: T) => {
//     refs.forEach((ref) => {
//       if (typeof ref === 'function') ref(element);
//       else if (ref && typeof ref === 'object') (ref as React.MutableRefObject<T>).current = element;
//     });
//   };
// }
// TODO: 점진적으로 useMergedRef 를 useComposedRefs 로 바꾸자.
export function useMergedRef<T>(...refs: React.Ref<T>[]): React.RefCallback<T> {
  return React.useCallback(
    (element: T) => {
      for (let i = 0; i < refs.length; i++) {
        const ref = refs[i];
        if (typeof ref === 'function') ref(element);
        else if (ref && typeof ref === 'object')
          (ref as React.MutableRefObject<T>).current = element;
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    refs,
  );
}
