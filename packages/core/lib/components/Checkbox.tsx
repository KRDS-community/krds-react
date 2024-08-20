import React from 'react';
import { Label } from './Label';

export type CheckboxStatus = 'on' | 'off' | 'intermediate';

export type CheckboxProps = {
  status: CheckboxStatus;
  onChange: (newStatus: CheckboxStatus) => void;
  label?: string;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  id: string;
};

const CheckIcon = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 6L9 17L4 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IntermediateIcon = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 12H19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Checkbox: React.FC<CheckboxProps> = ({
  status,
  onChange,
  label,
  disabled = false,
  size = 'md',
  id,
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  const labelSizeClasses = {
    sm: 's' as const,
    md: 'm' as const,
    lg: 'l' as const,
  };

  const handleChange = () => {
    if (!disabled) {
      const newStatus: CheckboxStatus = status === 'on' ? 'off' : 'on';
      onChange(newStatus);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleChange();
    }
  };

  const baseClasses = `
    inline-flex items-center justify-center border rounded cursor-pointer
    ${sizeClasses[size]} transition-all duration-300 ease-in-out`;

  const stateClasses = disabled
    ? 'bg-gray-10 border-gray-30 text-gray-40 cursor-not-allowed'
    : status === 'on'
      ? 'bg-primary border-primary text-gray-0'
      : status === 'intermediate'
        ? 'bg-primary border-primary text-gray-0'
        : 'bg-gray-0 border-gray-30 hover:border-primary';

  return (
    <div
      className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-200 focus:outline-none"
      tabIndex={disabled ? -1 : 0}
      role="checkbox"
      aria-checked={
        status === 'on' ? 'true' : status === 'intermediate' ? 'mixed' : 'false'
      }
      aria-disabled={disabled}
      onKeyDown={handleKeyDown}
    >
      <div
        className={`${baseClasses} ${stateClasses} relative`}
        onClick={handleChange}
      >
        <div
          className="absolute inset-0 transition-opacity duration-300 ease-in-out"
          style={{ opacity: status === 'on' ? 1 : 0 }}
        >
          <CheckIcon />
        </div>
        <div
          className="absolute inset-0 transition-opacity duration-300 ease-in-out"
          style={{ opacity: status === 'intermediate' ? 1 : 0 }}
        >
          <IntermediateIcon />
        </div>
        <input
          type="checkbox"
          id={id}
          checked={status === 'on'}
          onChange={handleChange}
          disabled={disabled}
          className="sr-only"
        />
      </div>
      {label && (
        <Label
          htmlFor={id}
          size={labelSizeClasses[size]}
          color={disabled ? 'gray-40' : 'gray-90'}
          className={`${disabled ? 'cursor-not-allowed' : 'cursor-pointer'} transition-all duration-300 ease-in-out`}
        >
          {label}
        </Label>
      )}
    </div>
  );
};
