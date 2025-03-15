import React from 'react';

export const DownloadIcon: React.FC<{
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
        d="M12.7992 12.673L12.7992 2.78975C12.7992 2.34792 12.441 1.98975 11.9992 1.98975C11.5574 1.98975 11.1992 2.34792 11.1992 2.78975L11.1992 12.6811L7.819 9.1539C7.5133 8.8349 7.00688 8.82413 6.68788 9.12983C6.36889 9.43554 6.35811 9.94195 6.66382 10.2609L11.9954 15.8243L17.3269 10.2609C17.6326 9.94195 17.6218 9.43554 17.3028 9.12983C16.9838 8.82413 16.4774 8.83491 16.1717 9.1539L12.7992 12.673ZM3.00016 15.3605C3.46408 15.3605 3.84016 15.7366 3.84016 16.2005V18.9605H20.1602V16.2005C20.1602 15.7366 20.5362 15.3605 21.0002 15.3605C21.4641 15.3605 21.8402 15.7366 21.8402 16.2005V19.8005C21.8402 20.2645 21.4641 20.6405 21.0002 20.6405H3.00016C2.53624 20.6405 2.16016 20.2645 2.16016 19.8005V16.2005C2.16016 15.7366 2.53624 15.3605 3.00016 15.3605Z"
        fill={color}
      />
    </svg>
  );
};
