import React, { useState } from 'react';
import { Label } from './Label';

interface CalendarProps {
  mode: 'single' | 'range';
  onSelect: (dates: string[]) => void;
  minYear?: number;
  maxYear?: number;
}

const today = new Date();
const DAYS = ['일', '월', '화', '수', '목', '금', '토'];
const MONTHS = [
  '1월',
  '2월',
  '3월',
  '4월',
  '5월',
  '6월',
  '7월',
  '8월',
  '9월',
  '10월',
  '11월',
  '12월',
];

const TriangleIcon: React.FC<{ direction: 'left' | 'right' }> = ({
  direction,
}) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-gray-600 hover:text-primary transition-colors"
  >
    <path
      d={direction === 'left' ? 'M15 18l-6-6 6-6' : 'M9 18l6-6-6-6'}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function getYearOptions(minYear: number, maxYear: number): number[] {
  return Array.from(
    {
      length: maxYear - minYear + 1,
    },
    (_, i) => minYear + i,
  );
}

export const Calendar: React.FC<CalendarProps> = ({
  mode,
  onSelect,
  minYear,
  maxYear,
}) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);
  const YEARS = getYearOptions(
    minYear || new Date().getFullYear() - 100,
    maxYear || new Date().getFullYear(),
  );

  const getDaysInMonth = (date: Date): Date[] => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const days = new Date(year, month + 1, 0).getDate();
    return Array.from({ length: days }, (_, i) => new Date(year, month, i + 1));
  };

  const handleDateClick = (date: Date) => {
    if (mode === 'single') {
      setSelectedDates([date]);
      onSelect([date.toISOString().split('T')[0]]);
    } else {
      if (selectedDates.length === 0 || selectedDates.length === 2) {
        setSelectedDates([date]);
      } else {
        const [start] = selectedDates;
        const end = date;
        setSelectedDates(start <= end ? [start, end] : [end, start]);
        onSelect([start, end].map((d) => d.toISOString().split('T')[0]));
      }
    }
  };

  const isDateInRange = (date: Date): boolean => {
    if (selectedDates.length !== 2) return false;
    const [start, end] = selectedDates;
    return date >= start && date <= end;
  };

  const isToday = (date: Date): boolean => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const changeMonth = (delta: number) => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + delta, 1),
    );
  };

  const renderCalendar = () => {
    const days = getDaysInMonth(currentDate);
    const firstDayOfMonth = days[0].getDay();

    return (
      <div className="grid grid-cols-7 gap-1">
        {DAYS.map((day) => (
          <div key={day} className="text-center">
            <Label size="xs" color="gray-60" weight="bold">
              {day}
            </Label>
          </div>
        ))}
        {Array.from({ length: firstDayOfMonth }).map((_, index) => (
          <div key={`empty-${index}`} />
        ))}
        {days.map((date) => (
          <div
            key={date.toISOString()}
            onClick={() => handleDateClick(date)}
            className={`
              cursor-pointer text-center px-2 py-1 rounded-4
              ${
                isDateInRange(date) ||
                selectedDates.some((d) => d.getTime() === date.getTime())
                  ? 'bg-primary text-gray-0'
                  : ''
              }
              ${
                isToday(date)
                  ? 'border border-primary'
                  : 'border border-transparent'
              }
            `}
          >
            <Label
              size="s"
              color={
                isDateInRange(date) ||
                selectedDates.some((d) => d.getTime() === date.getTime())
                  ? 'gray-0'
                  : 'gray-90'
              }
              className="cursor-pointer"
            >
              {date.getDate()}
            </Label>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg">
      <div className="flex justify-between items-center mb-2 bg-gray-10">
        <button
          onClick={() => changeMonth(-1)}
          className="p-2 focus:outline-none"
        >
          <TriangleIcon direction="left" />
        </button>
        <div>
          <select
            value={currentDate.getFullYear()}
            onChange={(e) =>
              setCurrentDate(
                new Date(parseInt(e.target.value), currentDate.getMonth(), 1),
              )
            }
            className="mr-2 p-1 border rounded"
          >
            {YEARS.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          <select
            value={currentDate.getMonth()}
            onChange={(e) =>
              setCurrentDate(
                new Date(today.getFullYear(), parseInt(e.target.value), 1),
              )
            }
            className="p-1 border rounded"
          >
            {MONTHS.map((month, index) => (
              <option key={month} value={index}>
                {month}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={() => changeMonth(1)}
          className="p-2 focus:outline-none"
        >
          <TriangleIcon direction="right" />
        </button>
      </div>
      {renderCalendar()}
    </div>
  );
};
