import React from 'react';

export const SwiperPlayIcon: React.FC<{
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
        d="M8.79922 17.9003L16.6659 12.0003L8.79922 6.10034L8.79922 17.9003ZM8.87922 19.8403C8.18702 20.3595 7.19922 19.8656 7.19922 19.0003L7.19922 5.00034C7.19922 4.13509 8.18702 3.64119 8.87922 4.16034L18.2126 11.1603C18.7726 11.5803 18.7726 12.4203 18.2126 12.8403L8.87922 19.8403Z"
        fill={color}
      />
    </svg>
  );
};
