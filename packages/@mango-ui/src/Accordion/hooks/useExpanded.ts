import { ExpandedIdType, ExpandedIndexType } from '../types';

interface UseExpandedType {
  index: ExpandedIndexType;
  id?: ExpandedIdType;
  expandedIndex?: ExpandedIndexType;
  expandedId?: ExpandedIdType;
}

const useExpanded = ({ index, id, expandedIndex, expandedId }: UseExpandedType): boolean => {
  if (id !== undefined) {
    if (Array.isArray(expandedId)) {
      return expandedId.some((_id) => id === _id);
    }
    return id === expandedId;
  }

  if (Array.isArray(expandedIndex)) {
    return expandedIndex.some((_index) => index === _index);
  }
  return index === expandedIndex;
};

export default useExpanded;
