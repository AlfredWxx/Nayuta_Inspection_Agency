import clsx from 'clsx';
import type {PropsWithChildren} from 'react';

type ContainerProps = PropsWithChildren<{
  className?: string;
}>;

export default function Container({children, className}: ContainerProps) {
  return (
    <div
      className={clsx(
        'mx-auto w-full max-w-content px-4 sm:px-6 lg:px-8',
        className
      )}
    >
      {children}
    </div>
  );
}
