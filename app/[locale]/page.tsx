import {getTranslations, unstable_setRequestLocale} from 'next-intl/server';
import Container from '@/components/Container';
import Hero from '@/components/Hero';

type PageProps = {
  params: {locale: string};
};

export const dynamic = 'force-dynamic';

export default async function HomePage({params: {locale}}: PageProps) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations({locale, namespace: 'pillars'});

  const pillars = [
    {
      title: t('items.expertise.title'),
      description: t('items.expertise.description')
    },
    {
      title: t('items.visibility.title'),
      description: t('items.visibility.description')
    },
    {
      title: t('items.partnership.title'),
      description: t('items.partnership.description')
    },
    {
      title: t('items.resilience.title'),
      description: t('items.resilience.description')
    }
  ];

  return (
    <>
      <Hero />
      <section className="bg-slate-50 py-16 sm:py-24">
        <Container>
          <div className="mx-auto flex max-w-3xl flex-col gap-6 text-center">
            <h2 className="text-3xl font-semibold text-body sm:text-4xl">
              {t('title')}
            </h2>
            <p className="text-base leading-relaxed text-muted">
              {t('intro')}
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {pillars.map(({title, description}) => (
              <article
                key={title}
                className="flex flex-col gap-3 rounded-3xl border border-gray-200 bg-white p-6 text-left shadow-subtle transition-transform duration-150 hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold text-body">{title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-muted">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
