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
          r="10"
          stroke="currentColor"
          strokeWidth="2"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          strokeWidth="0"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </div>
  );
};
