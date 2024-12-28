import React from 'react';
import { Color } from '../colors/color.type';
import { Link } from './Link';

export type LinkButtonProps<E extends React.ElementType> = {
  variant?: 'accent' | 'default';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  className?: string;
  link: string;
  title?: string;
} & React.ComponentPropsWithoutRef<E>;

export const LinkButton = <E extends React.ElementType = 'a'>({
  variant = 'default',
  size = 'medium',
  children,
  className = '',
  link,
  title,
  ...props
}: LinkButtonProps<E>) => {
  const baseStyles =
    'px-2 py-2 underline inline-flex items-center justify-center rounded-4 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200';

  const variantStyles: {
    style: string;
    color: Color;
    weight: 'regular' | 'bold';
  } = {
    accent: {
      style: 'hover:bg-secondary-5',
      color: 'primary' as Color,
      weight: 'bold' as const,
    },
    default: {
      style: 'hover:bg-secondary-5',
      color: 'gray-90' as Color,
      weight: 'regular' as const,
    },
  }[variant];

  const linkSize = {
    small: 's' as const,
    medium: 'm' as const,
    large: 'l' as const,
  }[size];

  return (
    <Link
      className={`${baseStyles} ${variantStyles.style} ${className}`}
      size={linkSize}
      color={variantStyles.color}
      href={link}
      role="link"
      weight={variantStyles.weight}
      title={title}
      {...props}
    >
      {children}
    </Link>
  );
};
