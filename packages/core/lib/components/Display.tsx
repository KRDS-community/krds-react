import React from 'react';

export type DisplayProps<E extends React.ElementType> = {
  size: 'large' | 'medium' | 'small';
  children: React.ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<E>;

export const Display = <E extends React.ElementType = 'h1'>({
  size,
  children,
  className = '',
  ...props
}: DisplayProps<E>) => {
  const sizeClass = `text-display-${size}`;
  const weightClass = 'font-bold';
  return (
    <h1 className={`${sizeClass} ${weightClass} ${className}`} {...props}>
      {children}
    </h1>
  );
};
