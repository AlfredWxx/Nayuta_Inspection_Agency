'use client';

import NavButtonBase, {
  type HeaderNavButtonProps
} from './NavButtonBase';

type CareerButtonProps = Omit<HeaderNavButtonProps, 'href'> & {
  href?: string;
};

export default function CareerButton({
  href = '/career',
  ...props
}: CareerButtonProps) {
  return <NavButtonBase translationKey="career" href={href} {...props} />;
}
