export type DetailProps<E extends React.ElementType> = {
  size?: 'l' | 'm' | 's';
  weight?: 'regular' | 'bold';
  children: React.ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<E>;

export const Detail = <E extends React.ElementType = 'span'>({
  size = 'm',
  weight = 'regular',
  children,
  className = '',
  ...props
}: DetailProps<E>) => {
  const sizeClass = {
    l: 'text-detail-l',
    m: 'text-detail-m',
    s: 'text-detail-s',
  }[size];

  const weightClass = {
    regular: 'font-regular',
    bold: 'font-bold',
  }[weight];

  return (
    <span className={`${sizeClass} ${weightClass} ${className}`} {...props}>
      {children}
    </span>
  );
};
