import { Color, getTextColorClassname } from '../colors/color.type';

export type LinkProps<E extends React.ElementType> = {
  size?: 'l' | 'm' | 's';
  weight?: 'regular' | 'bold';
  color?: Color;
  children: React.ReactNode;
  className?: string;
  title?: string;
} & React.ComponentPropsWithoutRef<E>;

export const Link = <E extends React.ElementType = 'a'>({
  size = 'm',
  weight = 'regular',
  color = 'gray-90',
  children,
  className = '',
  title,
  ...props
}: LinkProps<E>) => {
  const sizeClass = {
    l: 'text-link-l-mobile sm:text-link-l',
    m: 'text-link-m-mobile sm:text-link-m',
    s: 'text-link-s-mobile sm:text-link-s',
  }[size];

  const weightClass = {
    regular: 'font-regular',
    bold: 'font-bold',
  }[weight];
  const textColorClass = getTextColorClassname(color);

  return (
    <a
      className={`${sizeClass} ${weightClass} ${textColorClass} ${className}`}
      title={title}
      aria-label={title}
      {...props}
    >
      {children}
    </a>
  );
};
