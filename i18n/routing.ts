import {createLocalizedPathnamesNavigation} from 'next-intl/navigation';
import {defaultLocale, locales, localePrefix} from './config';

export const {Link, redirect, usePathname, useRouter} =
  createLocalizedPathnamesNavigation({
    locales,
    localePrefix,
    defaultLocale,
    pathnames: {
      '/': '/'
    }
  });
