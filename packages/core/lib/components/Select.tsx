import React, { useState } from 'react';

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  placeholder: string;
}

interface SelectTriggerProps {
  onClick: () => void;
  children: React.ReactNode;
  isOpen: boolean;
}

interface SelectValueProps {
  placeholder: string;
  selectedValue: string | null;
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
}

interface SelectItemProps {
  value: string;
  onClick: (value: string) => void;
  isSelected: boolean;
  children: React.ReactNode;
}

const SelectTrigger = ({ onClick, children, isOpen }: SelectTriggerProps) => (
  <button
    onClick={onClick}
    className={`w-[220px] py-3 px-4 border ${
      isOpen ? 'border-blue-500' : 'border-gray-300'
    } rounded-md text-left bg-white shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 flex justify-between items-center`}
  >
    {children}
    <span
      className={`ml-2 inline-block transform ${
        isOpen ? 'rotate-180' : 'rotate-0'
      }`}
    >
      ▼
    </span>
  </button>
);
const SelectValue = ({ selectedValue, placeholder }: SelectValueProps) => (
  <div>{selectedValue ? selectedValue : placeholder}</div>
);

const SelectContent = ({ isOpen, children }: SelectContentProps) => (
  <div
    className={`absolute w-[220px] border border-gray-300 rounded-md bg-white shadow-lg z-10 left-0 mt-2 ${
      isOpen ? 'block' : 'hidden'
    }`}
  >
    {children}
  </div>
);

const SelectGroup = ({ children }: SelectGroupProps) => (
  <div className="p-4">{children}</div>
);

const SelectLabel = ({ children }: SelectLabelProps) => (
  <div className="py-2 font-semibold text-gray-700">{children}</div>
);
const SelectItem = ({
  value,
  onClick,
  isSelected,
  children,
}: SelectItemProps) => (
  <button
    onClick={() => onClick(value)}
    className={`w-full p-3 text-left px-6  ${
      isSelected ? 'text-blue-500 font-semibold' : 'text-gray-900'
    } hover:bg-blue-100 hover:text-blue-500 hover:rounded-md`}
  >
    {children}
  </button>
);
const Select = ({ options, placeholder }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <SelectTrigger onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
        <SelectValue selectedValue={selectedValue} placeholder={placeholder} />
      </SelectTrigger>

      <SelectContent isOpen={isOpen}>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          {options.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
              onClick={handleSelect}
              isSelected={selectedValue === option.value}
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </div>
  );
};

const options = [
  { value: 'option1', label: '옵션1' },
  { value: 'option2', label: '옵션2' },
  { value: 'option3', label: '옵션3' },
  { value: 'option4', label: '옵션4' },
];

const SelectDemo = () => {
  return (
    <div className="p-4">
      <Select options={options} placeholder="플레이스홀더" />
    </div>
  );
};

export default SelectDemo;
