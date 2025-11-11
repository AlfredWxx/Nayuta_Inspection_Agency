'use client';

import clsx from 'clsx';
import {useState} from 'react';
import {useTranslations} from 'next-intl';
import Container from './Container';
import LanguageSwitcher from './LanguageSwitcher';
import Logo from './Logo';
import WhatWeDoButton from './header-buttons/WhatWeDoButton';
import OurFirmButton from './header-buttons/OurFirmButton';
import CareerButton from './header-buttons/CareerButton';
import LoginButton from './header-buttons/LoginButton';
import MenuToggleButton from './header-buttons/MenuToggleButton';

const NAV_BUTTONS = [
  {id: 'whatWeDo', Component: WhatWeDoButton},
  {id: 'ourFirm', Component: OurFirmButton},
  {id: 'career', Component: CareerButton}
];

export default function Header() {
  const t = useTranslations();
  const [isOpen, setIsOpen] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const hideTooltip = () => setActiveTooltip(null);

  const renderNavButton = (
    id: string,
    Component: (props: {className?: string}) => JSX.Element,
    variant: 'desktop' | 'mobile'
  ) => {
    const baseClass =
      variant === 'desktop'
        ? 'border-b border-transparent pb-1 transition-colors duration-150 hover:border-current hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand'
        : 'block w-full rounded-full border border-gray-200 px-4 py-2 text-left transition-colors duration-150 hover:border-brand hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand';

    return <Component className={baseClass} />;
  };

  return (
    <header
      className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 font-heading backdrop-blur"
      onMouseLeave={hideTooltip}
    >
      <div className="relative">
        <Container className="flex items-center justify-between gap-4 py-4">
          <div className="flex w-full items-center gap-6">
            <Logo />
            <nav
              className="ml-auto hidden flex-1 justify-end md:flex"
              aria-label={t('nav.ariaLabel')}
            >
              <ul className="flex items-center gap-6 text-sm font-medium text-body">
                {NAV_BUTTONS.map(({id, Component}) => (
                  <li
                    key={id}
                    onMouseEnter={() => {
                      if (id === 'whatWeDo') {
                        setActiveTooltip(id);
                      } else {
                        hideTooltip();
                      }
                    }}
                  >
                    {renderNavButton(id, Component, 'desktop')}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="hidden items-center gap-4 md:flex">
            <LoginButton className="rounded-full border border-brand px-4 py-2 text-sm font-semibold text-brand transition-colors duration-150 hover:bg-brand hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand" />
            <LanguageSwitcher />
          </div>
          <MenuToggleButton
            isOpen={isOpen}
            onClick={toggleMenu}
            className="inline-flex items-center justify-center rounded-full border border-gray-200 p-2 text-sm text-body transition-colors duration-150 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand md:hidden"
          />
        </Container>
        <div
          className={clsx(
            'pointer-events-none absolute left-0 right-0 top-full hidden bg-gray-300 shadow-subtle transition-opacity duration-200 ease-out md:block',
            activeTooltip === 'whatWeDo'
              ? 'pointer-events-auto opacity-100'
              : 'opacity-0'
          )}
          onMouseEnter={() => setActiveTooltip('whatWeDo')}
        >
          <Container className="border-t border-gray-200 py-12">
            <div className="h-24" />
          </Container>
        </div>
      </div>
      <div
        id="primary-navigation"
        className={`md:hidden ${isOpen ? 'block' : 'hidden'} border-t border-gray-200 bg-white`}
      >
        <Container className="flex flex-col gap-4 py-4">
          <nav aria-label={t('nav.ariaLabel')}>
            <ul className="flex flex-col gap-3 text-sm font-medium text-body">
              {NAV_BUTTONS.map(({id, Component}) => (
                <li key={id}>{renderNavButton(id, Component, 'mobile')}</li>
              ))}
            </ul>
          </nav>
          <LoginButton className="block w-full rounded-full border border-brand px-4 py-2 text-center text-sm font-semibold text-brand transition-colors duration-150 hover:bg-brand hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand" />
          <LanguageSwitcher />
        </Container>
      </div>
    </header>
  );
}
