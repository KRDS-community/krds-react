import React from 'react';

export const GoTopIcon: React.FC<{
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
      <g id="icon/top">
<path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M5.8 3C5.35817 3 5 3.35817 5 3.8C5 4.24183 5.35817 4.6 5.8 4.6H18.2C18.6418 4.6 19 4.24183 19 3.8C19 3.35817 18.6418 3 18.2 3H5.8ZM12.3826 6.25178C12.2314 6.09111 12.0206 6 11.8 6C11.5794 6 11.3686 6.09111 11.2174 6.25178L6.21737 11.5657C5.9146 11.8874 5.93001 12.3937 6.25179 12.6965C6.57356 12.9993 7.07986 12.9839 7.38263 12.6621L11 8.81764V20.8C11 21.2418 11.3582 21.6 11.8 21.6C12.2418 21.6 12.6 21.2418 12.6 20.8V8.81764L16.2174 12.6621C16.5201 12.9839 17.0264 12.9993 17.3482 12.6965C17.67 12.3937 17.6854 11.8874 17.3826 11.5657L12.3826 6.25178Z" fill={color}/>
</g>
    </svg>
  );
};
