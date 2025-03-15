import React from 'react';

export const NoticeFillHighContrastIcon: React.FC<{
  width?: number;
  height?: number;
  className?: string;
  color?: string;
  backgroundColor?: string;
}> = ({
  width = 24,
  height = 24,
  className,
  color = '#1E2124',
  backgroundColor = '#F4F5F6',
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
        transform="matrix(1 0 0 -1 1.66602 18.3335)"
        fill={backgroundColor}
      />
      <path
        d="M9.91471 7.86768C10.467 7.86768 10.9147 7.41996 10.9147 6.86768C10.9147 6.31539 10.467 5.86768 9.91471 5.86768C9.36243 5.86768 8.91471 6.31539 8.91471 6.86768C8.91471 7.41996 9.36243 7.86768 9.91471 7.86768Z"
        fill={color}
      />
      <path
        d="M8.66471 8.69279C8.57267 8.69279 8.49805 8.76741 8.49805 8.85946V9.52612C8.49805 9.61817 8.57267 9.69279 8.66471 9.69279H9.24935C9.3414 9.69279 9.41602 9.76741 9.41602 9.85946V12.995H8.4987C8.40665 12.995 8.33203 13.0696 8.33203 13.1616V13.8283C8.33203 13.9203 8.40665 13.995 8.4987 13.995H11.4987C11.5907 13.995 11.6654 13.9203 11.6654 13.8283V13.1616C11.6654 13.0696 11.5907 12.995 11.4987 12.995H10.916V8.85946C10.916 8.76741 10.8414 8.69279 10.7493 8.69279H8.66471Z"
        fill={color}
      />
    </svg>
  );
};
