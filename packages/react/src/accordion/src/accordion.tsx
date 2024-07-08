// 'use client';
import React from 'react';

import useDefaultExpanded from './hooks/use-default-expanded';
import useExpandControlled from './hooks/use-expand-controlled';
import { ExpandedIndexType, ExpandedValueType } from './types';

export interface AccordionProps
  extends Omit<React.ComponentPropsWithoutRef<'div'>, 'defaultValue'> {
  /** 초기선택 accordion value */
  defaultValue?: ExpandedValueType;
  /** 선택된 accordion value */
  value?: ExpandedValueType;
  /** panel open/close toggle */
  toggle?: boolean;
  /** panel open multiple */
  multiple?: boolean;
  /** accordion disabled */
  disabled?: boolean;
  /**
   * AccordionItem rendering 방법
   * selecting: 현재 선택된 AccordionItem 만 Rendering
   * selected: 선택된 적이 있는 AccordionItem Rendering
   * force: 모든 AccordionItem Rendering
   * @default 'selecting'
   */
  renderMode?: 'selecting' | 'selected' | 'force';
  /** accordion 선택 value change 시 발생 */
  onValueChange?: (value: ExpandedValueType) => void;
}

export interface AccordionContextValue
  extends Pick<AccordionProps, 'toggle' | 'multiple' | 'disabled' | 'renderMode'> {
  expandedIndex?: ExpandedIndexType;
  expandedValue?: ExpandedValueType;
  setExpanded: (
    event: React.MouseEvent,
    index: ExpandedIndexType,
    value?: ExpandedValueType,
  ) => void;
}
export const AccordionContext = React.createContext<AccordionContextValue>({
  expandedIndex: 0,
  setExpanded: () => {},
});

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>((props, ref) => {
  const {
    defaultValue: defaultValueProp,
    value: valueProp,
    children,
    toggle,
    multiple,
    disabled,
    renderMode = 'selecting',
    onValueChange,
    ...rest
  } = props;

  /**
   * expandedIndex 와 AccordionItem 의 index 는 내부적으로 expand 동작을 위해 사용
   * value 가 prop 으로 설정 되었다면 value 가 expand 동작을 위해 사용됨
   */
  // multiple 일 경우 defaultExpandedIndex 값이 없으면 빈 배열 설정, 배열이 아닌 값이면 예외 발생
  // const defaultExpandedIndex =
  //   multiple && !defaultExpandedIndexProp ? [] : defaultExpandedIndexProp;
  const defaultExpandedIndex = useDefaultExpanded<ExpandedIndexType | undefined>(
    undefined, // defaultExpandedIndexProp,
    multiple,
  );

  // expandedIndex 가 prop으로 넘어오면 expandedIndex 로 설정
  // expandedIndex 가 prop으로 넘어오지 않는다면 내부 useState 로 설정
  const [expandedIndex, setExpandedIndex] = useExpandControlled<ExpandedIndexType | undefined>(
    undefined, // expandedIndexProp,
    defaultExpandedIndex,
    multiple,
  );

  // multiple 일 경우 defaultValue 값이 없으면 빈 배열 설정, 배열이 아닌 값이면 예외 발생
  const defaultValue = useDefaultExpanded<ExpandedValueType | undefined>(
    defaultValueProp,
    multiple,
  );

  // value 값이 있을 경우 expandedIndex 가 아닌 value 로 선택된 panel을 판단한다.
  // AccordionItem 에 value 설정 - 내부 useState 로 value 설정
  // AccordionItem 에 value 설정 and prop으로 value 넘어오면 prop value 로 설정
  const [expandedValue, setExpandedValue] = useExpandControlled<ExpandedValueType | undefined>(
    valueProp,
    defaultValue,
    multiple,
  );

  const setExpanded = React.useCallback(
    (event: React.MouseEvent, index: ExpandedIndexType, value?: ExpandedValueType) => {
      setExpandedIndex(index);
      setExpandedValue(value);

      if (value !== undefined && value !== expandedValue) {
        onValueChange?.(value);
      }
    },
    [expandedValue, onValueChange, setExpandedIndex, setExpandedValue],
  );

  const contextValue = React.useMemo(
    () => ({ expandedIndex, expandedValue, setExpanded, toggle, multiple, disabled, renderMode }),
    [expandedIndex, expandedValue, setExpanded, toggle, multiple, disabled, renderMode],
  );

  let itemIndex = -1;

  return (
    <AccordionContext.Provider value={contextValue}>
      <div {...rest} ref={ref}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            itemIndex++;
            return React.cloneElement(child as React.ReactElement, {
              index: itemIndex,
            });
          }
          return child;
        })}
      </div>
    </AccordionContext.Provider>
  );
});

Accordion.displayName = 'Accordion';

// const Accordion = Object.assign(AccordionRoot, { Panel, Header, Content, ArrowIcon });

export default Accordion;
