import React from 'react';

export const LoginCertifyGoIcon: React.FC<{
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
      <path d="M16.0781 16.5996L20.8781 11.9996L16.0781 7.39961" stroke="#2D2D2D" stroke-width="1.6" stroke-linecap="round"/>
<line x1="20" y1="11.9992" x2="2" y2="11.9992" stroke="#2D2D2D" stroke-width="1.6"/>
    </svg>
  );
};
