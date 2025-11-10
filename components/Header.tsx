'use client';

import {useState, type MouseEvent} from 'react';
import {useTranslations} from 'next-intl';
import Container from './Container';
import LanguageSwitcher from './LanguageSwitcher';
import Logo from './Logo';

const NAV_KEYS: Array<{key: string}> = [
  {key: 'whatWeDo'},
  {key: 'ourFirm'},
  {key: 'career'}
];

export default function Header() {
  const t = useTranslations();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const preventNavigation = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <Container className="flex items-center justify-between gap-4 py-4">
        <div className="flex items-center gap-6">
          <Logo />
          <nav className="hidden md:block" aria-label={t('nav.ariaLabel')}>
            <ul className="flex items-center gap-6 text-sm font-medium text-body">
              {NAV_KEYS.map(({key}) => (
                <li key={key}>
                  <a
                    href="#"
                    onClick={preventNavigation}
                    className="border-b border-transparent pb-1 transition-colors duration-150 hover:border-current hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                    aria-disabled="true"
                  >
                    {t(`nav.${key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="hidden items-center gap-4 md:flex">
          <a
            href="#"
            onClick={preventNavigation}
            className="rounded-full border border-brand px-4 py-2 text-sm font-semibold text-brand transition-colors duration-150 hover:bg-brand hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            aria-disabled="true"
          >
            {t('nav.login')}
          </a>
          <LanguageSwitcher />
        </div>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-gray-200 p-2 text-sm text-body transition-colors duration-150 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand md:hidden"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          aria-label={t('nav.menu')}
        >
          <span className="sr-only">{t('nav.menu')}</span>
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </Container>
      <div
        id="primary-navigation"
        className={`md:hidden ${isOpen ? 'block' : 'hidden'} border-t border-gray-200 bg-white`}
      >
        <Container className="flex flex-col gap-4 py-4">
          <nav aria-label={t('nav.ariaLabel')}>
            <ul className="flex flex-col gap-3 text-sm font-medium text-body">
              {NAV_KEYS.map(({key}) => (
                <li key={key}>
                  <a
                    href="#"
                    onClick={preventNavigation}
                    className="block w-full rounded-full border border-gray-200 px-4 py-2 text-left transition-colors duration-150 hover:border-brand hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                    aria-disabled="true"
                  >
                    {t(`nav.${key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a
            href="#"
            onClick={preventNavigation}
            className="block w-full rounded-full border border-brand px-4 py-2 text-center text-sm font-semibold text-brand transition-colors duration-150 hover:bg-brand hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            aria-disabled="true"
          >
            {t('nav.login')}
          </a>
          <LanguageSwitcher />
        </Container>
      </div>
    </header>
  );
}
