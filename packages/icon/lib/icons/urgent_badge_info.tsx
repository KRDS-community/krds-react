import React from 'react';

export const UrgentBadgeInfoIcon: React.FC<{
  width?: number;
  height?: number;
  className?: string;
  backgroundColor?: string;
  iconColor?: string;
}> = ({
  width = 24,
  height = 24,
  className,
  backgroundColor = 'white',
  iconColor = '#16408D',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="0.8"
        y="-0.8"
        width="18.4"
        height="18.4"
        rx="9.2"
        transform="matrix(1 0 0 -1 2 20.4)"
        fill={backgroundColor}
        stroke={backgroundColor}
        stroke-width="1.6"
      />
      <rect x="11.3008" y="10.4297" width="1.8" height="5.6" fill={iconColor} />
      <rect x="10.1992" y="10.4297" width="2" height="1.2" fill={iconColor} />
      <rect x="10" y="15.5938" width="4" height="1.2" fill={iconColor} />
      <circle cx="11.8992" cy="8.23906" r="1.2" fill={iconColor} />
    </svg>
  );
};
