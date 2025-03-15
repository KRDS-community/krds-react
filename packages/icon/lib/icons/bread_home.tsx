import React from 'react';

export const BreadHomeIcon: React.FC<{
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}> = ({ width = 24, height = 24, className, color = '#2D2D2D' }) => {
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3 10.5L12 3L21 10.5V19.5C21 20.3284 20.3284 21 19.5 21H14.25V16.5C14.25 15.6716 13.5784 15 12.75 15H11.25C10.4216 15 9.75 15.6716 9.75 16.5V21H4.5C3.67157 21 3 20.3284 3 19.5V10.5Z"
        fill={color}
      />
    </svg>
  );
};
