import React from 'react';

export const InformationFillHighContrastIcon: React.FC<{
  width?: number;
  height?: number;
  className?: string;
  color?: string;
  backgroundColor?: string;
}> = ({
  width = 20,
  height = 20,
  className,
  color = '#1E2124',
  backgroundColor = '#ABD8E3',
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
        transform="matrix(1 0 0 -1 1.66602 18.333)"
        fill={backgroundColor}
      />
      <path
        d="M9.91471 7.86719C10.467 7.86719 10.9147 7.41947 10.9147 6.86719C10.9147 6.3149 10.467 5.86719 9.91471 5.86719C9.36243 5.86719 8.91471 6.3149 8.91471 6.86719C8.91471 7.41947 9.36243 7.86719 9.91471 7.86719Z"
        fill={color}
      />
      <path
        d="M8.69805 8.6923C8.58759 8.6923 8.49805 8.78184 8.49805 8.8923V9.4923C8.49805 9.60276 8.58759 9.6923 8.69805 9.6923H9.21602C9.32647 9.6923 9.41602 9.78184 9.41602 9.8923V12.9945H8.53203C8.42157 12.9945 8.33203 13.084 8.33203 13.1945V13.7945C8.33203 13.9049 8.42157 13.9945 8.53203 13.9945H11.4654C11.5758 13.9945 11.6654 13.9049 11.6654 13.7945V13.1945C11.6654 13.084 11.5758 12.9945 11.4654 12.9945H10.916V8.8923C10.916 8.78184 10.8265 8.6923 10.716 8.6923H8.69805Z"
        fill={color}
      />
    </svg>
  );
};
