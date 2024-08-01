export type LabelProps<E extends React.ElementType> = {
  size?: 'l' | 'm' | 's';
  weight?: 'regular' | 'bold';
  children: React.ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<E>;

export const Link = <E extends React.ElementType = 'a'>({
  size = 'm',
  weight = 'regular',
  children,
  className = '',
  ...props
}: LabelProps<E>) => {
  const sizeClass = {
    l: 'text-link-l',
    m: 'text-link-m',
    s: 'text-link-s',
  }[size];

  const weightClass = {
    regular: 'font-regular',
    bold: 'font-bold',
  }[weight];

  return (
    <a className={`${sizeClass} ${weightClass} ${className}`} {...props}>
      {children}
    </a>
  );
};
