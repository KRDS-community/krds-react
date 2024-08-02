import { Color, getTextColorClassname } from '../colors/color.type';

export type DisplayProps<E extends React.ElementType> = {
  size?: 'l' | 'm' | 's';
  color?: Color;
  children: React.ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<E>;

export const Display = <E extends React.ElementType = 'h1'>({
  size = 'm',
  children,
  color = 'gray-90',
  className = '',
  ...props
}: DisplayProps<E>) => {
  const sizeClass = {
    l: 'text-display-l',
    m: 'text-display-m',
    s: 'text-display-s',
  }[size];
  const weightClass = 'font-bold';
  const textColorClass = getTextColorClassname(color);

  return (
    <h1
      className={`${sizeClass} ${weightClass} ${textColorClass} ${className}`}
      {...props}
    >
      {children}
    </h1>
  );
};
