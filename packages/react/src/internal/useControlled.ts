import { useCallback, useEffect, useRef, useState } from 'react';

export default function useControlled<T>(
  controlledValue: T,
  defaultValue: T,
): [T, (value: T) => void] {
  const { current: isControlled } = useRef(controlledValue !== undefined);

  const [uncontrolledValue, setUncontrolledValue] = useState<T>(defaultValue);

  // const value = isControlled ? controlledValue : uncontrolledValue;
  // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
  const value = controlledValue !== undefined ? controlledValue : uncontrolledValue;

  const setValue = useCallback(
    (newValue: T) => {
      if (!isControlled) {
        setUncontrolledValue(newValue);
      }
    },
    [isControlled],
  );

  useEffect(() => {
    // value 값을 undefined 으로 init 하고 controlled 하려고 하면 error 메시지 출력
    if (!isControlled && controlledValue !== undefined) {
      console.error(
        '제어되지 않는 입력을 제어하도록 변경하려고 합니다. More info: https://reactjs.org/link/controlled-components',
      );
    }
  }, [controlledValue, isControlled]);

  return [value, setValue];
}
