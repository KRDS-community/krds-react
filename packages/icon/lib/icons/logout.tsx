import React from 'react';

export const LogoutIcon: React.FC<{
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M3 19.5C3 20.3284 3.67157 21 4.5 21H12V19.4H4.6V4.6H12V3H4.5C3.67157 3 3 3.67157 3 4.5V19.5ZM17.3178 13.0502L15.1835 15.1845C14.8711 15.4969 14.8711 16.0035 15.1835 16.3159C15.496 16.6283 16.0025 16.6283 16.3149 16.3159L20.6306 12.0002L16.3149 7.68451C16.0025 7.37209 15.496 7.37209 15.1835 7.68451C14.8711 7.99693 14.8711 8.50346 15.1835 8.81588L17.8178 11.4502H6.69922V13.0502H17.3178Z" fill={color}/>
    </svg>
  );
};
