'use client';

import React from 'react';

import cn from '@/utils/cn';

export default function Disabled(): React.JSX.Element {
  return (
    <button
      className={cn(
        'box-border cursor-pointer text-inherit',
        'border-border border border-solid',
        'align-middle',
        'inline-flex flex-[0_0_auto] content-center items-center justify-center',
        'active:hover:border-primary active:hover:transition-all',
        'px-3.5 py-2 text-base',
        'disabled:bg-disabled-bg disabled:text-disabled-text disabled:border-disabled-border active:disabled:border-disabled-border disabled:cursor-not-allowed',
      )}
      disabled
      onClick={() => {
        console.log('click');
      }}
    >
      버튼
    </button>
  );
}
