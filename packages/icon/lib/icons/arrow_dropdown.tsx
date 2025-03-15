import React from 'react';

export const ArrowDropdownIcon: React.FC<{
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}> = ({ width = 24, height = 24, className, color = '#33363D' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M11.6207 17.5592L4.11016 8.82602C3.83137 8.50185 4.06169 8 4.48925 8H19.5117C19.9393 8 20.1696 8.50189 19.8908 8.82605L12.3789 17.5593C12.1794 17.7912 11.8202 17.7912 11.6207 17.5592Z"
        fill={color}
      />
    </svg>
  );
};
