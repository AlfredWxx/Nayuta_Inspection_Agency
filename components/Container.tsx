import clsx from 'clsx';
import type {PropsWithChildren} from 'react';

type ContainerProps = PropsWithChildren<{
  className?: string;
}>;

export default function Container({children, className}: ContainerProps) {
  return (
    <div
      className={clsx(
        'mx-auto w-full max-w-content-2xl px-6 sm:px-8 lg:px-20',
        className
      )}
    >
      {children}
    </div>
  );
}
