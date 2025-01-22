'use client';

import React from 'react';

import cn from '@/utils/cn';

function CustomButton({
  children,
  ...rest
}: React.ComponentPropsWithoutRef<'button'>): React.JSX.Element {
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
      onClick={() => {
        console.log('click');
      }}
      {...rest}
    >
      {children}
    </button>
  );
}

export default function ButtonGroupExam(): React.JSX.Element {
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
