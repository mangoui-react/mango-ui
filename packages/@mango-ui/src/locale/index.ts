import defaultLocale from './ko_KR';

export { default as koKR } from './ko_KR';
export { default as enUS } from './en_US';

export type Locale = Partial<typeof defaultLocale>;
// export type CommonLocale = Partial<typeof defaultLocale.common>;
export type CalendarLocale = Partial<typeof defaultLocale.Calendar>;
