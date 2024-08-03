export type LabelProps<E extends React.ElementType> = {
  size?: 'l' | 'm' | 's' | 'xs';
  weight?: 'regular' | 'bold';
  children: React.ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<E>;

export const Label = <E extends React.ElementType = 'label'>({
  size = 'm',
  weight = 'regular',
  children,
  className = '',
  ...props
}: LabelProps<E>) => {
  const sizeClass = {
    l: 'text-label-l',
    m: 'text-label-m',
    s: 'text-label-s',
    xs: 'text-label-xs',
  }[size];

  const weightClass = {
    regular: 'font-regular',
    bold: 'font-bold',
  }[weight];

  return (
    <label className={`${sizeClass} ${weightClass} ${className}`} {...props}>
      {children}
    </label>
  );
};
