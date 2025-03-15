import React from 'react';

export const MoreIcon: React.FC<{
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
        d="M15.5238 16.0225C15.2048 16.3282 15.1941 16.8346 15.4998 17.1536C15.8055 17.4726 16.3119 17.4834 16.6309 17.1777L22.0336 12.0001L16.6309 6.82251C16.3119 6.51681 15.8055 6.52758 15.4998 6.84657C15.1941 7.16557 15.2048 7.67199 15.5238 7.97769L18.8857 11.1995L2.8 11.1995C2.35817 11.1995 2 11.5577 2 11.9995C2 12.4413 2.35817 12.7995 2.8 12.7995L18.8869 12.7995L15.5238 16.0225Z"
        fill={color}
      />
    </svg>
  );
};
