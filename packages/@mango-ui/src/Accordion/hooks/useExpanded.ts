import { ExpandedIndexType, ExpandedValueType } from '../types';

interface UseExpandedParams {
  index: ExpandedIndexType;
  value?: ExpandedValueType;
  expandedIndex?: ExpandedIndexType;
  expandedValue?: ExpandedValueType;
}

export default function useExpanded({
  index,
  value,
  expandedIndex,
  expandedValue,
}: UseExpandedParams): boolean {
  if (value !== undefined) {
    if (Array.isArray(expandedValue)) {
      return expandedValue.some((_value) => value === _value);
    }
    return value === expandedValue;
  }

  if (Array.isArray(expandedIndex)) {
    return expandedIndex.some((_index) => index === _index);
  }
  return index === expandedIndex;
}
