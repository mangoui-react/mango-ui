type ProgressState = 'indeterminate' | 'complete' | 'loading';

export function getProgressState(
  value?: number,
  maxValue?: number,
  indeterminate?: boolean,
): ProgressState {
  if (indeterminate === true) return 'indeterminate';
  return value === maxValue ? 'complete' : 'loading';
}
