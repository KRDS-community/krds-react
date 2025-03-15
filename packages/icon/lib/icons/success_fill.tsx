import React from 'react';

export const SuccessFillIcon: React.FC<{
  width?: number;
  height?: number;
  className?: string;
  backgroundColor?: string;
  checkColor?: string;
}> = ({
  width = 24,
  height = 24,
  className,
  backgroundColor = '#008A1E',
  checkColor = 'white',
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
        width="20"
        height="20"
        rx="10"
        transform="matrix(1 0 0 -1 2 22)"
        fill={backgroundColor}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.7789 8.31582L11.0882 16.2563L6.86719 11.7726L8.03216 10.6759L10.9204 13.7438L15.4784 7.38379L16.7789 8.31582Z"
        fill={checkColor}
      />
    </svg>
  );
};
