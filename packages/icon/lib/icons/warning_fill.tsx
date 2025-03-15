import React from 'react';

export const WarningFillIcon: React.FC<{
  width?: number;
  height?: number;
  className?: string;
  triangleColor?: string;
  exclamationColor?: string;
}> = ({
  width = 24,
  height = 24,
  className,
  triangleColor = '#FFB724',
  exclamationColor = 'white',
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
      <mask
        id="mask0_353_44301"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <rect width="24" height="24" fill={triangleColor} />
      </mask>
      <g mask="url(#mask0_353_44301)">
        <path
          d="M11.134 2C11.5189 1.33333 12.4811 1.33333 12.866 2L22.8253 19.25C23.2102 19.9167 22.7291 20.75 21.9593 20.75H2.04071C1.27091 20.75 0.789782 19.9167 1.17468 19.25L11.134 2Z"
          fill={triangleColor}
        />
      </g>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13 8.5H11V14.5H13V8.5ZM13 16H11V18H13V16Z"
        fill={exclamationColor}
      />
    </svg>
  );
};
