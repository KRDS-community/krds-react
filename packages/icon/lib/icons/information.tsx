import React from 'react';

export const InformationIcon: React.FC<{
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}> = ({ width = 24, height = 24, className, color = '#303336' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g id="icon/exclamation">
        <path
          id="Vector"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3.6 12C3.6 7.36081 7.36081 3.6 12 3.6C16.6392 3.6 20.4 7.36081 20.4 12C20.4 16.6392 16.6392 20.4 12 20.4C7.36081 20.4 3.6 16.6392 3.6 12ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM13 7.59375V13.5938H11V7.59375H13ZM13 17.0938V15.0938H11V17.0938H13Z"
          fill={color}
        />
      </g>
    </svg>
  );
};
