import React from 'react';

import { useControlled } from '@melio-ui/use-controlled';

import { getNewValue, valueToPercent } from '../helpers/get-new-value';
import { SliderProps } from '../slider';

interface UseSliderParams
  extends Required<Pick<SliderProps, 'min' | 'max' | 'step' | 'orientation'>>,
    Pick<SliderProps, 'name' | 'value' | 'defaultValue' | 'onValueChange'> {
  sliderRef: React.RefObject<HTMLDivElement>;
  railRef: React.RefObject<HTMLDivElement>;
  // pointer: { x: number; y: number };
}

export default function useSlider({
  sliderRef,
  railRef,
  //   pointer,
  name,
  value: valueProp,
  defaultValue,
  min,
  max,
  step,
  orientation,
  onValueChange,
}: UseSliderParams): {
  value: number | number[] | undefined;
  percentValue: number | number[];
  onMouseDown: (event: React.MouseEvent) => void;
  isMouseDown: boolean;
  activeIndex: number;
} {
  const [value, setValue] = useControlled<number | number[] | undefined>(
    valueProp,
    defaultValue ?? min,
  );

  // range, values 는 Range Slider 일 경우에 사용
  // value 가 배열이면 Range Slider 임.
  const range = Array.isArray(value);
  const values = React.useMemo(() => {
    return Array.isArray(value) ? value.slice() : [];
  }, [value]);

  const [isMouseDown, setMouseDown] = React.useState<boolean>(false);
  const [activeIndex, setActiveIndex] = React.useState<number>(0);

  const percentValue = React.useMemo(() => {
    return Array.isArray(value)
      ? value.map((val) => valueToPercent(val ?? 0, min, max))
      : valueToPercent(value ?? 0, min, max);
  }, [max, min, value]);

  const changeValue = React.useCallback(
    (event: React.MouseEvent | MouseEvent) => {
      const pointer = { x: event.clientX, y: event.clientY };
      const { current: rail } = railRef;

      const { newValue, activeIndex: newActiveIndex } = getNewValue({
        rail,
        pointer,
        rangeInfo: { range, values },
        min,
        max,
        step,
        orientation,
      });

      setValue(newValue);
      setActiveIndex(newActiveIndex);
      onValueChange?.(newValue, newActiveIndex);
    },
    [max, min, onValueChange, orientation, railRef, range, setValue, step, values],
  );

  const handleMouseMove = React.useCallback(
    (event: MouseEvent) => {
      // console.log('handleMouseMove');
      changeValue(event);
    },
    [changeValue],
  );

  const handleMouseUp = React.useCallback(() => {
    // console.log('handleMouseUp');
    setMouseDown(false);
  }, []);

  const onMouseDown = React.useCallback(
    (event: React.MouseEvent) => {
      setMouseDown(true);
      changeValue(event);
    },
    [changeValue],
  );

  // 1. 이벤트 리스너에 add, remove 하는 함수가 동일한 함수를 가리키는지 체크(hooks 의존성으로 인해 새로 만들어지기 때문)
  // 2. 이벤트 리스너 관련 함수들의 의존성을 최소화 하는 방식으로 개발하자.([] 이면 베스트)
  React.useEffect(() => {
    const doc = sliderRef.current?.ownerDocument ?? document;
    if (isMouseDown) {
      doc.addEventListener('mousemove', handleMouseMove);
      doc.addEventListener('mouseup', handleMouseUp);
    } else {
      doc.removeEventListener('mousemove', handleMouseMove);
      doc.removeEventListener('mouseup', handleMouseUp);
    }

    return () => {
      doc.removeEventListener('mousemove', handleMouseMove);
      doc.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp, isMouseDown, sliderRef]);

  return { value, percentValue, onMouseDown, isMouseDown, activeIndex };
}
