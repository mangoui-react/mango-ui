type GetStateResult = 'open' | 'closed';

export default function getState(open?: boolean): GetStateResult {
  return open ? 'open' : 'closed';
}
