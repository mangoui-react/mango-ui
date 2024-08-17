import React from 'react';

import { useMergedRef } from '@melio-ui/use-merged-ref';

import { FormElementBaseProps, TypeAttributes } from '../../types/common';

import useSlider from './hooks/use-slider';

export interface SliderProps
  extends FormElementBaseProps<number | number[]>,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'defaultValue'> {
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

export interface SliderContextValue extends Pick<SliderProps, 'orientation' | 'disabled'> {
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
    onMouseDown: onMouseDownProp,
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

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>): void => {
    onMouseDown(event);
    onMouseDownProp?.(event);
  };

  const contextValue = React.useMemo(
    () => ({
      railRef,
      value,
      percentValue,
      orientation,
      disabled,
      isMouseDown,
      activeIndex,
      thumbMap,
    }),
    [activeIndex, disabled, isMouseDown, orientation, percentValue, thumbMap, value],
  );

  return (
    <SliderContext.Provider value={contextValue}>
      <div
        data-disabled={disabled ? '' : undefined}
        data-orientation={orientation}
        {...rest}
        ref={handleRef}
        onMouseDown={handleMouseDown}
      >
        {children}
        <input type="hidden" name={name} value={value?.toString()} />
      </div>
    </SliderContext.Provider>
  );
});

Slider.displayName = 'Slider';

export default Slider;
