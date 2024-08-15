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

const SelectTrigger: React.FC<SelectTriggerProps> = ({
  onClick,
  children,
  isOpen,
}) => (
  <button
    onClick={onClick}
    className={`w-[220px] py-2 px-4 border ${
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
const SelectValue: React.FC<SelectValueProps> = ({
  selectedValue,
  placeholder,
}) => <div>{selectedValue ? selectedValue : placeholder}</div>;

const SelectContent: React.FC<SelectContentProps> = ({ isOpen, children }) => (
  <div
    className={`absolute w-[220px] border border-gray-300 rounded-md bg-white shadow-lg z-10 left-0 mt-2 ${
      isOpen ? 'block' : 'hidden'
    }`}
  >
    {children}
  </div>
);

const SelectGroup: React.FC<SelectGroupProps> = ({ children }) => (
  <div className="p-2">{children}</div>
);

const SelectLabel: React.FC<SelectLabelProps> = ({ children }) => (
  <div className="mb-1 font-semibold text-gray-700">{children}</div>
);

const SelectItem: React.FC<SelectItemProps> = ({
  value,
  onClick,
  isSelected,
  children,
}) => (
  <button
    onClick={() => onClick(value)}
    className={`w-full p-2 text-left ${
      isSelected ? 'text-blue-700 font-semibold' : 'text-gray-900'
    } hover:bg-blue-100`}
  >
    {children}
  </button>
);

const Select: React.FC<SelectProps> = ({ options, placeholder }) => {
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

// 예시로 사용할 데이터
const options = [
  { value: 'option1', label: '옵션1' },
  { value: 'option2', label: '옵션2' },
  { value: 'option3', label: '옵션3' },
  { value: 'option4', label: '옵션4' },
];

const SelectDemo: React.FC = () => {
  return (
    <div className="p-4">
      <Select options={options} placeholder="플레이스홀더" />
    </div>
  );
};

export default SelectDemo;
