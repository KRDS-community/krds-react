import React from 'react';
import { Label } from './Label';
import { Color } from '../colors/color.type';

export type ButtonProps<E extends React.ElementType> = {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'text';
  size?: 'x-small' | 'small' | 'medium' | 'large' | 'x-large';
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
} & React.ComponentPropsWithoutRef<E>;

export const Button = <E extends React.ElementType = 'button'>({
  variant = 'primary',
  size = 'large',
  children,
  className = '',
  disabled = false,
  ...props
}: ButtonProps<E>) => {
  const baseStyles =
    'inline-flex items-center justify-center rounded-4 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200';

  const variantStyles: {
    style: string;
    color: Color;
    disabledStyle: string;
    disabledColor: Color;
  } = {
    primary: {
      style: 'bg-primary hover:bg-primary-60',
      color: 'gray-0' as Color,
      disabledStyle: 'bg-primary-20',
      disabledColor: 'gray-0' as Color,
    },
    secondary: {
      style: 'bg-gray-0 hover:bg-primary-5 border border-primary',
      color: 'primary' as Color,
      disabledStyle: 'bg-gray-0 border border-primary-30',
      disabledColor: 'primary-30' as Color,
    },
    tertiary: {
      style: 'bg-gray-0 hover:bg-gray-5 border border-gray-90',
      color: 'gray-90' as Color,
      disabledStyle: 'bg-gray-0 border border-gray-40',
      disabledColor: 'gray-40' as Color,
    },
    text: {
      style: 'bg-transparent',
      color: 'gray-90' as Color,
      disabledStyle: 'bg-transparent',
      disabledColor: 'gray-40' as Color,
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

  const buttonStyles = `
    ${baseStyles} 
    ${disabled ? variantStyles.disabledStyle : variantStyles.style} 
    ${sizeStyles.style} 
    ${disabled ? 'cursor-not-allowed' : ''}
    ${className}
  `;

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (!disabled) {
        (event.currentTarget as HTMLButtonElement).click();
      }
    }
  };

  const labelStyles = `${disabled ? 'cursor-not-allowed' : 'cursor-pointer'} ${variant === 'text' ? 'underline' : ''}`;

  return (
    <button
      className={buttonStyles}
      onKeyDown={handleKeyDown}
      role="button"
      disabled={disabled}
      {...props}
    >
      <Label
        color={disabled ? variantStyles.disabledColor : variantStyles.color}
        size={sizeStyles.fontSize}
        className={labelStyles}
      >
        {children}
      </Label>
    </button>
  );
};
