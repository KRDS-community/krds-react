import { Color, getTextColorClassname } from '../colors/color.type';

export type HeadingProps<E extends React.ElementType> = {
  size?: 'l' | 'm' | 's';
  color?: Color;
  children: React.ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<E>;

export const Heading = <E extends React.ElementType = 'h2'>({
  size = 'm',
  color = 'gray-90',
  children,
  className = '',
  ...props
}: HeadingProps<E>) => {
  const sizeClass = {
    l: 'text-heading-l-mobile sm:text-heading-l',
    m: 'text-heading-m-mobile sm:text-heading-m',
    s: 'text-heading-s-mobile sm:text-heading-s',
  }[size];
  const weightClass = 'font-bold';
  const textColorClass = getTextColorClassname(color);

  return (
    <h2
      className={`${sizeClass} ${weightClass} ${textColorClass} ${className}`}
      {...props}
    >
      {children}
    </h2>
  );
};
