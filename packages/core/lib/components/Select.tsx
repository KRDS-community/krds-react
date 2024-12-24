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
  size?: 'lg' | 'md' | 'sm';
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
  lg: {
    button: 'h-[56px] text-label-l', // 56px height with label-l text size
    option: 'py-4',  // Adequate padding for 56px height
    icon: 'h-6 w-6'
  },
  md: {
    button: 'h-[48px] text-label-m', // 48px height with label-m text size
    option: 'py-3',  // Adequate padding for 48px height
    icon: 'h-5 w-5'
  },
  sm: {
    button: 'h-[40px] text-label-s', // 40px height with label-s text size
    option: 'py-2',  // Adequate padding for 40px height
    icon: 'h-4 w-4'
  }
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
  ({ onClick, children, isOpen, onKeyDown, size = 'md' }, ref) => (
    <button
      onClick={onClick}
      onKeyDown={onKeyDown}
      aria-expanded={isOpen}
      aria-haspopup="listbox"
      aria-label="Select an option"
      className={`
        w-full min-w-[240px] px-5 border
        ${isOpen ? 'border-primary-50' : 'border-gray-30'}
        ${sizeClasses[size].button}
        rounded-4 text-left bg-white shadow-sm hover:shadow-md focus:outline-none
        focus:ring-2 focus:ring-primary-50 focus:border-primary-50 
        flex justify-between items-center transition-colors duration-150 ease-in-out
      `}
      tabIndex={0}
      ref={ref}
    >
      {children}
      <span
        className={`
          ml-2 inline-block transform
          ${isOpen ? 'rotate-180' : 'rotate-0'}
          text-gray-80
        `}
      >
        ▼
      </span>
    </button>
  )
);

export const SelectValue = ({
  selectedValue,
  placeholder,
  size = 'md'
}: SelectValueProps) => (
  <div className={`text-gray-90 ${sizeClasses[size].button} flex items-center text-left`}>
    {selectedValue || placeholder}
  </div>
);

export const SelectContent = ({ isOpen, children }: SelectContentProps) => (
  <div
    role="listbox"
    aria-hidden={!isOpen}
    className={`absolute w-full min-w-[240px] max-h-60 overflow-y-auto border border-gray-300 rounded-md bg-white shadow-lg z-10 left-0 mt-2 ${
      isOpen ? 'block' : 'hidden'
    } transition-opacity duration-150 ease-in-out`}
  >
    {children}
  </div>
);

export const SelectGroup = ({ children }: SelectGroupProps) => (
  <div className="p-2">{children}</div>
);

export const SelectLabel = ({ children, size = 'md' }: SelectLabelProps) => (
  <div className={`font-semibold text-gray-700 ${sizeClasses[size]}`}>
    {children}
  </div>
);

export const SelectItem = forwardRef<HTMLButtonElement, SelectItemProps>(
  ({
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
  }, ref) => (
    <button
      onClick={() => onClick(value)}
      onKeyDown={onKeyDown}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      aria-selected={isSelected}
      className={`
        w-full px-5 text-left rounded-4 outline-none
        ${sizeClasses[size].button}
        ${isSelected ? 'text-primary-50 bg-primary-5' : 'text-gray-90'}
        ${isHovered || isFocused ? 'bg-primary-5' : ''}
      `}
      ref={ref}
    >
      {children}
    </button>
  )
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
        size={size}
      >
        <SelectValue
          selectedValue={selectedValue}
          placeholder={placeholder}
          size={size}
        />
      </SelectTrigger>
      {options.length > 0 && (
        <SelectContent isOpen={isOpen}>
          <SelectGroup>
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
    )}
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
