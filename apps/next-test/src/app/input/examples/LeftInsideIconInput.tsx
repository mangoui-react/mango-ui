'use client';

import React, { useCallback, useState } from 'react';

import CloseSolidIcon from '@/icons/CloseSolidIcon';
import SearchIcon from '@/icons/SearchIcon';
import cn from '@/utils/cn';

export default function LeftInsideIconInput(): React.JSX.Element {
  const [value, setValue] = useState('');

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }, []);

  const handleClear = useCallback(() => {
    setValue('');
  }, []);

  return (
    <span
      className={cn(
        'border-border bg-component-bg flex items-center rounded-sm border border-solid',
        'focus-within:border-primary focus-within:border focus-within:shadow-[0_0_2px_border-primary] focus-within:outline-0',
      )}
    >
      <span className="ml-2 flex items-center">
        <SearchIcon />
      </span>
      <input
        className={cn(
          'border-border bg-component-bg relative box-border inline-block w-full min-w-0 border-0 border-solid px-3 py-1 leading-none text-inherit',
          'focus:outline-0',
        )}
        value={value}
        onChange={handleChange}
      />
      {value && (
        <span
          className="mr-2 flex cursor-pointer items-center text-[#D9D9D9]"
          onClick={handleClear}
        >
          <CloseSolidIcon />
        </span>
      )}
    </span>
  );
}
