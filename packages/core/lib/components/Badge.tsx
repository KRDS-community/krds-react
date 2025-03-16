import React from 'react';
import { Label } from './Label';

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
    fill: { style: string };
    stroke: { style: string };
  }
> = {
  default: {
    fill: { style: 'bg-gray-10' },
    stroke: { style: 'bg-transparent border border-gray-30' },
  },
  primary: {
    fill: { style: 'bg-primary-10' },
    stroke: { style: 'bg-transparent border border-primary-30' },
  },
  success: {
    fill: { style: 'bg-success-10' },
    stroke: { style: 'bg-transparent border border-success-30' },
  },
  warning: {
    fill: { style: 'bg-warning-10' },
    stroke: { style: 'bg-transparent border border-warning-30' },
  },
  danger: {
    fill: { style: 'bg-danger-10' },
    stroke: { style: 'bg-transparent border border-danger-30' },
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

  const { style } = variantStyle;

  return (
    <span
      className={`inline-flex items-center justify-center rounded-2 ${style} ${padding} ${className}`}
      role="status"
      aria-label={label}
    >
      <Label size={fontSize}>{label}</Label>
    </span>
  );
};
