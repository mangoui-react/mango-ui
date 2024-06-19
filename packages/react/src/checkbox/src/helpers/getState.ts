type GetStateResult = 'checked' | 'unchecked' | 'indeterminate';

export function getState(checked: boolean, indeterminate?: boolean): GetStateResult {
  if (indeterminate === true) return 'indeterminate';
  return checked ? 'checked' : 'unchecked';
}
