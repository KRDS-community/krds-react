import React from 'react';

export const ResetIcon: React.FC<{
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}> = ({ width = 24, height = 24, className, color = '#33363D' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.86172 12.0002C3.86172 7.51019 7.52324 3.8627 12.0494 3.8627C15.2623 3.8627 18.0423 5.70159 19.3832 8.37745H15.293V9.97745H20.9377C21.3795 9.97745 21.7377 9.61928 21.7377 9.17745V3.53271H20.1377V6.51537C18.3753 3.94775 15.4098 2.2627 12.0494 2.2627C6.64805 2.2627 2.26172 6.6181 2.26172 12.0002C2.26172 17.3822 6.64805 21.7377 12.0494 21.7377C16.9532 21.7377 21.0184 18.1492 21.7277 13.4605C21.7938 13.0236 21.4932 12.6159 21.0564 12.5498C20.6195 12.4837 20.2118 12.7843 20.1457 13.2212C19.554 17.1327 16.1567 20.1377 12.0494 20.1377C7.52325 20.1377 3.86172 16.4902 3.86172 12.0002Z" fill={color}/>
    </svg>
  );
};
