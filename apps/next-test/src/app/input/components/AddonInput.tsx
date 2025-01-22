'use client';

import React, { useCallback, useState } from 'react';

import CloseSolidIcon from '@/icons/CloseSolidIcon';
import cn from '@/utils/cn';

export interface AddonInputProps {
  leftAddon?: React.ReactNode;
  rightAddon?: React.ReactNode;
}

export default function AddonInput({ leftAddon, rightAddon }: AddonInputProps): React.JSX.Element {
  const [value, setValue] = useState('');

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }, []);

  const handleClear = useCallback(() => {
    setValue('');
  }, []);

  return (
    <span className={cn('flex items-center')}>
      <span className="border-border flex items-center border border-r-0 border-solid px-3 py-1">
        {leftAddon}
      </span>
      {/* ClearableInput 컴포넌트와 동일 */}
      <span
        className={cn(
          'border-border bg-component-bg flex items-center rounded-sm border border-solid',
          'focus-within:border-primary focus-within:border focus-within:shadow-[0_0_2px_border-primary] focus-within:outline-0',
          'w-full',
        )}
      >
        <input
          className={cn(
            'border-border bg-component-bg relative box-border inline-block w-full min-w-0 border-0 border-solid px-3 py-1 text-inherit',
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

      <span className="border-border flex items-center border border-l-0 border-solid px-3 py-1">
        {rightAddon}
      </span>
    </span>
  );
}
