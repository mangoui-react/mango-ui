'use client';

import React, { useCallback, useState } from 'react';

import CloseSolidIcon from '@/icons/CloseSolidIcon';
import cn from '@/utils/cn';

export interface AddonInputProps {
  leftAddon?: React.ReactNode;
  rightAddon?: React.ReactNode;
}

export default function AddonInput({ leftAddon, rightAddon }: AddonInputProps): JSX.Element {
  const [value, setValue] = useState('');

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }, []);

  const handleClear = useCallback(() => {
    setValue('');
  }, []);

  return (
    <span className={cn('flex items-center')}>
      <span className="flex items-center border border-solid border-border border-r-0 py-1 px-3">
        {leftAddon}
      </span>
      {/* ClearableInput 컴포넌트와 동일 */}
      <span
        className={cn(
          'flex items-center border border-solid border-border rounded-sm bg-component-bg',
          'focus-within:outline-0 focus-within:border-primary focus-within:border focus-within:shadow-[0_0_2px_border-primary]',
          'w-full',
        )}
      >
        <input
          className={cn(
            'inline-block w-full min-w-0 relative border-0 border-solid border-border box-border bg-component-bg text-inherit py-1 px-3',
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
      </span>

      <span className="flex items-center border border-solid border-border border-l-0 py-1 px-3">
        {rightAddon}
      </span>
    </span>
  );
}
