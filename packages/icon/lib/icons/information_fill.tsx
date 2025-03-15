import React from 'react';

export const InformationFillIcon: React.FC<{
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.8992 9.44102C12.562 9.44102 13.0992 8.90376 13.0992 8.24102C13.0992 7.57827 12.562 7.04102 11.8992 7.04102C11.2365 7.04102 10.6992 7.57827 10.6992 8.24102C10.6992 8.90376 11.2365 9.44102 11.8992 9.44102ZM11.3008 10.4312H10.1992V11.6312H11.3008V15.5938H10V16.7937H14V15.5938H13.1008V10.4312H12.1992H11.3008Z" fill={color}/>
    </svg>
  );
};
