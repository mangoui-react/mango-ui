import React from 'react';

export default function useDefaultExpanded<T>(
  defaultExpandedProp: T,
  multiple?: boolean,
): T | never[] {
  return React.useMemo(() => {
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
}
