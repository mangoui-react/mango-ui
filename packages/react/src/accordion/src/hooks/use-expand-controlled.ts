import { useControlled } from '@melio-ui/use-controlled';

export default function useExpandControlled<T>(
  valueProp: T,
  defaultValue: T,
  multiple?: boolean,
): [T, (value: T) => void] {
  const _valueProp = (multiple && !Array.isArray(valueProp) ? undefined : valueProp) as T;

  const [expandedValue, setExpandedValue] = useControlled<T>(_valueProp, defaultValue);

  return [expandedValue, setExpandedValue];
}
