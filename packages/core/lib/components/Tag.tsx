import React, { KeyboardEvent, MouseEvent } from 'react';
import { Label } from './Label';

interface TagProps {
  label: string;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onDelete?: (label: string) => void;
  onClick?: (label: string) => void;
  className?: string;
}

export const Tag: React.FC<TagProps> = ({
  label,
  size = 'medium',
  disabled = false,
  onDelete,
  onClick,
  className = '',
}) => {
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      event.stopPropagation();
      if (!disabled && onClick) {
        onClick(label);
      }
    }
  };

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick(label);
    }
  };

  const handleDelete = (event: MouseEvent<HTMLButtonElement>) => {
    if (!disabled && onDelete) {
      onDelete(label);
    }
    event.stopPropagation();
  };

  const handleDeleteKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      event.stopPropagation();
      if (!disabled && onDelete) {
        onDelete(label);
      }
    }
  };

  const sizeStyle = {
    small: { size: 's' as const, style: 'px-4 py-1 flex gap-1' },
    medium: { size: 'm' as const, style: 'px-4 py-1 flex gap-1' },
    large: { size: 'l' as const, style: 'px-4 py-1 flex gap-2' },
  }[size];

  return (
    <div
      className={`inline-flex items-center ${sizeStyle.style} rounded-full ${
        disabled
          ? 'border border-gray-40 bg-gray-20 text-gray-50 cursor-not-allowed'
          : 'border border-gray-40 bg-gray-0 text-gray-90 hover:bg-gray-10 cursor-pointer'
      } ${className}`}
      role="button"
      tabIndex={disabled ? -1 : 0}
      onKeyDown={handleKeyDown}
      onClick={handleClick}
    >
      <Label
        size={sizeStyle.size}
        color={disabled ? 'gray-50' : 'gray-90'}
        className={`${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
      >
        {label}
      </Label>
      {onDelete && (
        <button
          className={`${disabled ? 'cursor-not-allowed' : ''}`}
          onClick={handleDelete}
          onKeyDown={handleDeleteKeyDown}
          tabIndex={0}
          role="button"
          aria-label={`Remove ${label} tag`}
        >
          <svg
            className="w-4 h-4"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3.293 3.293a1 1 0 011.414 0L8 6.586l3.293-3.293a1 1 0 111.414 1.414L9.414 8l3.293 3.293a1 1 0 01-1.414 1.414L8 9.414l-3.293 3.293a1 1 0 01-1.414-1.414L6.586 8 3.293 4.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </div>
  );
};
