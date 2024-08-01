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
    l: 'text-lable-l',
    m: 'text-lable-m',
    s: 'text-lable-s',
    xs: 'text-lable-xs',
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
