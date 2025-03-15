import React from 'react';

export const LoginCertifyType05Icon: React.FC<{
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
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4 5.6H20C20.2209 5.6 20.4 5.77909 20.4 6V18C20.4 18.2209 20.2209 18.4 20 18.4H4C3.77909 18.4 3.6 18.2209 3.6 18V6C3.6 5.77909 3.77909 5.6 4 5.6ZM2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6ZM15.5 13.2C15.0582 13.2 14.7 13.5582 14.7 14C14.7 14.4418 15.0582 14.8 15.5 14.8H18C18.4418 14.8 18.8 14.4418 18.8 14C18.8 13.5582 18.4418 13.2 18 13.2H15.5ZM6.5 13.5C7.32843 13.5 8 12.8284 8 12C8 11.1716 7.32843 10.5 6.5 10.5C5.67157 10.5 5 11.1716 5 12C5 12.8284 5.67157 13.5 6.5 13.5ZM13 12C13 12.8284 12.3284 13.5 11.5 13.5C10.6716 13.5 10 12.8284 10 12C10 11.1716 10.6716 10.5 11.5 10.5C12.3284 10.5 13 11.1716 13 12Z"
        fill={color}
      />
    </svg>
  );
};
