'use client';

import React, { useCallback, useState } from 'react';

import CloseSolidIcon from '@/icons/CloseSolidIcon';
import SearchIcon from '@/icons/SearchIcon';
import cn from '@/utils/cn';

export default function RightInsideIconInput(): JSX.Element {
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
        'flex items-center border border-solid border-border rounded-sm bg-component-bg',
        'focus-within:outline-0 focus-within:border-primary focus-within:border focus-within:shadow-[0_0_2px_border-primary]',
      )}
    >
      <input
        className={cn(
          'inline-block w-full min-w-0 relative border-0 border-solid border-border box-border bg-component-bg text-inherit py-1 px-3 leading-none',
          'focus:outline-0',
        )}
        value={value}
        onChange={handleChange}
      />
      {value && (
        <span
          className="flex items-center cursor-pointer mr-2 text-[#D9D9D9]"
          onClick={handleClear}
        >
          <CloseSolidIcon />
        </span>
      )}
      <span className="flex items-center mr-2">
        <SearchIcon />
      </span>
    </span>
  );
}
