import React from 'react';

import { SliderContext } from '../Slider';

interface UseThumbParams {
  thumbRef: React.RefObject<HTMLDivElement>;
}

interface UseThumbResult {
  thumbValue: number;
  thumbPercentValue: number;
  thumbIsMouseDown: boolean;
  displayStyle: 'none' | undefined;
}

export default function useThumb({ thumbRef }: UseThumbParams): UseThumbResult {
  const { value, percentValue, isMouseDown, activeIndex, thumbMap } =
    React.useContext(SliderContext);

  const [thumbIndex, setThumbIndex] = React.useState<number>();

  const thumbMaps = React.useMemo(() => {
    thumbMap.set(thumbRef, { ref: thumbRef });
    // return Array.from(thumbMap, (entry) => ({
    //   key: entry[0],
    //   value: entry[1],
    // }));
    return Array.from(thumbMap, (entry) => entry[1]);
  }, [thumbMap, thumbRef]);

  React.useEffect(() => {
    const index = thumbRef
      ? thumbMaps.findIndex((item) => item.ref.current === thumbRef.current)
      : -1;
    setThumbIndex(index);
  }, [thumbMaps, thumbRef]);

  const thumbValue = React.useMemo(() => {
    if (Array.isArray(value)) {
      return thumbIndex === undefined || value === undefined ? 0 : value[thumbIndex];
    }
    return value ?? 0;
  }, [thumbIndex, value]);

  const thumbPercentValue = React.useMemo(() => {
    if (Array.isArray(percentValue)) {
      return thumbIndex === undefined || percentValue === undefined ? 0 : percentValue[thumbIndex];
    }
    return percentValue;
  }, [percentValue, thumbIndex]);

  const thumbIsMouseDown = React.useMemo(() => {
    return Array.isArray(value) ? isMouseDown && activeIndex === thumbIndex : isMouseDown;
  }, [activeIndex, isMouseDown, thumbIndex, value]);

  // range 일 경우 thumb index 를 알아낸 후 값을 할당하므로 값을 할당하기 전까지는 display: none 셋팅
  const displayStyle = Array.isArray(value) && thumbIndex === undefined ? 'none' : undefined;

  return { thumbValue, thumbPercentValue, thumbIsMouseDown, displayStyle };
}
