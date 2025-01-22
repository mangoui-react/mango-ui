'use client';

import React, { useCallback, useState } from 'react';

import cn from '@/utils/cn';

export default function ChangeInput(): React.JSX.Element {
  const [value, setValue] = useState('');
  const onChange = useCallback((event: React.ChangeEvent<any>) => {
    setValue(event.target.value as string);
  }, []);

  return (
    <div>
      <div>Change Event</div>
      <input
        className={cn(
          'border-border bg-component-bg relative box-border inline-block w-full min-w-0 border border-solid px-3 py-1 leading-none text-inherit',
          'focus:border-primary focus:border focus:shadow-[0_0_2px_border-primary] focus:outline-0',
        )}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
