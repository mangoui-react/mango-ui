'use client';

import React, { useCallback, useState } from 'react';

import { NumberInput, NumberInputValue } from '@melio-ui/react';

import ArrowDownIcon from '@/icons/ArrowDownIcon';
import ArrowUpIcon from '@/icons/ArrowUpIcon';
import cn from '@/utils/cn';

const inputStyle = cn(
  'inline-block w-full min-w-0 relative border border-solid border-border box-border bg-component-bg text-inherit py-1 px-3 leading-none',
  'focus:outline-0 focus:border-primary focus:border focus:shadow-[0_0_2px_border-primary]',
);

const buttonStyle = cn(
  'cursor-pointer text-inherit box-border',
  'border border-solid border-border',
  // 'align-middle',
  // 'inline-flex flex-[0_0_auto] items-center justify-center content-center',
  'active:hover:border-primary active:hover:transition-all',
  'disabled:cursor-not-allowed disabled:bg-disabled-bg disabled:text-disabled-text disabled:border-disabled-border active:disabled:border-disabled-border',
  'bg-transparent',
  'w-full h-4 p-0',
);

export default function ChangeNumberInput(): JSX.Element {
  const [value, setValue] = useState<NumberInputValue>(null);
  // const onChange = useCallback((event: React.ChangeEvent<any>, newValue: string) => {
  //   // setValue(event.target.value as string);
  //   setValue(newValue);
  // }, []);

  const onChange = useCallback((val: NumberInputValue) => {
    setValue(val);

    if (typeof val === 'string') {
      console.log('input number 유효하지 않은 값', val);
      return;
    }
    console.log('input number 유효한 값', val);
  }, []);

  return (
    <div>
      <div>Change Event</div>
      <NumberInput.Root className="flex items-center" value={value} onValueChange={onChange}>
        <NumberInput.Field className={cn(inputStyle)} />
        <NumberInput.ButtonGroup className="flex flex-col w-5">
          <NumberInput.Plus className={buttonStyle}>
            <ArrowUpIcon />
          </NumberInput.Plus>
          <NumberInput.Minus className={buttonStyle}>
            <ArrowDownIcon />
          </NumberInput.Minus>
        </NumberInput.ButtonGroup>
      </NumberInput.Root>
    </div>
  );
}
