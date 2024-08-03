import { Color, getTextColorClassname } from '../colors/color.type';

export type TitleProps<E extends React.ElementType> = {
  size?: 'xxl' | 'xl' | 'l' | 'm' | 's' | 'xs';
  color?: Color;
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
    xxl: 'text-title-xxl',
    xl: 'text-title-xl',
    l: 'text-title-l',
    m: 'text-title-m',
    s: 'text-title-s',
    xs: 'text-title-xs',
  }[size];
  const weightClass = 'font-bold';
  const textColorClass = getTextColorClassname(color);

  return (
    <h3
      className={`${sizeClass} ${weightClass} ${textColorClass} ${className}`}
      {...props}
    >
      {children}
    </h3>
  );
};
