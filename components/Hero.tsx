'use client';

import Image from 'next/image';
import {useTranslations} from 'next-intl';
import Container from './Container';

const PANEL_ITEMS = ['speed', 'inspectors', 'checkpoints'] as const;

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-white py-16 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(94,143,204,0.25),transparent_50%)]"
      />
      <Container className="relative grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div className="space-y-8 text-white">
          <div className="space-y-6">
            <p className="text-sm italic text-brand">
              {t('text1')}
            </p>
            <h1 className="font-heading text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              <span className="block">{t('heading1.line1')}</span>
              <span className="block">{t('heading1.line2')}</span>
            </h1>
            <p className="max-w-3xl font-sans text-lg leading-relaxed text-slate-100/85 sm:text-xl">
              {t('heading2')}
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {PANEL_ITEMS.map((itemKey) => (
              <article
                key={itemKey}
                className="border border-white/20 bg-slate-900/40 p-6 text-white shadow-[0_25px_80px_rgba(15,23,42,0.35)]"
              >
                <p className="text-3xl font-semibold">
                  {t(`panel.items.${itemKey}.metric`)}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white/60">
                  {t(`panel.items.${itemKey}.label`)}
                </p>
                <p className="mt-3 text-sm text-white/80">
                  {t(`panel.items.${itemKey}.description`)}
                </p>
              </article>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative w-full max-w-2xl transition-transform duration-1000 ease-out hover:scale-[1.03] focus-within:scale-[1.03] lg:max-w-[86%]">
            <Image
              src="/assets/Nayuta_hero1.png"
              alt={t('sample.imageAlt')}
              width={1380}
              height={1035}
              sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 35vw"
              className="h-auto w-full object-contain"
              priority
            />
            <button
              type="button"
              className="absolute bottom-4 right-4 border border-brand px-6 py-3 text-sm font-semibold text-brand transition-colors duration-150 hover:bg-brand hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              {t('sample.button')}
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
