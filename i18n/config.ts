export const locales = ['en', 'fr', 'zh'] as const;

export type AppLocale = (typeof locales)[number];

export const defaultLocale: AppLocale = 'en';

export const localePrefix = 'always';
