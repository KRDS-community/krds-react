import React from 'react';

export const FacebookIcon: React.FC<{
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
      <path d="M21.9996 12.0367C21.9996 6.49365 17.5225 2 11.9998 2C6.47711 2 2 6.49365 2 12.0367C2 16.7436 5.22874 20.6932 9.58425 21.778V15.104H7.52229V12.0367H9.58425V10.7151C9.58425 7.29899 11.1246 5.7156 14.4662 5.7156C15.0997 5.7156 16.1929 5.84046 16.6401 5.96491V8.74509C16.4041 8.7202 15.9941 8.70775 15.4849 8.70775C13.8454 8.70775 13.2118 9.33123 13.2118 10.952V12.0367H16.4781L15.9169 15.104H13.2118V22C18.1633 21.3998 22 17.1683 22 12.0367H21.9996Z" fill={color}/>
    </svg>
  );
};
