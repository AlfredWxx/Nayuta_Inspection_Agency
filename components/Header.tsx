'use client';

import clsx from 'clsx';
import {useMemo, useState, type MouseEvent} from 'react';
import {useTranslations} from 'next-intl';
import Container from './Container';
import LanguageSwitcher from './LanguageSwitcher';
import Logo from './Logo';
import WhatWeDoButton from './header-buttons/WhatWeDoButton';
import OurFirmButton from './header-buttons/OurFirmButton';
import CareerButton from './header-buttons/CareerButton';
import LoginButton from './header-buttons/LoginButton';
import MenuToggleButton from './header-buttons/MenuToggleButton';

type DropdownItem = {
  titleKey: string;
  descriptionKey: string;
};

const NAV_ITEMS = [
  {
    id: 'whatWeDo',
    Component: WhatWeDoButton,
    items: [
      {
        titleKey: 'nav.dropdown.whatWeDo.factoryAudits.title',
        descriptionKey: 'nav.dropdown.whatWeDo.factoryAudits.description'
      },
      {
        titleKey: 'nav.dropdown.whatWeDo.inlineInspection.title',
        descriptionKey: 'nav.dropdown.whatWeDo.inlineInspection.description'
      },
      {
        titleKey: 'nav.dropdown.whatWeDo.preShipment.title',
        descriptionKey: 'nav.dropdown.whatWeDo.preShipment.description'
      }
    ]
  },
  {
    id: 'ourFirm',
    Component: OurFirmButton,
    items: [
      {
        titleKey: 'nav.dropdown.ourFirm.leadership.title',
        descriptionKey: 'nav.dropdown.ourFirm.leadership.description'
      },
      {
        titleKey: 'nav.dropdown.ourFirm.presence.title',
        descriptionKey: 'nav.dropdown.ourFirm.presence.description'
      },
      {
        titleKey: 'nav.dropdown.ourFirm.certifications.title',
        descriptionKey: 'nav.dropdown.ourFirm.certifications.description'
      }
    ]
  },
  {
    id: 'career',
    Component: CareerButton,
    items: [
      {
        titleKey: 'nav.dropdown.career.inspectors.title',
        descriptionKey: 'nav.dropdown.career.inspectors.description'
      },
      {
        titleKey: 'nav.dropdown.career.specialists.title',
        descriptionKey: 'nav.dropdown.career.specialists.description'
      },
      {
        titleKey: 'nav.dropdown.career.openRoles.title',
        descriptionKey: 'nav.dropdown.career.openRoles.description'
      }
    ]
  }
] as const;

export default function Header() {
  const t = useTranslations();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeDropdown = () => setActiveDropdown(null);
  const preventNavigation = (event: MouseEvent<HTMLAnchorElement>) =>
    event.preventDefault();

  const renderNavButton = (
    Component: (props: {className?: string}) => JSX.Element,
    variant: 'desktop' | 'mobile',
    isActive = false
  ) => {
    const baseClass =
      variant === 'desktop'
        ? 'border-b border-transparent pb-1 transition-colors duration-150 hover:border-current hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand'
        : 'block w-full rounded-full border border-gray-200 px-4 py-2 text-left transition-colors duration-150 hover:border-brand hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand';

    return (
      <Component
        className={clsx(baseClass, isActive && 'border-current text-brand')}
      />
    );
  };

  const activeDropdownConfig = useMemo(
    () => NAV_ITEMS.find((item) => item.id === activeDropdown),
    [activeDropdown]
  );

  return (
    <header
      className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 font-heading backdrop-blur"
      onMouseLeave={closeDropdown}
    >
      <Container className="flex items-center justify-between gap-4 py-2">
        <div className="flex w-full items-center gap-6">
          <div onMouseEnter={closeDropdown}>
              <div className="pt-1">
                <Logo />
              </div>
          </div>
          <nav
            className="ml-auto hidden flex-1 justify-end md:flex"
            aria-label={t('nav.ariaLabel')}
          >
            <ul className="flex items-center gap-6 text-sm font-medium text-body">
              {NAV_ITEMS.map(({id, Component}) => (
                <li key={id} onMouseEnter={() => setActiveDropdown(id)}>
                  {renderNavButton(Component, 'desktop', activeDropdown === id)}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="hidden items-center gap-4 md:flex" onMouseEnter={closeDropdown}>
          <LoginButton className="border border-brand px-4 py-2 text-sm font-semibold text-brand transition-colors duration-150 hover:bg-brand hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand" />
          <LanguageSwitcher />
        </div>
        <MenuToggleButton
          isOpen={isOpen}
          onClick={() => {
            closeDropdown();
            toggleMenu();
          }}
          className="inline-flex items-center justify-center rounded-full border border-gray-200 p-2 text-sm text-body transition-colors duration-150 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand md:hidden"
        />
      </Container>
      {activeDropdownConfig && (
        <div className="hidden md:block">
          <div className="absolute left-0 right-0 top-full z-40 h-[30vh] bg-gray-300">
            <Container className="flex h-full flex-col justify-center py-8">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">
                {t(`nav.dropdown.${activeDropdownConfig.id}.title`)}
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {activeDropdownConfig.items.map(
                  ({titleKey, descriptionKey}) => (
                    <a
                      key={titleKey}
                      href="#"
                      onClick={preventNavigation}
                      className="block h-full border border-white/40 bg-transparent p-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                      aria-disabled="true"
                    >
                      <p className="text-base font-semibold text-body">
                        {t(titleKey)}
                      </p>
                      <p className="mt-2 text-sm text-muted">
                        {t(descriptionKey)}
                      </p>
                    </a>
                  )
                )}
              </div>
            </Container>
          </div>
        </div>
      )}
      <div
        id="primary-navigation"
        className={`md:hidden ${isOpen ? 'block' : 'hidden'} border-t border-gray-200 bg-white`}
      >
        <Container className="flex flex-col gap-4 py-4">
          <nav aria-label={t('nav.ariaLabel')}>
            <ul className="flex flex-col gap-3 text-sm font-medium text-body">
              {NAV_ITEMS.map(({id, Component}) => (
                <li key={id}>{renderNavButton(Component, 'mobile')}</li>
              ))}
            </ul>
          </nav>
          <LoginButton className="block w-full border border-brand px-4 py-2 text-center text-sm font-semibold text-brand transition-colors duration-150 hover:bg-brand hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand" />
          <LanguageSwitcher />
        </Container>
      </div>
    </header>
  );
}
