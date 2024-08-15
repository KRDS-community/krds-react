import React from 'react';

export type SelectProps = {
  label: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  size?: 'lg' | 'md' | 'sm';
  className?: string;
};

export const Select: React.FC<SelectProps> = ({
  label,
  options,
  value,
  onChange,
  size = 'md',
  className = '',
}) => {
  return (
    <div className={`select-container ${size} ${className}`}>
      <select
        value={value}
        onChange={onChange}
        aria-label={label}
        className="select-element"
      >
        {options.map((option, index) => (
          <option key={index} value={option.value} title={option.label}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
