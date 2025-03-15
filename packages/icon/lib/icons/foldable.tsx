import React from 'react';

export const FoldableIcon: React.FC<{
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
        d="M7.20156 5.0002C7.20156 4.55837 6.84339 4.2002 6.40156 4.2002C5.95973 4.2002 5.60156 4.55837 5.60156 5.0002V19.0002C5.60156 19.442 5.95973 19.8002 6.40156 19.8002C6.84339 19.8002 7.20156 19.442 7.20156 19.0002V5.0002ZM18.9788 6.34215C19.3057 6.04495 19.3298 5.53899 19.0326 5.21206C18.7354 4.88514 18.2294 4.86104 17.9025 5.15825L10.3763 12.0002L17.9025 18.8422C18.2294 19.1394 18.7354 19.1153 19.0326 18.7883C19.3298 18.4614 19.3057 17.9555 18.9788 17.6582L12.7549 12.0002L18.9788 6.34215Z"
        fill={color}
      />
    </svg>
  );
};
