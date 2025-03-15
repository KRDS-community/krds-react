import React from 'react';

export const SwiperStopIcon: React.FC<{
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
        d="M7.79922 4.99971C7.79922 4.55788 7.44105 4.19971 6.99922 4.19971C6.55739 4.19971 6.19922 4.55788 6.19922 4.99971V18.9997C6.19922 19.4415 6.55739 19.7997 6.99922 19.7997C7.44105 19.7997 7.79922 19.4415 7.79922 18.9997V4.99971ZM17.7992 4.99971C17.7992 4.55788 17.441 4.19971 16.9992 4.19971C16.5574 4.19971 16.1992 4.55788 16.1992 4.99971V18.9997C16.1992 19.4415 16.5574 19.7997 16.9992 19.7997C17.441 19.7997 17.7992 19.4415 17.7992 18.9997V4.99971Z"
        fill={color}
      />
    </svg>
  );
};
