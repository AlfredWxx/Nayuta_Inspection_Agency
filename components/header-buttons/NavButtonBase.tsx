'use client';

import clsx from 'clsx';
import type {ReactNode} from 'react';
import {useLocale, useTranslations} from 'next-intl';
import type {AppLocale} from '@/i18n/config';
import {Link} from '@/i18n/routing';

export type HeaderNavButtonProps = {
  href: string;
  className?: string;
  children?: ReactNode;
};

type NavButtonBaseProps = HeaderNavButtonProps & {
  translationKey: string;
};

export default function NavButtonBase({
  translationKey,
  href,
  className,
  children
}: NavButtonBaseProps) {
  const t = useTranslations('nav');
  const locale = useLocale();

  return (
    <Link
      href={href}
      locale={locale as AppLocale}
      className={clsx(className)}
    >
      {children ?? t(translationKey)}
    </Link>
  );
}
