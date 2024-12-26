import React, { forwardRef, useState } from 'react';
import { Label } from './Label';

type TextAreaProps = {
  id: string;
  title?: string;
  description?: string;
  size?: 'small' | 'medium' | 'large';
  maxLength?: number;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      title,
      description,
      id,
      placeholder,
      size = 'medium',
      maxLength,
      onChange,
      ...props
    },
    ref,
  ) => {
    const [charCount, setCharCount] = useState(0);

    const sizeClasses = {
      small: 'h-24',
      medium: 'h-32',
      large: 'h-40',
    }[size];

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setCharCount(e.target.value.length);
      if (onChange) {
        onChange(e);
      }
    };

    return (
      <div className="flex flex-col gap-1 justify-center">
        {title && (
          <Label htmlFor={id} weight="bold">
            {title}
          </Label>
        )}
        {description && (
          <Label size={'s'} color={'gray-50'}>
            {description}
          </Label>
        )}
        <div className="relative">
          <textarea
            ref={ref}
            id={id}
            className={`
              w-full ${sizeClasses} px-4 py-3 text-gray-70 border rounded-4 
              focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary mt-3
              border-gray-50 transition duration-150 ease-in-out resize-none
            `}
            placeholder={placeholder}
            maxLength={maxLength}
            onChange={handleChange}
            {...props}
          />
          {maxLength && (
            <div className="flex justify-end gap-1">
              <Label color={'primary'} size={'xs'}>
                {charCount}
              </Label>
              <Label size={'xs'}>{`/${maxLength}`}</Label>
            </div>
          )}
        </div>
      </div>
    );
  },
);
