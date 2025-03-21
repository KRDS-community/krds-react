export type DetailProps<E extends React.ElementType> = {
  size?: 'l' | 'm' | 's';
  weight?: 'regular' | 'bold';
  children: React.ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<E>;

export const Detail = <E extends React.ElementType = 'span'>({
  size = 'm',
  weight = 'regular',
  color = 'gray-90',
  children,
  className = '',
  ...props
}: DetailProps<E>) => {
  const sizeClass = {
    l: 'text-detail-l-mobile sm:text-detail-l',
    m: 'text-detail-m-mobile sm:text-detail-m',
    s: 'text-detail-s-mobile sm:text-detail-s',
  }[size];

  const weightClass = {
    regular: 'font-regular',
    bold: 'font-bold',
  }[weight];
  const textColorClass = '';

  return (
    <span
      className={`${sizeClass} ${weightClass} ${textColorClass} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};
