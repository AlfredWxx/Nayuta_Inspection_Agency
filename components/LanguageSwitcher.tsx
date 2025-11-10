'use client';

import {useTransition} from 'react';
import {useLocale, useTranslations} from 'next-intl';
import {usePathname, useRouter} from '@/i18n/routing';
import {locales} from '@/i18n/config';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const t = useTranslations('language');
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleLocaleChange = (nextLocale: string) => {
    startTransition(() => {
      document.cookie = `NEXT_LOCALE=${nextLocale}; Path=/; Max-Age=31536000; SameSite=Lax`;
      router.replace(pathname, {locale: nextLocale});
    });
  };

  return (
    <div
      aria-label={t('ariaLabel')}
      role="group"
      className="inline-flex gap-1 rounded-full border border-gray-200 bg-white p-1 shadow-subtle"
    >
      {locales.map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => handleLocaleChange(code)}
          className={`rounded-full px-3 py-1 text-sm font-medium transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
            locale === code
              ? 'bg-brand text-white'
              : 'text-body hover:bg-gray-100'
          }`}
          aria-current={locale === code ? 'true' : undefined}
          disabled={isPending && locale === code}
        >
          {t(`options.${code}`)}
        </button>
      ))}
    </div>
  );
}
