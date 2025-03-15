import React from 'react';

export const SwitchOffIcon: React.FC<{
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}> = ({ width = 24, height = 24, className, color = '#33363D' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 10 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g id="element">
        <path
          id="Line 156"
          d="M1.5 1.96436L8.57107 9.03542"
          stroke="#6D7882"
          stroke-width="1.6"
          stroke-linecap="round"
        />
        <path
          id="Line 157"
          d="M8.5 1.96436L1.42893 9.03542"
          stroke="#6D7882"
          stroke-width="1.6"
          stroke-linecap="round"
        />
      </g>
    </svg>
  );
};
