import { Label } from './Label';

export type SwitchProps = {
  status: boolean;
  onChange: (checked: boolean) => void;
  size?: 'lg' | 'md';
  disabled?: boolean;
  label?: string;
  labelPosition?: 'left' | 'right';
  id: string;
};

export const Switch = ({
  status,
  size = 'md',
  disabled = false,
  onChange,
  label,
  labelPosition = 'right',
  id,
}: SwitchProps) => {
  const handleToggle = () => {
    if (!disabled) {
      onChange(!status);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (!disabled) {
        onChange(!status);
      }
    }
  };

  const sizeClasses = {
    lg: 'w-9 h-7',
    md: 'w-8 h-6',
  };

  const toggleClasses = {
    lg: { style: 'w-6 h-6', translate: 'translate-x-5' },
    md: { style: 'w-5 h-5', translate: 'translate-x-4' },
  };

  const labelSizeClasses = {
    lg: { size: 'm' as const, gap: 'gap-3' },
    md: { size: 's' as const, gap: 'gap-2' },
  }[size];

  const switchComponent = (
    <div
      className={`relative inline-block ${sizeClasses[size]} ${
        disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
      }`}
      onClick={handleToggle}
      onKeyDown={handleKeyDown}
      role="switch"
      aria-checked={status}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
    >
      <input
        id={id}
        type="checkbox"
        className="sr-only"
        checked={status}
        disabled={disabled}
        onChange={handleToggle}
        aria-hidden="true"
      />
      <div
        className={`block rounded-full ${
          status ? 'bg-primary' : 'bg-gray-30'
        } ${sizeClasses[size]}`}
      ></div>
      <div
        className={`absolute top-1 left-1 bg-white rounded-full transition-transform duration-200 ease-in-out transform ${
          toggleClasses[size].style
        } ${status ? toggleClasses[size].translate : ''}`}
      ></div>
    </div>
  );

  if (!label) {
    return switchComponent;
  }

  return (
    <div
      className={`flex ${labelSizeClasses.gap} items-center ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
    >
      {labelPosition === 'left' && (
        <Label htmlFor={id} size={labelSizeClasses.size}>
          {label}
        </Label>
      )}
      {switchComponent}
      {labelPosition === 'right' && (
        <Label htmlFor={id} size={labelSizeClasses.size}>
          {label}
        </Label>
      )}
    </div>
  );
};
