import { useMemo } from 'react';

const useDefaultExpanded = <T>(defaultExpandedProp: T, multiple?: boolean): T | never[] => {
  return useMemo(() => {
    if (multiple) {
      if (
        typeof defaultExpandedProp === 'undefined' ||
        defaultExpandedProp === null ||
        !Array.isArray(defaultExpandedProp)
      ) {
        return [];
      }
      return defaultExpandedProp;
    }
    return defaultExpandedProp;
  }, [defaultExpandedProp, multiple]);
};

export default useDefaultExpanded;
