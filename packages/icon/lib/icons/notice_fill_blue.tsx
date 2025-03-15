import React from 'react';

export const NoticeFillBlueIcon: React.FC<{
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
<path d="M11.8992 9.44102C12.562 9.44102 13.0992 8.90376 13.0992 8.24102C13.0992 7.57827 12.562 7.04102 11.8992 7.04102C11.2365 7.04102 10.6992 7.57827 10.6992 8.24102C10.6992 8.90376 11.2365 9.44102 11.8992 9.44102Z" fill={color}/>
<path d="M10.3992 10.4312C10.2888 10.4312 10.1992 10.5207 10.1992 10.6312V11.4312C10.1992 11.5416 10.2888 11.6312 10.3992 11.6312H11.1008C11.2112 11.6312 11.3008 11.7207 11.3008 11.8312V15.5938H10.2C10.0895 15.5938 10 15.6833 10 15.7937V16.5938C10 16.7042 10.0895 16.7937 10.2 16.7937H13.8C13.9105 16.7937 14 16.7042 14 16.5938V15.7937C14 15.6833 13.9105 15.5938 13.8 15.5938H13.1008V10.6312C13.1008 10.5207 13.0112 10.4312 12.9008 10.4312H10.3992Z" fill={color}/>
    </svg>
  );
};
