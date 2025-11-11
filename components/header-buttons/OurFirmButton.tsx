'use client';

import NavButtonBase, {
  type HeaderNavButtonProps
} from './NavButtonBase';

type OurFirmButtonProps = Omit<HeaderNavButtonProps, 'href'> & {
  href?: string;
};

export default function OurFirmButton({
  href = '/our-firm',
  ...props
}: OurFirmButtonProps) {
  return <NavButtonBase translationKey="ourFirm" href={href} {...props} />;
}
