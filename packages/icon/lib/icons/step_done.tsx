import React from 'react';

export const StepDoneIcon: React.FC<{
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}> = ({ width = 24, height = 24, className, color = 'white' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M5.09863 8.17067L7.57779 10.56L10.9013 5.44"
        stroke={color}
        stroke-linecap="round"
      />
    </svg>
  );
};
