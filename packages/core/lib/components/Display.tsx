export type DisplayProps<E extends React.ElementType> = {
  size?: 'l' | 'm' | 's';
  children: React.ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<E>;

export const Display = <E extends React.ElementType = 'h1'>({
  size = 'm',
  children,
  className = '',
  ...props
}: DisplayProps<E>) => {
  const sizeClass = {
    l: 'text-display-l',
    m: 'text-display-m',
    s: 'text-display-s',
  }[size];
  const weightClass = 'font-bold';

  return (
    <h1 className={`${sizeClass} ${weightClass} ${className}`} {...props}>
      {children}
    </h1>
  );
};
