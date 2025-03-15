import React from 'react';

export const NoticeFillIcon: React.FC<{
  width?: number;
  height?: number;
  className?: string;
  color?: string;
  backgroundColor?: string;
}> = ({
  width = 24,
  height = 24,
  className,
  color = 'white',
  backgroundColor = '#33363D',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        width="16.6667"
        height="16.6667"
        rx="8.33333"
        transform="matrix(1 0 0 -1 1.66797 18.3333)"
        fill={backgroundColor}
      />
      <path
        d="M9.91862 7.86743C10.4709 7.86743 10.9186 7.41972 10.9186 6.86743C10.9186 6.31515 10.4709 5.86743 9.91862 5.86743C9.36634 5.86743 8.91862 6.31515 8.91862 6.86743C8.91862 7.41972 9.36634 7.86743 9.91862 7.86743Z"
        fill={color}
      />
      <path
        d="M8.70195 8.69255C8.5915 8.69255 8.50195 8.78209 8.50195 8.89254V9.49254C8.50195 9.603 8.5915 9.69254 8.70195 9.69254H9.21992C9.33038 9.69254 9.41992 9.78209 9.41992 9.89254V12.9947H8.53594C8.42548 12.9947 8.33594 13.0843 8.33594 13.1947V13.7947C8.33594 13.9052 8.42548 13.9947 8.53594 13.9947H11.4693C11.5797 13.9947 11.6693 13.9052 11.6693 13.7947V13.1947C11.6693 13.0843 11.5797 12.9947 11.4693 12.9947H10.9199V8.89254C10.9199 8.78209 10.8304 8.69255 10.7199 8.69255H8.70195Z"
        fill={color}
      />
    </svg>
  );
};
