import React from 'react';
import { Label } from './Label';
import { Color } from '../colors/color.type';

export type ButtonProps<E extends React.ElementType> = {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'x-small' | 'small' | 'medium' | 'large' | 'x-large';
  children: React.ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<E>;

export const Button = <E extends React.ElementType = 'button'>({
  variant = 'primary',
  size = 'large',
  children,
  className = '',
  ...props
}: ButtonProps<E>) => {
  const baseStyles =
    'inline-flex items-center justify-center rounded-4 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200 cursor-pointer';

  const variantStyles: { style: string; color: Color } = {
    primary: {
      style: 'bg-primary hover:bg-primary-60',
      color: 'gray-0' as Color,
    },
    secondary: {
      style: 'bg-gray-0 hover:bg-primary-5 border border-primary',
      color: 'primary' as Color,
    },
    tertiary: {
      style: 'bg-gray-0 hover:bg-gray-5 border border-gray-90',
      color: 'gray-90' as Color,
    },
  }[variant];

  const sizeStyles: { style: string; fontSize: 'l' | 'm' | 's' | 'xs' } = {
    'x-small': {
      style: 'px-3 min-w-[32px] min-h-[32px]',
      fontSize: 's' as const,
    },
    small: {
      style: 'px-3 min-w-[40px] min-h-[40px]',
      fontSize: 'm' as const,
    },
    medium: {
      style: 'px-4 min-w-[48px] min-h-[48px]',
      fontSize: 'm' as const,
    },
    large: {
      style: 'px-6 min-w-[56px] min-h-[56px]',
      fontSize: 'l' as const,
    },
    'x-large': {
      style: 'px-8 min-w-[64px] min-h-[64px]',
      fontSize: 'l' as const,
    },
  }[size];

  const buttonStyles = `${baseStyles} ${variantStyles.style} ${sizeStyles.style} ${className}`;

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
      <Label
        color={variantStyles.color}
        size={sizeStyles.fontSize}
        className="cursor-pointer"
      >
        {children}
      </Label>
    </button>
  );
};
