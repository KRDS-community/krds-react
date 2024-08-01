export type BodyProps<E extends React.ElementType> = {
  size?: 'l' | 'm' | 's';
  weight?: 'regular' | 'bold';
  children: React.ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<E>;

export const Body = <E extends React.ElementType = 'p'>({
  size = 'm',
  weight = 'regular',
  children,
  className = '',
  ...props
}: BodyProps<E>) => {
  const sizeClass = {
    l: 'text-body-l',
    m: 'text-body-m',
    s: 'text-body-s',
  }[size];

  const weightClass = {
    regular: 'font-regular',
    bold: 'font-bold',
  }[weight];

  return (
    <p className={`${sizeClass} ${weightClass} ${className}`} {...props}>
      {children}
    </p>
  );
};
