import React from 'react';

export const CloseIcon: React.FC<{
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
        d="M20.4822 4.64622C20.7946 4.3338 20.7946 3.82727 20.4822 3.51485C20.1698 3.20243 19.6633 3.20243 19.3509 3.51485L11.9983 10.8674L4.6455 3.5145C4.33308 3.20208 3.82655 3.20208 3.51413 3.5145C3.20171 3.82692 3.20171 4.33345 3.51413 4.64587L10.867 11.9987L3.51166 19.354C3.19924 19.6665 3.19924 20.173 3.51166 20.4854C3.82408 20.7978 4.33061 20.7978 4.64303 20.4854L11.9983 13.1301L19.3533 20.4851C19.6657 20.7975 20.1723 20.7975 20.4847 20.4851C20.7971 20.1726 20.7971 19.6661 20.4847 19.3537L13.1297 11.9987L20.4822 4.64622Z"
        fill={color}
      />
    </svg>
  );
};
