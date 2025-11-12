'use client';

import {useCallback, useEffect, useRef, useState, useTransition} from 'react';
import {useLocale, useTranslations} from 'next-intl';
import {usePathname, useRouter} from '@/i18n/routing';
import {locales} from '@/i18n/config';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const t = useTranslations('language');
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  const closeMenu = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, closeMenu]);

  const handleLocaleChange = (nextLocale: string) => {
    startTransition(() => {
      document.cookie = `NEXT_LOCALE=${nextLocale}; Path=/; Max-Age=31536000; SameSite=Lax`;
      router.replace(pathname, {locale: nextLocale});
      closeMenu();
    });
  };

  return (
    <div ref={popoverRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={t('ariaLabel')}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        className="inline-flex h-10 w-10 items-center justify-center text-body transition-colors duration-150 hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
      >
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 3.5 2.5 14.5 0 18M7.5 5.5c1.5 2 1.5 11 0 13M16.5 5.5c-1.5 2-1.5 11 0 13" />
        </svg>
      </button>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="false"
          className="absolute right-0 z-50 mt-3 w-48 max-w-[90vw] rounded-2xl border border-gray-200 bg-white p-3 shadow-subtle ring-1 ring-black/5 sm:max-w-none"
        >
          <p className="mb-2 text-xs font-semibold uppercase text-muted tracking-wide">
            {t('ariaLabel')}
          </p>
          <ul className="flex flex-col gap-1 text-sm">
            {locales.map((code) => (
              <li key={code}>
                <button
                  type="button"
                  onClick={() => handleLocaleChange(code)}
                  className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                    locale === code
                      ? 'bg-brand text-white'
                      : 'text-body hover:bg-gray-100'
                  }`}
                  aria-current={locale === code ? 'true' : undefined}
                  disabled={isPending && locale === code}
                >
                  <span>{t(`options.${code}`)}</span>
                  {locale === code && (
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 10l3 3 7-7" />
                    </svg>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
