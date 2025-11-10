'use client';

import {useTranslations} from 'next-intl';
import Container from './Container';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="bg-white py-16 sm:py-24">
      <Container className="grid gap-10 md:grid-cols-[3fr_2fr] md:items-center">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-brand">
            {t('kicker')}
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-body sm:text-5xl">
            {t('title')}
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-muted">
            {t('subtitle')}
          </p>
          <p className="max-w-xl text-base leading-relaxed text-muted">
            {t('description')}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-subtle transition-transform duration-150 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              disabled
              aria-disabled="true"
            >
              {t('cta.primary')}
            </button>
            <button
              type="button"
              className="rounded-full border border-brand px-6 py-3 text-sm font-semibold text-brand transition-transform duration-150 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              disabled
              aria-disabled="true"
            >
              {t('cta.secondary')}
            </button>
          </div>
        </div>
        <div className="rounded-3xl border border-gray-200 bg-slate-50 p-8 shadow-subtle">
          <ul className="space-y-4 text-sm text-muted">
            <FeatureItem text={t('bullets.quality')} />
            <FeatureItem text={t('bullets.speed')} />
            <FeatureItem text={t('bullets.coverage')} />
            <FeatureItem text={t('bullets.compliance')} />
          </ul>
        </div>
      </Container>
    </section>
  );
}

type FeatureItemProps = {
  text: string;
};

function FeatureItem({text}: FeatureItemProps) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand/10 text-brand">
        ✓
      </span>
      <span className="leading-relaxed">{text}</span>
    </li>
  );
}
