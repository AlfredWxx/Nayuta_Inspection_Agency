'use client';

import {useLocale, useTranslations} from 'next-intl';
import type {AppLocale} from '@/i18n/config';
import {Link} from '@/i18n/routing';

export default function Logo() {
  const locale = useLocale();
  const t = useTranslations('common');

  return (
    <Link
      href="/"
      locale={locale as AppLocale}
      aria-label="Inspection Service home"
      className="flex items-center gap-2 text-lg font-semibold tracking-tight text-body transition-colors duration-150 hover:text-brand"
    >
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-brand text-base font-bold text-brand">
        {t('logoInitials')}
      </span>
      <span>{t('companyName')}</span>
    </Link>
  );
}
