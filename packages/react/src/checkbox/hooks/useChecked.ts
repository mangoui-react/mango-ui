import React from 'react';

type SetStateFn<T> = (prev?: T) => T;

export default function useChecked<T extends boolean>(
  checkedProp: T | undefined,
  defaultChecked: T,
): [T, (value: T) => void] {
  //   console.log('useChecked');
  const [internalChecked, setInternalChecked] = React.useState<T>(defaultChecked);

  // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
  const checked = checkedProp !== undefined ? checkedProp : internalChecked;
  // const checked = checkedProp ?? internalChecked;

  const setChecked = React.useCallback(
    (newChecked: T | SetStateFn<T>) => {
      // console.log('useChecked setChecked');
      if (checkedProp === undefined) {
        const setter = newChecked as SetStateFn<T>;
        const _newChecked = typeof newChecked === 'function' ? setter() : newChecked;
        setInternalChecked(_newChecked);
      }
    },
    [checkedProp],
  );
  return [checked, setChecked];
}
