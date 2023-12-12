import { ExpandedIndexType, ExpandedValueType } from '../types';

interface UseExpandedType {
  index: ExpandedIndexType;
  value?: ExpandedValueType;
  expandedIndex?: ExpandedIndexType;
  expandedValue?: ExpandedValueType;
}

const useExpanded = ({ index, value, expandedIndex, expandedValue }: UseExpandedType): boolean => {
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
};

export default useExpanded;
