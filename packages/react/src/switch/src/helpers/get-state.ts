type GetStateResult = 'checked' | 'unchecked';

export function getState(checked?: boolean): GetStateResult {
  return checked ? 'checked' : 'unchecked';
}
