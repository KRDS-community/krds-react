import React from 'react';

export const LoginIcon: React.FC<{
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M21 4.5C21 3.67157 20.3284 3 19.5 3H12V4.6H19.4V19.4H12V21H19.5C20.3284 21 21 20.3284 21 19.5V4.5ZM13.1181 12.7499H3V11.1499H13.0176L10.6835 8.81588C10.3711 8.50346 10.3711 7.99693 10.6835 7.68451C10.996 7.37209 11.5025 7.37209 11.8149 7.68451L16.1306 12.0002L11.8149 16.3159C11.5025 16.6283 10.996 16.6283 10.6835 16.3159C10.3711 16.0035 10.3711 15.4969 10.6835 15.1845L13.1181 12.7499Z" fill={color}/>
    </svg>
  );
};
