'use client';

import React from 'react';

import { Button, ButtonProps } from 'mango-headlessui';
import cn from '@/utils/cn';

function CustomButton({ className, children, ...rest }: ButtonProps): JSX.Element {
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
      onClick={() => {
        console.log('click');
      }}
      {...rest}
    >
      {children}
    </Button>
  );
}

export default function ButtonGroupExam(): JSX.Element {
  return (
    <div className="flex flex-col gap-2">
      <div>Button Group</div>
      <Button.Group>
        <CustomButton>버튼1</CustomButton>
        <CustomButton>버튼2</CustomButton>
        <CustomButton>버튼3</CustomButton>
      </Button.Group>

      <Button.Group disabled>
        <CustomButton>버튼1</CustomButton>
        <CustomButton>버튼2</CustomButton>
        <CustomButton>버튼3</CustomButton>
      </Button.Group>

      <Button.Group className="flex gap-1">
        <CustomButton>버튼1</CustomButton>
        <CustomButton>버튼2</CustomButton>
        <CustomButton>버튼3</CustomButton>
      </Button.Group>

      <Button.Group className="flex flex-col gap-1">
        <CustomButton>버튼1</CustomButton>
        <CustomButton>버튼2</CustomButton>
        <CustomButton>버튼3</CustomButton>
      </Button.Group>
    </div>
  );
}
