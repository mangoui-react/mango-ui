import React, { useCallback } from 'react';

import { ExpandedIdType, ExpandedIndexType } from '../types';
import useExpanded from './useExpanded';

interface UseAccordionType {
  index: number;
  id?: string;
  expandedIndex?: ExpandedIndexType;
  expandedId?: ExpandedIdType;
  setExpanded: (event: React.MouseEvent, index?: ExpandedIndexType, id?: ExpandedIdType) => void;
  toggle?: boolean;
  multiple?: boolean;
  disabled?: boolean;
}

const useAccordion = ({
  index,
  id,
  expandedIndex,
  expandedId,
  setExpanded,
  toggle,
  multiple,
  disabled,
}: UseAccordionType): { expanded: boolean; onHeaderClick: (event: React.MouseEvent) => void } => {
  const expanded: boolean = useExpanded({ index, id, expandedIndex, expandedId });

  const toggleExpand = useCallback(
    (event: React.MouseEvent) => {
      if (expanded) {
        setExpanded(event, undefined, undefined);
      } else {
        setExpanded(event, index, id);
      }
    },
    [expanded, id, index, setExpanded],
  );

  const multipleExpand = useCallback(
    (event: React.MouseEvent) => {
      const _expandedIndex = Array.isArray(expandedIndex) ? expandedIndex : [];
      const _expandedId = Array.isArray(expandedId) ? expandedId : undefined;

      if (expanded) {
        const newIndexs = _expandedIndex.filter((_index) => _index !== index);
        const newIds = _expandedId?.filter((_id) => _id !== id);
        setExpanded(event, newIndexs, newIds);
      } else {
        const newIndexs = [..._expandedIndex, index];
        let newIds = _expandedId ?? undefined;
        if (id !== undefined) {
          if (newIds !== undefined) {
            newIds.push(id);
          } else {
            newIds = [id];
          }
        }

        setExpanded(event, newIndexs, newIds);
      }
    },
    [expanded, expandedId, expandedIndex, id, index, setExpanded],
  );

  const onHeaderClick = useCallback(
    (event: React.MouseEvent) => {
      if (disabled) return;

      if (multiple) {
        multipleExpand(event);
      } else if (toggle) {
        toggleExpand(event);
      } else {
        setExpanded(event, index, id);
      }
    },
    [disabled, id, index, multiple, multipleExpand, setExpanded, toggle, toggleExpand],
  );

  return { expanded, onHeaderClick };
};

export default useAccordion;
