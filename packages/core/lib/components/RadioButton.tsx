import React, { useRef, useEffect } from 'react';
import { Label } from './Label';

type RadioButtonProps = {
  id: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
  label: string;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
};

const RadioButton: React.FC<RadioButtonProps> = ({
  id,
  name,
  value,
  checked,
  onChange,
  label,
  disabled = false,
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'w-5 h-5',
    md: 'w-6 h-6',
    lg: 'w-7 h-7',
  };

  const innerCircleSizes = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  const labelSizeClasses = {
    sm: 's' as const,
    md: 'm' as const,
    lg: 'l' as const,
  };

  const handleChange = () => {
    if (!disabled) {
      onChange(value);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleChange();
    }
  };

  const baseClasses = `
    inline-flex items-center justify-center border rounded-full
    ${sizeClasses[size]} transition-all duration-300 ease-in-out
  `;

  const stateClasses = disabled
    ? 'bg-gray-10 border-gray-30 cursor-not-allowed'
    : checked
    ? 'bg-gray-0 border-primary cursor-pointer'
    : 'bg-gray-0 border-gray-30 hover:border-primary cursor-pointer';

  return (
    <div
      className="flex items-center gap-3 focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-200 focus:outline-none"
      role="radio"
      aria-checked={checked}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      onKeyDown={handleKeyDown}
    >
      <div className={`${baseClasses} ${stateClasses}`} onClick={handleChange}>
        <div
          className={`
            ${
              disabled && checked
                ? 'bg-gray-40'
                : checked
                ? 'bg-primary'
                : 'bg-transparent'
            }
            rounded-full transition-all duration-300 ease-in-out
            ${innerCircleSizes[size]}
          `}
        />
        <input
          type="radio"
          id={id}
          name={name}
          value={value}
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
          className="sr-only"
          tabIndex={-1}
        />
      </div>
      <Label
        htmlFor={id}
        size={labelSizeClasses[size]}
        color={disabled ? 'gray-40' : 'gray-90'}
        className={`${
          disabled ? 'cursor-not-allowed' : 'cursor-pointer'
        } transition-colors duration-300`}
      >
        {label}
      </Label>
    </div>
  );
};

type RadioButtonGroupProps = {
  name: string;
  options: Array<{ value: string; label: string }>;
  selectedValue?: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  direction?: 'horizontal' | 'vertical';
};

export const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
  name,
  options,
  selectedValue,
  onChange,
  disabled = false,
  size = 'md',
  direction = 'vertical',
}) => {
  const directionClasses = direction === 'horizontal' ? 'flex-row' : 'flex-col';
  const gapStyle = direction === 'horizontal' ? 'gap-5' : 'gap-2';
  const groupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!groupRef.current || disabled) return;

      const radioButtons = Array.from(
        groupRef.current.querySelectorAll('input[type="radio"]'),
      );
      const currentIndex = radioButtons.findIndex(
        (radio) => (radio as HTMLInputElement).checked,
      );

      let nextIndex: number;

      switch (event.key) {
        case 'ArrowUp':
        case 'ArrowLeft':
          event.preventDefault();
          nextIndex =
            currentIndex > 0 ? currentIndex - 1 : radioButtons.length - 1;
          break;
        case 'ArrowDown':
        case 'ArrowRight':
          event.preventDefault();
          nextIndex =
            currentIndex < radioButtons.length - 1 ? currentIndex + 1 : 0;
          break;
        default:
          return;
      }

      const nextRadio = radioButtons[nextIndex] as HTMLInputElement;
      nextRadio.checked = true;
      nextRadio.focus();
      onChange(nextRadio.value);
    };

    const currentRef = groupRef.current;
    currentRef?.addEventListener('keydown', handleKeyDown);

    return () => {
      currentRef?.removeEventListener('keydown', handleKeyDown);
    };
  }, [onChange, disabled]);

  return (
    <div
      className={`flex ${directionClasses} ${gapStyle}`}
      ref={groupRef}
      role="radiogroup"
    >
      {options.map((option) => (
        <RadioButton
          key={option.value}
          id={`${name}-${option.value}`}
          name={name}
          value={option.value}
          checked={selectedValue === option.value}
          onChange={onChange}
          label={option.label}
          disabled={disabled}
          size={size}
        />
      ))}
    </div>
  );
};
