import React from 'react';
import { Label } from './Label';
import { Color } from '../colors/color.type';

export type BadgeProps = {
  label: string;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  size?: 'x-small' | 'small' | 'medium' | 'large';
  appearance?: 'fill' | 'stroke';
  className?: string;
};

const variantStyles: Record<
  NonNullable<BadgeProps['variant']>,
  {
    fill: { style: string; color: Color };
    stroke: { style: string; color: Color };
  }
> = {
  default: {
    fill: { style: 'bg-gray-10', color: 'gray-70' },
    stroke: { style: 'bg-transparent border border-gray-30', color: 'gray-70' },
  },
  primary: {
    fill: { style: 'bg-primary-10', color: 'primary-70' },
    stroke: {
      style: 'bg-transparent border border-primary-30',
      color: 'primary-70',
    },
  },
  success: {
    fill: { style: 'bg-success-10', color: 'success-70' },
    stroke: {
      style: 'bg-transparent border border-success-30',
      color: 'success-70',
    },
  },
  warning: {
    fill: { style: 'bg-warning-10', color: 'warning-70' },
    stroke: {
      style: 'bg-transparent border border-warning-30',
      color: 'warning-70',
    },
  },
  danger: {
    fill: { style: 'bg-danger-10', color: 'danger-70' },
    stroke: {
      style: 'bg-transparent border border-danger-30',
      color: 'danger-70',
    },
  },
};

const sizeStyles: Record<
  NonNullable<BadgeProps['size']>,
  { padding: string; fontSize: 'xs' | 's' | 'm' | 'l' }
> = {
  'x-small': { padding: 'px-3 py-1', fontSize: 'xs' },
  small: { padding: 'px-3 py-1', fontSize: 's' },
  medium: { padding: 'px-4 py-2', fontSize: 'm' },
  large: { padding: 'px-4 py-2', fontSize: 'l' },
};

export const Badge: React.FC<BadgeProps> = ({
  label,
  variant = 'default',
  size = 'small',
  appearance = 'fill',
  className = '',
}) => {
  const variantStyle = variantStyles[variant][appearance];
  const { padding, fontSize } = sizeStyles[size];

  const { style, color } = variantStyle;

  return (
    <span
      className={`inline-flex items-center justify-center rounded-2 ${style} ${padding} ${className}`}
      role="status"
      aria-label={label}
    >
      <Label color={color} size={fontSize}>
        {label}
      </Label>
    </span>
  );
};
