import { Color, getTextColorClassname } from '../colors/color.type';

export type BodyProps<E extends React.ElementType> = {
  size?: 'l' | 'm' | 's';
  weight?: 'regular' | 'bold';
  color?: Color;
  children: React.ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<E>;

export const Body = <E extends React.ElementType = 'p'>({
  size = 'm',
  weight = 'regular',
  color = 'gray-90',
  children,
  className = '',
  ...props
}: BodyProps<E>) => {
  const sizeClass = {
    l: 'text-body-l-mobile sm:text-body-l',
    m: 'text-body-m-mobile sm:text-body-m',
    s: 'text-body-s-mobile sm:text-body-s',
  }[size];

  const weightClass = {
    regular: 'font-regular',
    bold: 'font-bold',
  }[weight];
  const textColorClass = getTextColorClassname(color);

  return (
    <p
      className={`${sizeClass} ${weightClass} ${textColorClass} ${className}`}
      {...props}
    >
      {children}
    </p>
  );
};
