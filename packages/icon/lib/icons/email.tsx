import React from 'react';

export const EmailIcon: React.FC<{
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.8 5.60026L20.2 5.6C20.3105 5.6 20.4 5.68954 20.4 5.8V7.58123L12.0013 13.5204L3.6 7.58471V5.80026C3.6 5.68981 3.68954 5.60026 3.8 5.60026ZM3.6 9.54376V18.1999C3.6 18.3104 3.68954 18.3999 3.8 18.3999H20.2C20.3105 18.3999 20.4 18.3104 20.4 18.1999V9.54086L12.4634 15.1532C12.1866 15.3489 11.8166 15.349 11.5398 15.1534L3.6 9.54376ZM20.2 4L3.79997 4.00026C2.80587 4.00028 2 4.80616 2 5.80026V18.1999C2 19.1941 2.80588 19.9999 3.8 19.9999H20.2C21.1941 19.9999 22 19.1941 22 18.1999V5.8C22 4.80588 21.1941 3.99998 20.2 4Z" fill={color}/>
    </svg>
  );
};
