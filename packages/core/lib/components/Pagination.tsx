import React, { useState } from 'react';
import { Label } from './Label';
import { Button } from './Button';

function generateSequence(current: number, count: number): number[] {
  const result: number[] = [];
  const start = current - Math.floor((count - 1) / 2);

  for (let i = 0; i < count; i++) {
    result.push(start + i);
  }

  return result;
}

function generateRangeGuaranteedSequence(
  current: number,
  count: number,
  min: number,
  max: number
): (number | string)[] {
  const initialSequence = generateSequence(current, count);
  const filteredSequence = initialSequence.filter(
    (num) => num >= min && num <= max
  );
  const result: (number | 'ellipsis')[] = [...filteredSequence];

  if (!filteredSequence.includes(min)) {
    if (filteredSequence[0] - min > 1) {
      result.unshift(min, 'ellipsis');
    } else {
      result.unshift(min);
    }
  }

  if (!filteredSequence.includes(max)) {
    if (max - filteredSequence[filteredSequence.length - 1] > 1) {
      result.push('ellipsis', max);
    } else {
      result.push(max);
    }
  }

  return result;
}

export const PrevIcon: React.FC = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 18L9 12L15 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const NextIcon: React.FC = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 18L15 12L9 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const EllipsisIcon: React.FC = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle cx="5" cy="12" r="2" fill="currentColor" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
    <circle cx="19" cy="12" r="2" fill="currentColor" />
  </svg>
);

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  visiblePages?: number;
  allowDirectInput?: boolean;
  twoLines?: boolean;
}

export const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
  visiblePages: propVisiblePages = 5,
  allowDirectInput = false,
  twoLines = false,
}) => {
  const [inputPage, setInputPage] = useState<number>(currentPage);
  const visiblePages = Math.max(
    propVisiblePages % 2 === 0 ? propVisiblePages + 1 : propVisiblePages,
    1
  );
  const showTwoLines = twoLines && !allowDirectInput;
  const pageNumbers = generateRangeGuaranteedSequence(
    currentPage,
    visiblePages,
    1,
    totalPages
  );

  const handleDirectInput = () => {
    if (inputPage >= 1 && inputPage <= totalPages) {
      onPageChange(inputPage);
    } else {
      onPageChange(currentPage);
    }
  };

  const renderPageNumbers = () => (
    <ul className="flex gap-2">
      {pageNumbers.map((page, index) => (
        <li key={index}>
          {page === 'ellipsis' ? (
            <span className="w-8 h-8 flex items-center justify-center text-gray-70">
              <EllipsisIcon />
            </span>
          ) : (
            <button
              onClick={() => onPageChange(page as number)}
              className={`w-8 h-8 rounded-2 focus:outline-none focus:ring-2 focus:ring-primary-50 ${
                currentPage === page
                  ? 'bg-primary text-white font-bold'
                  : 'text-gray-70 hover:bg-gray-20'
              }`}
              aria-current={currentPage === page ? 'page' : undefined}
              aria-label={`페이지 ${page}`}
            >
              {page}
            </button>
          )}
        </li>
      ))}
    </ul>
  );

  const prevButton = (
    <button
      onClick={() => onPageChange(currentPage - 1)}
      disabled={currentPage === 1}
      className="flex items-center text-gray-70 justify-center p-2 pr-4 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-50 disabled:opacity-50 hover:bg-gray-20"
      aria-label="이전 페이지"
    >
      <PrevIcon />
      이전
    </button>
  );

  const nextButton = (
    <button
      onClick={() => onPageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
      className="flex items-center text-gray-70 justify-center p-2 pl-4 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-50 disabled:opacity-50 hover:bg-gray-20"
      aria-label="다음 페이지"
    >
      다음
      <NextIcon />
    </button>
  );

  const inputPageNumber = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      onPageChange(inputPage);
      return;
    }
  };

  return (
    <nav
      aria-label={'페이지 네비게이션'}
      className={`${'flex items-center gap-6 flex-col'}`}
    >
      {showTwoLines && (
        <div className={`flex items-center gap-2`}>
          {prevButton}
          {nextButton}
        </div>
      )}
      <div className={`flex items-center gap-2`}>
        {!showTwoLines && prevButton}
        {renderPageNumbers()}
        {!showTwoLines && nextButton}
      </div>
      {allowDirectInput && (
        <div className="flex items-center gap-2">
          <input
            type="number"
            value={inputPage}
            onChange={(e) => setInputPage(parseInt(e.target.value, 10))}
            onKeyDown={inputPageNumber}
            min={1}
            max={totalPages}
            className="w-14 px-2 py-1 border border-gray-50 rounded-2 focus:outline-none focus:ring-2 focus:ring-primary-50 text-right"
            aria-label="페이지 직접 입력"
          />
          <Label size="s" color="gray-60">
            / {totalPages}
          </Label>
          <Button
            onClick={handleDirectInput}
            size="x-small"
            variant="secondary"
            className="focus:outline-none focus:ring-2 focus:ring-primary-50 ml-4"
          >
            이동
          </Button>
        </div>
      )}
    </nav>
  );
};
