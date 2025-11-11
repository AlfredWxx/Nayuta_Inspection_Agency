'use client';

import clsx from 'clsx';
import {useLocale, useTranslations} from 'next-intl';
import type {AppLocale} from '@/i18n/config';
import {Link} from '@/i18n/routing';

type LoginButtonProps = {
  href?: string;
  className?: string;
};

export default function LoginButton({
  href = '/login',
  className
}: LoginButtonProps) {
  const t = useTranslations('nav');
  const locale = useLocale();

  return (
    <Link
      href={href}
      locale={locale as AppLocale}
      className={clsx(className)}
    >
      {t('login')}
    </Link>
  );
}
