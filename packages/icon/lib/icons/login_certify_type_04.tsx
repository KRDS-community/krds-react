import React from 'react';

export const LoginCertifyType04Icon: React.FC<{
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}> = ({ width = 24, height = 24, className, color = '#33363D' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M12 23.6436V26.1111C12 28.2589 13.5143 30 15.3824 30L26.6176 30C28.4857 30 30 28.2589 30 26.1111L30 5.88889C30 3.74111 28.4857 2 26.6176 2L15.3824 2C13.5143 2 12 3.74111 12 5.88889V8.56671" stroke="#2D2D2D" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.3086 16L2.0009 16" stroke="#2D2D2D" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.1543 12.3105L21.8466 16.0029L18.1543 19.6952" stroke="#2D2D2D" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};
