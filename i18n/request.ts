import {getRequestConfig} from 'next-intl/server';
import {defaultLocale, localePrefix, locales} from './config';

export default getRequestConfig(async ({locale}) => {
  const activeLocale = locale ?? defaultLocale;

  return {
    locale: activeLocale,
    locales,
    defaultLocale,
    localePrefix,
    messages: (await import(`../messages/${activeLocale}.json`)).default
  };
});
