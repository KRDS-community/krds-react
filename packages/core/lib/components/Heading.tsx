export type HeadingProps<E extends React.ElementType> = {
  size?: 'l' | 'm' | 's';
  children: React.ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<E>;

export const Heading = <E extends React.ElementType = 'h2'>({
  size = 'm',
  children,
  className = '',
  ...props
}: HeadingProps<E>) => {
  const sizeClass = {
    l: 'text-heading-l',
    m: 'text-heading-m',
    s: 'text-heading-s',
  }[size];
  const weightClass = 'font-bold';

  return (
    <h2 className={`${sizeClass} ${weightClass} ${className}`} {...props}>
      {children}
    </h2>
  );
};
