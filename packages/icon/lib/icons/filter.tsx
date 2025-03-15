import React from 'react';

export const FilterIcon: React.FC<{
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
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.80078 8.52374C7.867 8.86303 8.63938 9.86127 8.63938 11.0399C8.63938 12.2185 7.867 13.2168 6.80078 13.5561L6.80078 21.2002C6.80078 21.642 6.44261 22.0002 6.00078 22.0002C5.55895 22.0002 5.20078 21.642 5.20078 21.2002L5.20078 13.557C4.13311 13.2185 3.35938 12.2196 3.35938 11.0399C3.35938 9.86023 4.13311 8.86128 5.20078 8.52284L5.20078 2.8C5.20078 2.35817 5.55895 2 6.00078 2C6.44261 2 6.80078 2.35817 6.80078 2.8V8.52374ZM5.99938 12.0799C5.425 12.0799 4.95938 11.6143 4.95938 11.0399C4.95938 10.4655 5.425 9.9999 5.99938 9.9999C6.57375 9.9999 7.03938 10.4655 7.03938 11.0399C7.03938 11.6143 6.57375 12.0799 5.99938 12.0799Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.2008 21.2002L11.2008 17.1571C10.1331 16.8186 9.35938 15.8197 9.35938 14.64C9.35938 13.4603 10.1331 12.4614 11.2008 12.1229V2.8C11.2008 2.35817 11.559 2 12.0008 2C12.4426 2 12.8008 2.35817 12.8008 2.8L12.8008 12.1238C13.867 12.4631 14.6394 13.4614 14.6394 14.64C14.6394 15.8186 13.867 16.8169 12.8008 17.1562V21.2002C12.8008 21.642 12.4426 22.0002 12.0008 22.0002C11.559 22.0002 11.2008 21.642 11.2008 21.2002ZM10.9594 14.64C10.9594 15.2144 11.425 15.68 11.9994 15.68C12.5738 15.68 13.0394 15.2144 13.0394 14.64C13.0394 14.0656 12.5738 13.6 11.9994 13.6C11.425 13.6 10.9594 14.0656 10.9594 14.64Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17.2008 6.12294V2.8C17.2008 2.35817 17.559 2 18.0008 2C18.4426 2 18.8008 2.35817 18.8008 2.8V6.12383C19.867 6.46313 20.6394 7.46137 20.6394 8.64C20.6394 9.81863 19.867 10.8169 18.8008 11.1562L18.8008 21.2002C18.8008 21.642 18.4426 22.0002 18.0008 22.0002C17.559 22.0002 17.2008 21.642 17.2008 21.2002V11.1571C16.1331 10.8186 15.3594 9.81967 15.3594 8.64C15.3594 7.46033 16.1331 6.46138 17.2008 6.12294ZM17.9994 9.68C17.425 9.68 16.9594 9.21438 16.9594 8.64C16.9594 8.06562 17.425 7.6 17.9994 7.6C18.5738 7.6 19.0394 8.06562 19.0394 8.64C19.0394 9.21438 18.5738 9.68 17.9994 9.68Z"
        fill={color}
      />
    </svg>
  );
};
