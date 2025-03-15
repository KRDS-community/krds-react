import React from 'react';

export const FlowArrowIcon: React.FC<{
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}> = ({ width = 26, height = 7, className, color = '#D6E0EB' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 26 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M24 0.5L24.3201 0.884111L25.381 0H24V0.5ZM17.6799 5.11589L17.2958 5.43598L17.936 6.2042L18.3201 5.88411L17.6799 5.11589ZM0 1H24V0H0V1ZM23.6799 0.115889L17.6799 5.11589L18.3201 5.88411L24.3201 0.884111L23.6799 0.115889Z"
        fill={color}
      />
    </svg>
  );
};
