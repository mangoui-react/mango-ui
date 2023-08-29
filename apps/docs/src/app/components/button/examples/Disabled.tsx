'use client';

import React from 'react';

import { Button } from 'mango-headlessui';
import cn from '@/utils/cn';

export default function Disabled(): JSX.Element {
  return (
    <Button
      className={cn(
        'cursor-pointer text-inherit box-border',
        'border border-solid border-border',
        'align-middle',
        'inline-flex flex-[0_0_auto] items-center justify-center content-center',
        'active:hover:border-primary active:hover:transition-all',
        'py-2 px-3.5 text-base',
        'disabled:cursor-not-allowed disabled:bg-disabled-bg disabled:text-disabled-text disabled:border-disabled-border active:disabled:border-disabled-border',
      )}
      disabled
      onClick={() => {
        console.log('click');
      }}
    >
      버튼
    </Button>
  );
}
