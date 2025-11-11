'use client';

import NavButtonBase, {
  type HeaderNavButtonProps
} from './NavButtonBase';

type WhatWeDoButtonProps = Omit<HeaderNavButtonProps, 'href'> & {
  href?: string;
};

export default function WhatWeDoButton({
  href = '/what-we-do',
  ...props
}: WhatWeDoButtonProps) {
  return <NavButtonBase translationKey="whatWeDo" href={href} {...props} />;
}
