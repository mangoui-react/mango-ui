type GetStateResult = 'checked' | 'unchecked';

export default function getState(checked?: boolean): GetStateResult {
  return checked ? 'checked' : 'unchecked';
}
