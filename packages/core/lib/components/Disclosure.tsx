import React, { useState, useRef } from 'react';
import { Label } from './Label';

const ChevronIcon: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    className={`transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
    aria-hidden="true"
  >
    <path
      d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
      fill="currentColor"
    />
  </svg>
);

interface DisclosureProps {
  title: string;
  children: React.ReactNode;
}

export const Disclosure: React.FC<DisclosureProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const buttonId = `disclosure-button-${title
    .replace(/\s+/g, '-')
    .toLowerCase()}`;
  const contentId = `disclosure-content-${title
    .replace(/\s+/g, '-')
    .toLowerCase()}`;

  const toggleDisclosure = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full">
      <button
        id={buttonId}
        className="text-left py-4 flex items-center focus:outline-none focus:ring-2 focus:ring-primary-50"
        onClick={toggleDisclosure}
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <span className="mr-4 flex-shrink-0">
          <ChevronIcon isOpen={isOpen} />
        </span>
        <Label size="m" className="cursor-pointer">
          {title}
        </Label>
        <span className="sr-only">{isOpen ? '접기' : '펼치기'}</span>
      </button>
      <div
        id={contentId}
        ref={contentRef}
        role="region"
        aria-labelledby={buttonId}
        className="overflow-hidden transition-all duration-300 ease-in-out pl-10"
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px',
        }}
      >
        <div className="py-4">{children}</div>
      </div>
    </div>
  );
};
