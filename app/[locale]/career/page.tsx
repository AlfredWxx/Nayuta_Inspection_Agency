import {getTranslations, unstable_setRequestLocale} from 'next-intl/server';
import Container from '@/components/Container';

type PageProps = {
  params: {locale: string};
};

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Career | Nayuta Inspection',
  description: '…'
};

export default async function CareerPage({params: {locale}}: PageProps) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations({locale, namespace: 'nav'});

  return (
    <section className="flex min-h-[40vh] items-center justify-center bg-white py-24">
      <Container className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-3xl font-semibold text-body sm:text-4xl">
          {t('career')}
        </h1>
        <p className="text-base text-muted">
          More information is coming soon.
        </p>
      </Container>
    </section>
  );
}
