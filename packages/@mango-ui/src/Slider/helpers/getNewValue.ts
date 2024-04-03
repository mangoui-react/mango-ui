import { SliderProps } from '../Slider';

// 아래 함수들은 값과 위치에 대한 계산으로 내부적으로만 사용
function percentToValue(percent: number, min: number, max: number): number {
  return (max - min) * percent + min;
}

function getDecimalPrecision(num: number): number {
  if (Math.abs(num) < 1) {
    const parts = num.toExponential().split('e-');
    const matissaDecimalPart = parts[0].split('.')[1];
    return (matissaDecimalPart ? matissaDecimalPart.length : 0) + parseInt(parts[1], 10);
  }

  const decimalPart = num.toString().split('.')[1];
  return decimalPart ? decimalPart.length : 0;
}
function roundValueToStep(value: number, step: number, min: number): number {
  const nearest = Math.round((value - min) / step) * step + min;
  return Number(nearest.toFixed(getDecimalPrecision(step)));
}

function clamp(value: number, min: number, max: number): number {
  if (value == null) {
    return min;
  }
  return Math.min(Math.max(min, value), max);
}

function setValueIndex(values: number[], newValue: number, index: number): number[] {
  if (values[index] === newValue) {
    return values;
  }

  const output = values.slice();
  output[index] = newValue;
  return output;
}

function asc(a: number, b: number): number {
  return a - b;
}

interface rangeInfoType {
  range: boolean;
  values: number[];
}
interface getNewValueParams
  extends Required<Pick<SliderProps, 'min' | 'max' | 'step' | 'orientation'>> {
  rail: HTMLDivElement | null;
  pointer: { x: number; y: number };
  rangeInfo: rangeInfoType;
}

type FindClosestType = {
  distance: number;
  index: number;
} | null;

function findClosest(values: number[], currentValue: number): number {
  const result = values.reduce((acc: FindClosestType, value: number, index: number) => {
    const distance = Math.abs(currentValue - value);

    if (acc === null || distance < acc.distance || distance === acc.distance) {
      return {
        distance,
        index,
      };
    }

    return acc;
  }, null);

  const { index: closestIndex } = result ?? { index: 0 };
  return closestIndex;
}

export function getNewValue({
  rail,
  pointer,
  rangeInfo,
  min,
  max,
  step,
  orientation,
}: getNewValueParams): { newValue: number | number[]; activeIndex: number } {
  if (!rail) return { newValue: 0, activeIndex: 0 };

  const { width, height, bottom, left } = rail.getBoundingClientRect();

  const percent =
    orientation === 'horizontal' ? (pointer.x - left) / width : (bottom - pointer.y) / height;
  // console.log('percent: ', percent);

  let newValue: number | number[] = percentToValue(percent, min, max);
  const _step = step < 1 ? 1 : step;

  newValue = roundValueToStep(newValue, _step, min);
  newValue = clamp(newValue, min, max);

  let activeIndex = 0;

  // range 처리
  const { range, values } = rangeInfo;
  if (range) {
    const _values = values.sort(asc);
    activeIndex = findClosest(_values, newValue);

    // const previousValue = newValue;
    newValue = setValueIndex(_values, newValue, activeIndex).sort(asc);
    // console.log('activeIndex', activeIndex);
  }

  return { newValue, activeIndex };
}

export function valueToPercent(value: number, min: number, max: number): number {
  return ((value - min) * 100) / (max - min);
}
