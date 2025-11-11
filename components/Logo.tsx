'use client';

import Image from 'next/image';
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
      aria-label={`${t('companyName')} home`}
      className="inline-flex items-center transition-colors duration-150 hover:text-brand"
    >
      <Image
        src="/assets/Logo1.svg"
        alt={t('companyName')}
        width={140}
        height={1}
        priority
        className="h-20 w-auto"
      />
      <span className="sr-only">{t('companyName')}</span>
    </Link>
  );
}
