'use client';

import type {ButtonHTMLAttributes} from 'react';
import {useTranslations} from 'next-intl';

type MenuToggleButtonProps = {
  isOpen: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function MenuToggleButton({isOpen, ...props}: MenuToggleButtonProps) {
  const t = useTranslations('nav');

  return (
    <button
      type="button"
      {...props}
      aria-expanded={isOpen}
      aria-controls="primary-navigation"
      aria-label={t('menu')}
    >
      <span className="sr-only">{t('menu')}</span>
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 7h16M4 12h16M4 17h16" />
      </svg>
    </button>
  );
}
