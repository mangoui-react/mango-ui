// 참고소스: https://github.com/lodash/lodash/blob/main/src/debounce.ts

interface ReturnType {
  (...args: any[]): any;
  cancel: () => void;
  flush: () => any;
  pending: () => boolean;
}

export function debounce(
  func: { apply: (arg0: undefined, arg1: any[] | undefined) => any },
  wait: number,
): ReturnType {
  let lastArgs: any[] | undefined;
  let lastThis: any;
  let maxWait: number;
  let result: any;
  let timerId: number | undefined;
  let lastCallTime: number | undefined;
  let lastInvokeTime = 0;

  if (typeof func !== 'function') {
    throw new TypeError('Expected a function');
  }
  wait = +wait || 0;

  function invokeFunc(time: number): any {
    const args = lastArgs;
    const thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function startTimer(pendingFunc: TimerHandler, milliseconds: number | undefined): number {
    // eslint-disable-next-line @typescript-eslint/no-implied-eval
    return setTimeout(pendingFunc, milliseconds);
  }

  function cancelTimer(id: number | undefined): void {
    clearTimeout(id);
  }

  function leadingEdge(time: number): any {
    lastInvokeTime = time;

    timerId = startTimer(timerExpired, wait);
    return result;
  }

  function remainingWait(time: number): number {
    const timeSinceLastCall = time - (lastCallTime ?? 0);
    const timeWaiting = wait - timeSinceLastCall;

    return timeWaiting;
  }

  function shouldInvoke(time: number): any {
    const timeSinceLastCall = time - (lastCallTime ?? 0);
    const timeSinceLastInvoke = time - lastInvokeTime;

    return (
      lastCallTime === undefined ||
      timeSinceLastCall >= wait ||
      timeSinceLastCall < 0 ||
      timeSinceLastInvoke >= maxWait
    );
  }

  function timerExpired(): any {
    const time = Date.now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }

    timerId = startTimer(timerExpired, remainingWait(time));
    return undefined;
  }

  function trailingEdge(time: number): any {
    timerId = undefined;

    if (lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel(): void {
    if (timerId !== undefined) {
      cancelTimer(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush(): any {
    return timerId === undefined ? result : trailingEdge(Date.now());
  }

  function pending(): boolean {
    return timerId !== undefined;
  }

  function debounced(this: any, ...args: any[]): any {
    const time = Date.now();
    const isInvoking = shouldInvoke(time);

    lastArgs = args;
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = startTimer(timerExpired, wait);
    }
    return result;
  }

  debounced.cancel = cancel;
  debounced.flush = flush;
  debounced.pending = pending;

  return debounced;
}
