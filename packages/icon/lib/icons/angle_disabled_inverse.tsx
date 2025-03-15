import React from 'react';

export const AngleDisabledInverseIcon: React.FC<{
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}> = ({ width = 24, height = 24, className, color = '#747f8b' }) => {
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
        d="M4.47243 8.39766C4.80494 8.10671 5.31035 8.1404 5.60129 8.47291L11.9992 15.7848L18.3972 8.47291C18.6881 8.1404 19.1935 8.10671 19.526 8.39766C19.8585 8.6886 19.8922 9.19401 19.6013 9.52652L11.9992 18.2146L4.39717 9.52652C4.10622 9.19401 4.13992 8.6886 4.47243 8.39766Z"
        fill={color}
      />
    </svg>
  );
};
