import React from 'react';

export const DeleteIcon: React.FC<{
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
        d="M17.159 18.2938C17.4714 18.6062 17.9779 18.6062 18.2904 18.2938C18.6028 17.9814 18.6028 17.4748 18.2904 17.1624L13.0587 11.9307L18.2918 6.69761C18.6042 6.38519 18.6042 5.87866 18.2918 5.56624C17.9794 5.25382 17.4729 5.25382 17.1604 5.56624L11.9273 10.7994L6.69381 5.56586C6.38139 5.25344 5.87486 5.25344 5.56244 5.56586C5.25002 5.87828 5.25002 6.38481 5.56244 6.69723L10.7959 11.9307L5.56388 17.1628C5.25146 17.4752 5.25146 17.9817 5.56388 18.2942C5.8763 18.6066 6.38283 18.6066 6.69525 18.2942L11.9273 13.0621L17.159 18.2938Z"
        fill={color}
      />
    </svg>
  );
};
