// 참고: https://github.com/chakra-ui/zag/blob/main/packages/utilities/dom-query/src/platform.ts
export const isDom = (): boolean => typeof document !== 'undefined';

export function getPlatform(): any {
  const agent = (navigator as any).userAgentData;
  return agent?.platform ?? navigator.platform;
}

const pt = (v: RegExp): boolean => isDom() && v.test(getPlatform());
const ua = (v: RegExp): boolean => isDom() && v.test(navigator.userAgent);
const vn = (v: RegExp): boolean => isDom() && v.test(navigator.vendor);

export const isTouchDevice = (): boolean => isDom() && !!navigator.maxTouchPoints;
export const isMac = (): boolean => pt(/^Mac/);
export const isSafari = (): boolean => isApple() && vn(/apple/i);
export const isFirefox = (): boolean => ua(/firefox\//i);
export const isApple = (): boolean => pt(/mac|iphone|ipad|ipod/i);
export const isIos = (): boolean => pt(/iP(hone|ad|od)|iOS/);
export const isWebKit = (): boolean => ua(/AppleWebKit/);

export const isModKey = (event: Pick<KeyboardEvent, 'metaKey' | 'ctrlKey'>): boolean =>
  isApple() ? event.metaKey : event.ctrlKey;
