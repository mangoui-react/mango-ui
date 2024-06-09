'use client';

import React, { useCallback, useState } from 'react';

import cn from '@/utils/cn';

export default function ChangeInput(): JSX.Element {
  const [value, setValue] = useState('');
  const onChange = useCallback((event: React.ChangeEvent<any>) => {
    setValue(event.target.value as string);
  }, []);

  return (
    <div>
      <div>Change Event</div>
      <textarea
        className={cn(
          'inline-block w-full min-w-0 relative border border-solid border-border box-border bg-component-bg text-inherit py-1 px-3 leading-none',
          'focus:outline-0 focus:border-primary focus:border focus:shadow-[0_0_2px_border-primary]',
        )}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
