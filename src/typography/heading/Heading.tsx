export type HeadingProps<E extends React.ElementType> = {
  size: 'large' | 'medium' | 'small';
  children: React.ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<E>;

export const Heading = <E extends React.ElementType = 'h2'>({
  size,
  children,
  className = '',
  ...props
}: HeadingProps<E>) => {
  const sizeClass = `text-heading-${size}`;
  const weightClass = 'font-bold';
  return (
    <h2 className={`${sizeClass} ${weightClass} ${className}`} {...props}>
      {children}
    </h2>
  );
};
