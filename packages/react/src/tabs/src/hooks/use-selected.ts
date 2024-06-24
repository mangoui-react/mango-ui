interface UseSelectedParams {
  index: number;
  value?: string;
  selectedIndex: number | undefined;
  selectedValue?: string;
}

export function useSelected({
  index,
  value,
  selectedIndex,
  selectedValue,
}: UseSelectedParams): boolean {
  if (selectedValue !== undefined) {
    return value === selectedValue;
  }
  return index === selectedIndex;
}
