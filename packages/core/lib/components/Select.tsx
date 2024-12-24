import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  forwardRef,
} from 'react';

interface Option {
  value: string;
  label: string;
}

export interface SelectProps {
  options: Option[];
  placeholder: string;
  size?: 'lg' | 'md' | 'sm';
}

interface SelectTriggerProps {
  onClick: () => void;
  children: React.ReactNode;
  isOpen: boolean;
  onKeyDown: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
}

export type SelectSize = 'lg' | 'md' | 'sm';
interface SelectValueProps {
  placeholder: string;
  selectedValue: string | null;
  size?: SelectSize;
}

interface SelectContentProps {
  isOpen: boolean;
  children: React.ReactNode;
}

interface SelectGroupProps {
  children: React.ReactNode;
}

interface SelectLabelProps {
  children: React.ReactNode;
  size?: SelectSize;
}

const sizeClasses = {
  lg: 'h-12 text-lg', // Large size
  md: 'h-10 text-base', // Medium size
  sm: 'h-8 text-sm', // Small size
};

interface SelectItemProps {
  size?: SelectSize;
  value: string;
  onClick: (value: string) => void;
  isSelected: boolean;
  isHovered: boolean;
  isFocused: boolean;
  children: React.ReactNode;
  onKeyDown: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export const SelectTrigger = forwardRef<HTMLButtonElement, SelectTriggerProps>(
  ({ onClick, children, isOpen, onKeyDown }, ref) => (
    <button
      onClick={onClick}
      onKeyDown={onKeyDown}
      aria-expanded={isOpen}
      aria-haspopup="listbox"
      aria-label="Select an option"
      className={`w-full py-3 px-4 border ${
        isOpen ? 'border-blue-500' : 'border-gray-300'
      } rounded-md text-left bg-white shadow-sm hover:shadow-md focus:outline-none
       focus:ring-2 focus:ring-blue-500 focus:border-blue-500 flex justify-between items-center transition-colors duration-150 ease-in-out`}
      tabIndex={0}
      ref={ref}
    >
      {children}
      <span
        className={`ml-2 inline-block transform ${
          isOpen ? 'rotate-180' : 'rotate-0'
        } text-gray-800`}
      >
        ▼
      </span>
    </button>
  )
);

export const SelectValue = ({
  selectedValue,
  placeholder,
  size = 'md',
}: SelectValueProps) => (
  <div
    className={`text-gray-900 ${sizeClasses[size]} flex items-center text-left`}
  >
    {selectedValue ? selectedValue : placeholder}
  </div>
);
export const SelectContent = ({ isOpen, children }: SelectContentProps) => (
  <div
    role="listbox"
    aria-hidden={!isOpen}
    className={`absolute w-full max-h-60 overflow-y-auto border border-gray-300 rounded-md bg-white shadow-lg z-10 left-0 mt-2 ${
      isOpen ? 'block' : 'hidden'
    } transition-opacity duration-150 ease-in-out`}
  >
    {children}
  </div>
);

export const SelectGroup = ({ children }: SelectGroupProps) => (
  <div className="p-4">{children}</div>
);

export const SelectLabel = ({ children, size = 'md' }: SelectLabelProps) => (
  <div className={`font-semibold text-gray-700 ${sizeClasses[size]}`}>
    {children}
  </div>
);

export const SelectItem = forwardRef<HTMLButtonElement, SelectItemProps>(
  (
    {
      size = 'md',
      value,
      onClick,
      isSelected,
      children,
      isHovered,
      isFocused,
      onKeyDown,
      onMouseEnter,
      onMouseLeave,
    },
    ref
  ) => {
    return (
      <button
        onClick={() => onClick(value)}
        onKeyDown={onKeyDown}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        aria-selected={isSelected}
        className={`w-full p-3 text-left px-6 rounded-md outline-none
          ${sizeClasses[size]} // Apply size classes based on size prop
          ${isSelected ? 'text-blue-500' : ''}
          ${isHovered || isFocused ? 'bg-blue-100 text-blue-500' : ''}
          `}
        ref={ref}
      >
        {children}
      </button>
    );
  }
);

export const Select = ({ options, placeholder, size = 'md' }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const triggerRef = useRef<HTMLButtonElement>(null);
  const allSelectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hoveredIndex !== null) {
      setFocusedIndex(hoveredIndex); // Sync focus with hovered index **
    }
  }, [hoveredIndex]);

  useEffect(() => {
    const selectedIndex = options.findIndex(
      ({ value }) => value === selectedValue
    );

    setFocusedIndex(selectedIndex);
    setHoveredIndex(selectedIndex); // Ensure hoveredIndex matches selectedIndex
  }, [selectedValue, options]);

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLButtonElement>) => {
      switch (e.key) {
        case 'Enter':
          e.preventDefault();
          if (isOpen && focusedIndex !== null) {
            handleSelect(options[focusedIndex].value);
          }
          break;
        case 'Escape':
          setIsOpen(false);
          triggerRef.current?.focus(); // Return focus to trigger
          break;
        case 'ArrowDown':
          e.preventDefault();
          if (!isOpen) {
            return;
          }
          setFocusedIndex(moveFocus('down', options.length - 1, focusedIndex));
          setHoveredIndex(null); // Clear hover on ArrowDown

          break;
        case 'ArrowUp':
          e.preventDefault();
          if (!isOpen) {
            return;
          }
          setFocusedIndex(moveFocus('up', options.length - 1, focusedIndex));
          setHoveredIndex(null); // Clear hover on ArrowUp

          break;
        default:
          break;
      }
    },
    [isOpen, focusedIndex, options, handleSelect]
  );

  const handleItemKeyDown = useCallback(
    (index: number) => (e: React.KeyboardEvent<HTMLButtonElement>) => {
      switch (e.key) {
        case 'Enter':
          e.preventDefault();
          handleSelect(options[index].value);
          break;
        case 'ArrowDown':
          e.preventDefault();
          setFocusedIndex(moveFocus('down', options.length - 1, focusedIndex));
          setHoveredIndex(null); // Clear hover on ArrowDown
          break;
        case 'ArrowUp':
          e.preventDefault();
          setFocusedIndex(moveFocus('up', options.length - 1, focusedIndex));
          setHoveredIndex(null); // Clear hover on ArrowUp
          break;
        default:
          break;
      }
    },
    [handleSelect, options]
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!allSelectRef.current) {
        return;
      }

      if (!allSelectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={allSelectRef}>
      <SelectTrigger
        onClick={() => setIsOpen(!isOpen)}
        isOpen={isOpen}
        onKeyDown={handleKeyDown}
        ref={triggerRef}
      >
        <SelectValue
          selectedValue={selectedValue}
          placeholder={placeholder}
          size={size}
        />
      </SelectTrigger>
      <SelectContent isOpen={isOpen}>
        <SelectGroup>
          <SelectLabel size={size}>Options</SelectLabel>

          {options.map((option, index) => (
            <SelectItem
              size={size}
              key={option.value}
              value={option.value}
              onClick={handleSelect}
              isSelected={selectedValue === option.value}
              isHovered={hoveredIndex === index}
              isFocused={focusedIndex === index}
              onKeyDown={handleItemKeyDown(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => {
                if (focusedIndex !== index) {
                  setHoveredIndex(null);
                }
              }}
            >
              {option.value}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </div>
  );
};

const moveFocus = (
  direction: 'up' | 'down',
  maxIndex: number,
  currentIndex: number | null
) => {
  if (direction === 'down') {
    return currentIndex === null ? 0 : Math.min(maxIndex, currentIndex + 1);
  } else {
    return currentIndex === null ? maxIndex : Math.max(0, currentIndex - 1);
  }
};
