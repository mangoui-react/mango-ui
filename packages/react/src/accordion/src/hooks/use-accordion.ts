import React from 'react';

import { ExpandedIndexType, ExpandedValueType } from '../types';
import useExpanded from './use-expanded';

interface UseAccordionParams {
  index: number;
  value?: string;
  expandedIndex?: ExpandedIndexType;
  expandedValue?: ExpandedValueType;
  setExpanded: (
    event: React.MouseEvent,
    index: ExpandedIndexType,
    value?: ExpandedValueType,
  ) => void;
  toggle?: boolean;
  multiple?: boolean;
  disabled?: boolean;
}

export default function useAccordion({
  index,
  value,
  expandedIndex,
  expandedValue,
  setExpanded,
  toggle,
  multiple,
  disabled,
}: UseAccordionParams): { expanded: boolean; onHeaderClick: (event: React.MouseEvent) => void } {
  const expanded: boolean = useExpanded({ index, value, expandedIndex, expandedValue });

  const toggleExpand = React.useCallback(
    (event: React.MouseEvent) => {
      if (expanded) {
        setExpanded(event, null, null);
      } else {
        setExpanded(event, index, value);
      }
    },
    [expanded, value, index, setExpanded],
  );

  const multipleExpand = React.useCallback(
    (event: React.MouseEvent) => {
      const _expandedIndex = Array.isArray(expandedIndex) ? expandedIndex : [];
      const _expandedValue = Array.isArray(expandedValue) ? expandedValue : [];

      if (expanded) {
        const newIndexs = _expandedIndex.filter((_index) => _index !== index);
        const newValues = _expandedValue.filter((_value) => _value !== value);
        setExpanded(event, newIndexs, newValues);
      } else {
        const newIndexs = [..._expandedIndex, index];
        const newValues = [..._expandedValue];
        if (value !== undefined) {
          newValues.push(value);
        }

        setExpanded(event, newIndexs, newValues);
      }
    },
    [expandedIndex, expandedValue, expanded, setExpanded, index, value],
  );

  const onHeaderClick = React.useCallback(
    (event: React.MouseEvent) => {
      if (disabled) return;

      if (multiple) {
        multipleExpand(event);
      } else if (toggle) {
        toggleExpand(event);
      } else {
        setExpanded(event, index, value);
      }
    },
    [disabled, value, index, multiple, multipleExpand, setExpanded, toggle, toggleExpand],
  );

  return { expanded, onHeaderClick };
}
