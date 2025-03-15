import React from 'react';

export const UrgentBadgeOkIcon: React.FC<{
  width?: number;
  height?: number;
  className?: string;
  triangleColor?: string;
  markColor?: string;
}> = ({
  width = 24,
  height = 24,
  className,
  triangleColor = 'white',
  markColor = '#005713',
}) => {
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
        d="M10.6547 4.48297C11.2526 3.44734 12.7474 3.44734 13.3453 4.48297L20.9884 17.7211C21.5863 18.7567 20.8389 20.0513 19.643 20.0513H4.35696C3.16111 20.0513 2.41371 18.7567 3.01163 17.7211L10.6547 4.48297Z"
        fill={triangleColor}
        stroke={triangleColor}
        stroke-width="1.6"
      />
      <rect x="11" y="8.52344" width="2" height="5.6" fill={markColor} />
      <rect x="11" y="15.8203" width="2" height="2" fill={markColor} />
    </svg>
  );
};
