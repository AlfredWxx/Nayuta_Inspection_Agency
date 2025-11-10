'use client';

import {useTranslations} from 'next-intl';

const SOCIAL_LINKS = [
  {
    key: 'linkedin',
    href: 'https://www.linkedin.com'
  },
  {
    key: 'instagram',
    href: 'https://www.instagram.com'
  },
  {
    key: 'facebook',
    href: 'https://www.facebook.com'
  },
  {
    key: 'xiaohongshu',
    href: '#'
  },
  {
    key: 'wechat',
    href: '#'
  }
];

export default function SocialLinks() {
  const t = useTranslations('footer.social');

  return (
    <ul className="flex flex-wrap items-center gap-3">
      {SOCIAL_LINKS.map(({key, href}) => (
        <li key={key}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-body transition-colors duration-150 hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            <SocialIcon type={key} />
            <span>{t(key)}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

type SocialIconProps = {
  type: string;
};

function SocialIcon({type}: SocialIconProps) {
  switch (type) {
    case 'linkedin':
      return (
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M4.98 3.5a2.5 2.5 0 1 1-.02 5 2.5 2.5 0 0 1 .02-5ZM3 9h4v12H3zm7 0h3.7v1.71h.05c.52-.99 1.78-2.03 3.66-2.03 3.92 0 4.64 2.58 4.64 5.94V21H17v-5.37c0-1.28-.02-2.94-1.79-2.94-1.8 0-2.08 1.4-2.08 2.85V21h-4z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
        </svg>
      );
    case 'facebook':
      return (
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M13 22h-3v-7H7v-3h3V9.5C10 6.42 11.64 5 14.44 5c1.2 0 1.92.09 2.23.13v2.58h-1.79c-1.12 0-1.35.53-1.35 1.31V12h3.06l-.4 3h-2.66z" />
        </svg>
      );
    case 'xiaohongshu':
      return (
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <path d="M7 9h10M7 15h10M9.5 7.5v3M14.5 13.5v3" />
        </svg>
      );
    case 'wechat':
      return (
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="M16 10a4 4 0 1 0-7.9-1M8 13a4 4 0 1 0 7.9 1" />
          <path d="M6 17.5 4 20l3-.5" />
          <path d="m18 17.5 2 2.5-3-.5" />
        </svg>
      );
    default:
      return null;
  }
}
