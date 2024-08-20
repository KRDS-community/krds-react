import React from 'react';
import { Label } from './Label';

interface BreadcrumbItem {
  label: string;
  onClick: () => void;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  maxLength?: number;
}

const ChevronIcon: React.FC = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M6 4L10 8L6 12"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const EllipsisIcon: React.FC = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle cx="3" cy="8" r="1" fill="currentColor" />
    <circle cx="8" cy="8" r="1" fill="currentColor" />
    <circle cx="13" cy="8" r="1" fill="currentColor" />
  </svg>
);

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  maxLength = 3,
}) => {
  const maxItems = Math.max(2, maxLength);
  const renderItems = () => {
    if (items.length <= maxItems) {
      return items;
    }

    const visibleItems = [];
    visibleItems.push(items[0]);

    if (maxItems > 2) {
      for (let i = 1; i < maxItems - 1; i++) {
        visibleItems.push(items[items.length - maxItems + i]);
      }
    }

    visibleItems.push(items[items.length - 1]);

    return visibleItems;
  };

  return (
    <nav aria-label="브레드크럼" className="py-2">
      <ol className="flex items-center">
        {renderItems().map((item, index) => (
          <li key={index} className="flex items-center m-0">
            {index > 0 && <ChevronIcon />}
            {index === 1 && items.length > maxItems && (
              <>
                <EllipsisIcon />
                <ChevronIcon />
              </>
            )}
            <Label
              onClick={item.onClick}
              color={'gray-90'}
              size="xs"
              className="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary cursor-pointer"
            >
              {item.label}
            </Label>
          </li>
        ))}
      </ol>
    </nav>
  );
};
