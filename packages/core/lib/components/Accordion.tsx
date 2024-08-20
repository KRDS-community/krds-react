import React, { useState, useRef } from 'react';
import { Label } from './Label';

const ChevronIcon: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
    aria-hidden="true"
  >
    <path
      d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"
      fill="currentColor"
    />
  </svg>
);

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  children,
  isOpen,
  onClick,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const buttonId = `accordion-button-${title.replace(/\s+/g, '-').toLowerCase()}`;
  const contentId = `accordion-content-${title.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div className="w-full border-b border-gray-20">
      <button
        className="w-full text-left py-6 px-6 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-primary-50"
        onClick={onClick}
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <Label size="l" weight="bold" className="cursor-pointer">
          {title}
        </Label>
        <span className="ml-6 flex-shrink-0">
          <ChevronIcon isOpen={isOpen} />
        </span>
        <span className="sr-only">{isOpen ? '접기' : '펼치기'}</span>
      </button>
      <div
        ref={contentRef}
        role="region"
        aria-labelledby={buttonId}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px',
        }}
      >
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

interface AccordionProps {
  items: Omit<AccordionItemProps, 'isOpen' | 'onClick'>[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="border-t border-gray-20 overflow-hidden">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          {...item}
          isOpen={openIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};
