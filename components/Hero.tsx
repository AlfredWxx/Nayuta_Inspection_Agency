'use client';

import Image from 'next/image';
import {useTranslations} from 'next-intl';
import Container from './Container';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-white py-16 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(94,143,204,0.25),transparent_50%)]"
      />
      <Container className="relative grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div className="space-y-10 text-white">
          <div className="space-y-6">
            <p className="text-sm italic text-brand">
              {t('text1')}
            </p>
            <h1 className="font-heading text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              <span className="block">{t('heading1.line1')}</span>
              <span className="mt-2 block">{t('heading1.line2')}</span>
            </h1>
            <p className="max-w-3xl font-sans text-lg leading-relaxed text-slate-100/85 sm:text-xl">
              {t('heading2')}
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-2xl translate-y-8 border border-white/15 bg-white/5 shadow-[0_25px_80px_rgba(15,23,42,0.45)] transition-transform duration-1000 ease-out hover:scale-[1.03] focus-within:scale-[1.03] lg:max-w-[86%] lg:translate-y-12">
              <Image
                src="/assets/Nayuta_hero2.png"
                alt={t('heroPosterAlt')}
                width={1380}
                height={1035}
                sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 35vw"
                className="h-auto w-full object-contain"
                priority
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-2xl transform-gpu md:-translate-y-12 lg:-translate-y-[40%] transition-transform duration-1000 ease-out hover:scale-[1.03] focus-within:scale-[1.03] lg:max-w-[86%]">
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
