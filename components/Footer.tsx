'use client';

import type {MouseEvent} from 'react';
import {useTranslations} from 'next-intl';
import Container from './Container';
import SocialLinks from './SocialLinks';

export default function Footer() {
  const t = useTranslations('footer');
  const year = new Date().getFullYear();
  const handlePlaceholder = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
  };

  return (
    <footer className="border-t border-gray-200 bg-white py-10 text-sm text-muted">
      <Container className="grid gap-8 md:grid-cols-3">
        <div className="space-y-4">
          <p className="text-base font-semibold text-body">
            {t('companyName')}
          </p>
          <p className="leading-relaxed text-muted">{t('description')}</p>
          <p className="text-xs text-muted">
            © {year} {t('rights')}
          </p>
        </div>
        <div className="space-y-3">
          <p className="text-base font-semibold text-body">{t('linksTitle')}</p>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                onClick={handlePlaceholder}
                className="transition-colors duration-150 hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                aria-disabled="true"
              >
                {t('privacy')}
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={handlePlaceholder}
                className="transition-colors duration-150 hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                aria-disabled="true"
              >
                {t('terms')}
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={handlePlaceholder}
                className="transition-colors duration-150 hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                aria-disabled="true"
              >
                {t('contact')}
              </a>
            </li>
          </ul>
          <address
            itemProp="address"
            itemScope
            itemType="https://schema.org/PostalAddress"
            className="not-italic leading-relaxed text-muted"
          >
            <span itemProp="addressLocality">{t('address.locality')}</span>,{' '}
            <span itemProp="addressRegion">{t('address.region')}</span>,{' '}
            <span itemProp="addressCountry">{t('address.country')}</span>
          </address>
        </div>
        <div className="space-y-3">
          <p className="text-base font-semibold text-body">
            {t('socialTitle')}
          </p>
          <SocialLinks />
        </div>
      </Container>
    </footer>
  );
}
