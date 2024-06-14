import React from 'react';

import { useMergedRef } from '../hooks';
import { ComponentPropsWithoutRef, FormElementBaseProps, TypeAttributes } from '../types/common';

// import Thumb from './components/Thumb';
import useSlider from './hooks/useSlider';

export interface SliderProps
  extends FormElementBaseProps<number | number[]>,
    Omit<ComponentPropsWithoutRef<'div'>, 'defaultValue'> {
  // value?: number | number[];
  // defaultValue?: number | number[];
  /** 최소값 */
  min?: number;
  /** 최대값 */
  max?: number;
  /** 증가/감소 간격 */
  step?: number;
  // disabled?: boolean;
  /**
   * Slider 컴포넌트 방향
   * @default 'horizontal'
   */
  orientation?: TypeAttributes.Orientation;
  /** 값 변경시 호출 */
  onValueChange?: (value: number | number[], activeIndex: number) => void;
}

export interface SliderContextValue extends Pick<SliderProps, 'orientation'> {
  railRef: React.RefObject<HTMLDivElement> | null;
  value?: number | number[];
  percentValue: number | number[];
  isMouseDown: boolean;
  activeIndex: number;
  thumbMap: Map<React.RefObject<HTMLDivElement>, { ref: React.RefObject<HTMLDivElement> }>;
}
export const SliderContext = React.createContext<SliderContextValue>({
  railRef: null,
  percentValue: 0,
  isMouseDown: false,
  activeIndex: 0,
  thumbMap: new Map(),
});

/**
 * 슬라이더 컴포넌트
 *
 * @author 안형노 <elle0510@gmail.com>
 */
const Slider = React.forwardRef<HTMLDivElement, SliderProps>((props, ref) => {
  const {
    name,
    value: valueProp,
    defaultValue,
    min = 0,
    max = 100,
    step = 1,
    disabled,
    orientation = 'horizontal',
    children,
    onValueChange,
    ...rest
  } = props;

  const sliderRef = React.useRef<HTMLDivElement>(null);
  const railRef = React.useRef<HTMLDivElement>(null);
  const handleRef = useMergedRef(ref, sliderRef);
  const { current: thumbMap } = React.useRef<SliderContextValue['thumbMap']>(new Map());

  const { value, percentValue, onMouseDown, isMouseDown, activeIndex } = useSlider({
    sliderRef,
    railRef,
    name,
    value: valueProp,
    defaultValue,
    min,
    max,
    step,
    orientation,
    onValueChange,
  });

  const contextValue = React.useMemo(
    () => ({
      railRef,
      value,
      percentValue,
      orientation,
      isMouseDown,
      activeIndex,
      thumbMap,
    }),
    [activeIndex, isMouseDown, orientation, percentValue, thumbMap, value],
  );

  return (
    <SliderContext.Provider value={contextValue}>
      <div
        ref={handleRef}
        data-disabled={disabled ? '' : undefined}
        data-orientation={orientation}
        {...rest}
        onMouseDown={onMouseDown}
      >
        {children}
        <input type="hidden" name={name} value={value?.toString()} />
      </div>
    </SliderContext.Provider>
  );
});

Slider.displayName = 'Slider';

export default Slider;
