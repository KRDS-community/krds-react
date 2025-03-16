export type TitleProps<E extends React.ElementType> = {
  size?: 'xxl' | 'xl' | 'l' | 'm' | 's' | 'xs';
  children: React.ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<E>;

export const Title = <E extends React.ElementType = 'h3'>({
  size = 'm',
  color = 'gray-90',
  children,
  className = '',
  ...props
}: TitleProps<E>) => {
  const sizeClass = {
    xxl: 'text-title-xxl-mobile sm:text-title-xxl',
    xl: 'text-title-xl-mobile sm:text-title-xl',
    l: 'text-title-l-mobile sm:text-title-l',
    m: 'text-title-m-mobile sm:text-title-m',
    s: 'text-title-s-mobile sm:text-title-s',
    xs: 'text-title-xs-mobile sm:text-title-xs',
  }[size];
  const weightClass = 'font-bold';
  const textColorClass = '';

  return (
    <h3
      className={`${sizeClass} ${weightClass} ${textColorClass} ${className}`}
      {...props}
    >
      {children}
    </h3>
  );
};
