import React from 'react';

export const CompleteFillIcon: React.FC<{
  width?: number;
  height?: number;
  className?: string;
  color?: string;
  backgroundColor?: string;
}> = ({
  width = 20,
  height = 20,
  className,
  color = 'white',
  backgroundColor = '#256EF4',
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
      <path
        d="M1.66602 9.99967C1.66602 14.602 5.39698 18.333 9.99935 18.333C14.6017 18.333 18.3327 14.602 18.3327 9.99967C18.3327 5.3973 14.6017 1.66634 9.99935 1.66634C5.39698 1.66634 1.66602 5.3973 1.66602 9.99967Z"
        fill={backgroundColor}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.1261 6.94931C13.4301 7.15704 13.5082 7.57187 13.3004 7.87587L9.88376 12.8759C9.77185 13.0396 9.59283 13.1451 9.39533 13.1635C9.19783 13.182 9.00238 13.1115 8.86208 12.9713L6.77744 10.888C6.51701 10.6277 6.51688 10.2056 6.77715 9.94515C7.03741 9.68472 7.45952 9.68459 7.71996 9.94485L9.23624 11.4602L12.1996 7.12361C12.4073 6.81962 12.8221 6.74158 13.1261 6.94931Z"
        fill={color}
      />
    </svg>
  );
};
