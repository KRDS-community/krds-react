import { Color, getTextColorClassname } from '../colors/color.type';

export type SpinnerProps = {
  size?: 'x-small' | 'small' | 'medium' | 'large' | 'x-large';
  color?: Color;
  className?: string;
};

export const Spinner = ({
  size = 'medium',
  color,
  className = '',
}: SpinnerProps) => {
  const sizeStyles: { style: string; fontSize: 'l' | 'm' | 's' | 'xs' } = {
    'x-small': {
      style: 'w-4 h-4',
      fontSize: 's' as const,
    },
    small: {
      style: 'w-5 h-5',
      fontSize: 'm' as const,
    },
    medium: {
      style: 'w-6 h-6',
      fontSize: 'm' as const,
    },
    large: {
      style: 'w-7 h-7',
      fontSize: 'l' as const,
    },
    'x-large': {
      style: 'w-8 h-8',
      fontSize: 'l' as const,
    },
  }[size];

  const colorStyles = color ? getTextColorClassname(color) : '';

  const spinnerStyles = `
    ${sizeStyles.style} 
    ${colorStyles}
    ${className}
  `;

  return (
    <div className={spinnerStyles} role="status" aria-hidden="true">
      <svg
        className="animate-spin"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="9"
          stroke="currentColor"
          strokeWidth="2"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M12 2a10 10 0 0110 10 10 10 0 01-5 8.66l-1-1.73a8 8 0 004-6.93 8 8 0 00-8-8V2z"
        ></path>
      </svg>
    </div>
  );
};
