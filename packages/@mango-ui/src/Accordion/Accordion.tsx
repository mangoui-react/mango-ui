'use client';

import React, { useCallback, useMemo } from 'react';

import { ComponentBaseProps } from '../types/common';

import useDefaultExpanded from './hooks/useDefaultExpanded';
import useExpandControlled from './hooks/useExpandControlled';
import { ExpandedIdType, ExpandedIndexType } from './types';

export interface AccordionProps
  extends ComponentBaseProps,
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'onSelect'> {
  /** 선택된 accordion index */
  expandedIndex?: ExpandedIndexType;
  /** 초기선택 accordion index */
  defaultExpandedIndex?: ExpandedIndexType;
  /** 선택된 accordion id */
  defaultExpandedId?: ExpandedIdType;
  /** 초기선택 accordion id */
  expandedId?: ExpandedIdType;
  /** panel open/close toggle */
  toggle?: boolean;
  /** panel open multiple */
  multiple?: boolean;
  /** accordion disabled */
  disabled?: boolean;
  /**
   * AccordionPanel rendering 방법
   * selecting: 현재 선택된 AccordionPanel 만 Rendering
   * selected: 선택된 적이 있는 AccordionPanel Rendering
   * force: 모든 AccordionPanel Rendering
   * @default 'selected'
   */
  renderMode?: 'selecting' | 'selected' | 'force';
  /** accordion 선택 change 시 발생 */
  onChange?: (event: React.MouseEvent, index?: ExpandedIndexType, id?: ExpandedIdType) => void;
  /** accordion 선택시 발생 */
  onSelect?: (event: React.MouseEvent, index?: ExpandedIndexType, id?: ExpandedIdType) => void;
}

export interface AccordionContextType
  extends Pick<
    AccordionProps,
    'expandedIndex' | 'expandedId' | 'toggle' | 'multiple' | 'disabled' | 'renderMode'
  > {
  setExpanded: (event: React.MouseEvent, index?: ExpandedIndexType, id?: ExpandedIdType) => void;
}
export const AccordionContext = React.createContext<AccordionContextType>({
  expandedIndex: 0,
  setExpanded: () => {},
});

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      defaultExpandedIndex: defaultExpandedIndexProp,
      expandedIndex: expandedIndexProp,
      defaultExpandedId: defaultExpandedIdProp,
      expandedId: expandedIdProp,
      children,
      toggle,
      multiple,
      disabled,
      renderMode = 'selected',
      onChange,
      onSelect,
      ...rest
    },
    ref,
  ) => {
    // multiple 일 경우 defaultExpandedIndex 값이 없으면 빈 배열 설정, 배열이 아닌 값이면 예외 발생
    // const defaultExpandedIndex =
    //   multiple && !defaultExpandedIndexProp ? [] : defaultExpandedIndexProp;
    const defaultExpandedIndex = useDefaultExpanded<ExpandedIndexType | undefined>(
      defaultExpandedIndexProp,
      multiple,
    );

    // expandedIndex 가 prop으로 넘어오면 expandedIndex 로 설정
    // expandedIndex 가 prop으로 넘어오지 않는다면 내부 useState 로 설정
    const [expandedIndex, setExpandedIndex] = useExpandControlled<ExpandedIndexType | undefined>(
      expandedIndexProp,
      defaultExpandedIndex,
      multiple,
    );

    // multiple 일 경우 defaultExpandedId 값이 없으면 빈 배열 설정, 배열이 아닌 값이면 예외 발생
    const defaultExpandedId = useDefaultExpanded<ExpandedIdType | undefined>(
      defaultExpandedIdProp,
      multiple,
    );

    // expandedId 값이 있을 경우 expandedIndex 가 아닌 expandedId 로 선택된 panel을 판단한다.
    // AccordionPanel 에 id 설정 - 내부 useState 로 expandedId 설정
    // AccordionPanel 에 id 설정 and prop으로 expandedId 넘어오면 prop expandedId 로 설정
    const [expandedId, setExpandedId] = useExpandControlled<ExpandedIdType | undefined>(
      expandedIdProp,
      defaultExpandedId,
      multiple,
    );

    const setExpanded = useCallback(
      (event: React.MouseEvent, index?: ExpandedIndexType, id?: ExpandedIdType) => {
        setExpandedIndex(index);
        setExpandedId(id);

        onSelect?.(event, index, id);
        if (id && id !== expandedId) {
          onChange?.(event, index, id);
        } else if (index !== expandedIndex) {
          onChange?.(event, index, id);
        }
      },
      [expandedId, expandedIndex, onChange, onSelect, setExpandedId, setExpandedIndex],
    );

    const contextValue = useMemo(
      () => ({ expandedIndex, expandedId, setExpanded, toggle, multiple, disabled, renderMode }),
      [disabled, expandedId, expandedIndex, multiple, renderMode, setExpanded, toggle],
    );

    let panelIndex = -1;

    return (
      <AccordionContext.Provider value={contextValue}>
        <div ref={ref} {...rest}>
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
              panelIndex++;
              return React.cloneElement(child as React.ReactElement, {
                index: child.props.index ?? panelIndex,
                // disabled: child.props.disabled ?? disabled,
              });
            }
            return child;
          })}
        </div>
      </AccordionContext.Provider>
    );
  },
);

export default Accordion;
