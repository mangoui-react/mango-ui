import React from 'react';

import { useControlled } from '@mangoui/use-controlled';

import { TypeAttributes } from '../../types/common';

export interface TabsProps extends React.ComponentPropsWithoutRef<'div'> {
  /** 선택된 tab value */
  value?: string;
  /** 초기선택 tab value */
  defaultValue?: string;
  /** tab 방향 */
  orientation?: TypeAttributes.Orientation;
  /**
   * TabContent rendering 방법
   * selecting: 현재 선택된 TabContent 만 Rendering
   * selected: 선택된 적이 있는 TabContent는 다른 Tab 을 선택해도 Rendering
   * force: 모든 TabContent Rendering
   * @default 'selecting'
   */
  renderMode?: 'selecting' | 'selected' | 'force';
  /** tab 선택 value change 시 발생 */
  onValueChange?: (value: string) => void;
}

export interface TabsContextValue extends Pick<TabsProps, 'orientation' | 'renderMode'> {
  selectedValue?: string;
  selectedIndex?: number;
  setSelected: (index: number, value?: string) => void; // React.Dispatch<React.SetStateAction<number>>;
}

export const TabsContext = React.createContext<TabsContextValue>({
  selectedIndex: 0,
  setSelected: () => {},
});

interface TabPanelProps {
  index?: number;
}

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>((props, ref) => {
  const {
    value: valueProp,
    defaultValue,
    orientation,
    renderMode = 'selecting',
    children,
    onValueChange,
    ...rest
  } = props;

  // selectedIndex 는 내부적으로만 사용
  // const [selectedIndex, setSelectedIndex] = useControlled<number | undefined>(undefined, 0);
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);

  // value 값이 있을 경우 selectedIndex 가 아닌 value 로 선택된 tab을 판단한다.
  // tab과 tappanel 에 id 설정 - 내부 useState 로 value 설정
  // tab과 tappanel 에 id 설정 and prop으로 value 넘어오면 prop value 로 설정
  const [selectedValue, setSelectedValue] = useControlled<string | undefined>(
    valueProp,
    defaultValue,
  );

  // Tab Click 시 호출
  const setSelected = React.useCallback(
    (index: number, value?: string) => {
      setSelectedIndex(index);
      setSelectedValue(value);

      if (value && value !== selectedValue) {
        onValueChange?.(value);
      }
    },
    [onValueChange, selectedValue, setSelectedIndex, setSelectedValue],
  );

  const contextValue = React.useMemo(
    () => ({ selectedIndex, selectedValue, setSelected, orientation, renderMode }),
    [orientation, renderMode, selectedIndex, selectedValue, setSelected],
  );
  // console.log('Tabs contextValue', contextValue);

  return (
    <TabsContext.Provider value={contextValue}>
      <div data-orientation={orientation} {...rest} ref={ref}>
        {/* eslint-disable-next-line @typescript-eslint/promise-function-async */}
        {React.Children.map(children, (child, tabPanelIndex) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child as React.ReactElement<TabPanelProps>, {
              // index: child.props.index ?? tabPanelIndex - 1, // TabList 가 첫번째 자식 컴포넌트
              index: tabPanelIndex - 1, // TabList 가 첫번째 자식 컴포넌트
            });
          }
          return child;
        })}
      </div>
    </TabsContext.Provider>
  );
});

Tabs.displayName = 'Tabs';

export default Tabs;
