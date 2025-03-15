import React from 'react';

export const DeleteFillIcon: React.FC<{
  width?: number;
  height?: number;
  className?: string;
  color?: string;
  backgroundColor?: string;
}> = ({
  width = 20,
  height = 20,
  className,
  color = '#33363D',
  backgroundColor = '#CDD1D5',
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
        x="18.332"
        y="1.6665"
        width="16.6667"
        height="16.6667"
        rx="8.33333"
        transform="rotate(90 18.332 1.6665)"
        fill={backgroundColor}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.7201 5.77876C6.45975 5.51841 6.03764 5.51841 5.77729 5.77876C5.51694 6.03911 5.51694 6.46122 5.77729 6.72157L9.05654 10.0008L5.7786 13.2788C5.51825 13.5391 5.51825 13.9612 5.7786 14.2216C6.03894 14.4819 6.46106 14.4819 6.7214 14.2216L9.99935 10.9436L13.2773 14.2216C13.5376 14.4819 13.9598 14.4819 14.2201 14.2216C14.4805 13.9612 14.4805 13.5391 14.2201 13.2788L10.9422 10.0008L14.2214 6.72157C14.4818 6.46122 14.4818 6.03911 14.2214 5.77876C13.9611 5.51841 13.5389 5.51841 13.2786 5.77876L9.99935 9.05801L6.7201 5.77876Z"
        fill={color}
      />
    </svg>
  );
};
