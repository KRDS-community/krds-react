import React from 'react';

export const FontSampleIcon: React.FC<{
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}> = ({ width = 30, height = 30, className, color = '#202427' }) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.5645 4.14844V12.9863H25.0801V14.5977H21.5645V25.8525H19.6602V4.14844H21.5645ZM15.9492 6.49219C15.9492 12.6445 13.0684 18.2354 5.98828 21.7266L4.91406 20.2129C10.5293 17.4175 13.5811 13.2427 14.0205 8.10352H5.91504V6.49219H15.9492Z"
        fill={color}
      />
    </svg>
  );
};
