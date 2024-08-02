import { Color, getTextColorClassname } from '../colors/color.type';

export type LabelProps<E extends React.ElementType> = {
  size?: 'l' | 'm' | 's' | 'xs';
  weight?: 'regular' | 'bold';
  color?: Color;
  children: React.ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<E>;

export const Label = <E extends React.ElementType = 'label'>({
  size = 'm',
  weight = 'regular',
  color = 'gray-90',
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
  const textColorClass = getTextColorClassname(color);

  return (
    <label
      className={`${sizeClass} ${weightClass} ${textColorClass} ${className}`}
      {...props}
    >
      {children}
    </label>
  );
};
