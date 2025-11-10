import type {Metadata} from 'next';
import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import {unstable_setRequestLocale} from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {defaultLocale, locales} from '@/i18n/config';

const BASE_URL = 'https://inspection.example.com';

export const dynamic = 'force-dynamic';

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: {locale: string};
};

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

async function loadMessages(locale: string) {
  try {
    return (await import(`../../messages/${locale}.json`)).default;
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params: {locale}
}: {
  params: {locale: string};
}): Promise<Metadata> {
  const messages = await loadMessages(locale);

  if (!messages) {
    return {};
  }

  const seo = messages.seo ?? {};
  const common = messages.common ?? {};
  const footer = messages.footer ?? {};

  const title = seo.title;
  const description = seo.description;
  const keywords = seo.keywords;
  const ogTitle = seo.ogTitle ?? title;
  const ogDescription = seo.ogDescription ?? description;
  const companyName = common.companyName ?? footer.companyName;

  const localeToOg = {
    en: 'en_US',
    fr: 'fr_CA',
    zh: 'zh-CN'
  } as const;

  const alternateLanguages: Record<string, string> = {
    en: '/en',
    fr: '/fr',
    zh: '/zh',
    'x-default': '/en'
  };

  const currentLocale = locales.includes(locale as (typeof locales)[number])
    ? locale
    : defaultLocale;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `/${currentLocale}`,
      languages: alternateLanguages
    },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: `${BASE_URL}/${currentLocale}`,
      siteName: companyName,
      locale: localeToOg[currentLocale as keyof typeof localeToOg],
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: ogDescription,
      site: seo.twitterHandle
    },
    robots: {
      index: true,
      follow: true
    },
    other: {
      'geo.region': 'CA',
      'geo.placename': 'Vancouver',
      'geo.position': '49.2827;-123.1207',
      ICBM: '49.2827, -123.1207'
    }
  };
}

export default async function LocaleLayout({
  children,
  params: {locale}
}: LocaleLayoutProps) {
  if (!locales.includes(locale as (typeof locales)[number])) {
    notFound();
  }

  unstable_setRequestLocale(locale);

  const messages = await loadMessages(locale);

  if (!messages) {
    notFound();
  }

  const common = messages.common ?? {};
  const seo = messages.seo ?? {};

  const schemaData = createSchema({
    locale,
    companyName: common.companyName,
    description: seo.description,
    serviceName: seo.serviceName,
    serviceType: seo.serviceType
  });

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <>
        <div className="flex min-h-screen flex-col bg-white">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.setAttribute('lang', '${locale}');`
          }}
        />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{__html: JSON.stringify(schemaData)}}
        />
      </>
    </NextIntlClientProvider>
  );
}

type SchemaParams = {
  locale: string;
  companyName: string;
  description: string;
  serviceName: string;
  serviceType: string;
};

function createSchema({
  locale,
  companyName,
  description,
  serviceName,
  serviceType
}: SchemaParams) {
  const url = `${BASE_URL}/${locale}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: companyName,
    url,
    description,
    sameAs: [
      'https://www.linkedin.com',
      'https://www.instagram.com',
      'https://www.facebook.com'
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Vancouver',
      addressRegion: 'BC',
      addressCountry: 'Canada'
    },
    areaServed: {
      '@type': 'Country',
      name: 'China'
    },
    serviceOffered: {
      '@type': 'Service',
      name: serviceName,
      serviceType,
      areaServed: 'China'
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        availableLanguage: ['English', 'French', 'Chinese']
      }
    ]
  };
}
