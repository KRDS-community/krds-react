export type TitleProps<E extends React.ElementType> = {
  size?: 'xxl' | 'xl' | 'l' | 'm' | 's' | 'xs';
  children: React.ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<E>;

export const Title = <E extends React.ElementType = 'h3'>({
  size = 'm',
  children,
  className = '',
  ...props
}: TitleProps<E>) => {
  const sizeClass = {
    xxl: 'text-title-xxl',
    xl: 'text-title-xl',
    l: 'text-title-l',
    m: 'text-title-m',
    s: 'text-title-s',
    xs: 'text-title-xs',
  }[size];
  const weightClass = 'font-bold';

  return (
    <h3 className={`${sizeClass} ${weightClass} ${className}`} {...props}>
      {children}
    </h3>
  );
};
