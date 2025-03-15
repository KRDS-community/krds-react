import React from 'react';

export const PlusIcon: React.FC<{
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}> = ({ width = 24, height = 24, className, color = '#2D2D2D' }) => {
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
        d="M12.7992 4.5002C12.7992 4.05837 12.441 3.7002 11.9992 3.7002C11.5574 3.7002 11.1992 4.05837 11.1992 4.5002V11.2002L4.49922 11.2002C4.05739 11.2002 3.69922 11.5584 3.69922 12.0002C3.69922 12.442 4.05739 12.8002 4.49922 12.8002L11.1992 12.8002V19.5002C11.1992 19.942 11.5574 20.3002 11.9992 20.3002C12.441 20.3002 12.7992 19.942 12.7992 19.5002V12.8002L19.4992 12.8002C19.941 12.8002 20.2992 12.442 20.2992 12.0002C20.2992 11.5584 19.941 11.2002 19.4992 11.2002L12.7992 11.2002V4.5002Z"
        fill={color}
      />
    </svg>
  );
};
