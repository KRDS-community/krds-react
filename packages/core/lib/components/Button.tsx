import React from 'react';
import { Color, getTextColorClassname } from '../colors/color.type';

export type ButtonProps<E extends React.ElementType> = {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'x-small' | 'small' | 'medium' | 'large' | 'x-large';
  color?: Color;
  children: React.ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<E>;

export const Button = <E extends React.ElementType = 'button'>({
  variant = 'primary',
  size = 'medium',
  color = 'gray-90',
  children,
  className = '',
  ...props
}: ButtonProps<E>) => {
  const baseStyles =
    'inline-flex items-center justify-center rounded font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200';

  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary:
      'bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-500',
    tertiary:
      'bg-white text-gray-700 hover:bg-gray-100 focus:ring-gray-500 border border-gray-300',
  }[variant];

  const sizeStyles = {
    'x-small': 'px-2 py-1 text-xs min-w-[17px] min-h-[17px]',
    small: 'px-2 py-1 text-sm min-w-[17px] min-h-[17px]',
    medium: 'px-4 py-2 text-base min-w-[44px] min-h-[44px]',
    large: 'px-6 py-3 text-lg min-w-[44px] min-h-[44px]',
    'x-large': 'px-8 py-4 text-xl min-w-[44px] min-h-[44px]',
  }[size];

  const textColorClass = getTextColorClassname(color);

  const buttonStyles = `${baseStyles} ${variantStyles} ${sizeStyles} ${textColorClass} ${className}`;

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      (event.currentTarget as HTMLButtonElement).click();
    }
  };

  return (
    <button
      className={buttonStyles}
      onKeyDown={handleKeyDown}
      role="button"
      {...props}
    >
      {children}
    </button>
  );
};
