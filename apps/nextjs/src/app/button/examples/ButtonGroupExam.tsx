'use client';

import React from 'react';

import cn from '@/utils/cn';

function CustomButton({
  children,
  ...rest
}: React.ComponentPropsWithoutRef<'button'>): JSX.Element {
  return (
    <button
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
    </button>
  );
}

export default function ButtonGroupExam(): JSX.Element {
  return (
    <div className="flex flex-col gap-2">
      <div>Button Group</div>
      <div>
        <CustomButton>버튼1</CustomButton>
        <CustomButton>버튼2</CustomButton>
        <CustomButton>버튼3</CustomButton>
      </div>

      <div>
        <CustomButton disabled>버튼1</CustomButton>
        <CustomButton disabled>버튼2</CustomButton>
        <CustomButton disabled>버튼3</CustomButton>
      </div>

      <div className="flex gap-1">
        <CustomButton>버튼1</CustomButton>
        <CustomButton>버튼2</CustomButton>
        <CustomButton>버튼3</CustomButton>
      </div>

      <div className="flex flex-col gap-1">
        <CustomButton>버튼1</CustomButton>
        <CustomButton>버튼2</CustomButton>
        <CustomButton>버튼3</CustomButton>
      </div>
    </div>
  );
}
