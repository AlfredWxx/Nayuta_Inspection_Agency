import type {MetadataRoute} from 'next';

const BASE_URL = 'https://inspection.example.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'GPTBot',
        allow: '/'
      },
      {
        userAgent: '*',
        allow: '/'
      }
    ],
    sitemap: `${BASE_URL}/sitemap.xml`
  };
}
