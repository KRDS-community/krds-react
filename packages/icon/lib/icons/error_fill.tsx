import React from 'react';

export const ErrorFillIcon: React.FC<{
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
      <rect width="20" height="20" rx="10" transform="matrix(1 0 0 -1 2 22)" fill={color}/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.0015 13.1328L14.9695 16.1009L16.1009 14.9695L13.1328 12.0015L16.104 9.03027L14.9727 7.8989L12.0015 10.8701L9.02981 7.89844L7.89844 9.02981L10.8701 12.0015L7.90159 14.97L9.03296 16.1013L12.0015 13.1328Z" fill={color}/>
    </svg>
  );
};
