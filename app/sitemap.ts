import type {MetadataRoute} from 'next';
import {locales} from '@/i18n/config';

const BASE_URL = 'https://inspection.example.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const localizedEntries = locales.map((locale) => ({
    url: `${BASE_URL}/${locale}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.8
  }));

  return [
    ...localizedEntries,
    {
      url: `${BASE_URL}/`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7
    }
  ];
}
