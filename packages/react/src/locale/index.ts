import defaultLocale from './ko_KR';

export { default as koKR } from './ko_KR';
export { default as enUS } from './en_US';

export type Locale = Partial<typeof defaultLocale>;
// export type CommonLocale = Partial<typeof defaultLocale.common>;
export type CalendarLocale = Partial<typeof defaultLocale.Calendar>;

// TODO: locale 은 확인 후 제거하자
