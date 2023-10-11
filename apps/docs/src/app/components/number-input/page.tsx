'use client'; // TODO: NumberInput.Group 이런 방식이 서버사이드에서는 에러나는거 같음, 방법 찾아야 함.

import React from 'react';

import { NumberInput } from 'mango-headlessui';

import cn from '@/utils/cn';
import ArrowDownIcon from '@/icons/ArrowDownIcon';
import ArrowUpIcon from '@/icons/ArrowUpIcon';

import ChangeNumberInput from './examples/ChangeNumberInput';

const inputStyle = cn(
  'inline-block w-full min-w-0 relative border border-solid border-border box-border bg-component-bg text-inherit py-1 px-3 leading-none',
  'focus:outline-0 focus:border-primary focus:border focus:shadow-[0_0_2px_border-primary]',
  'disabled:bg-disabled-bg disabled:text-disabled-text disabled:border-disabled-border disabled:cursor-not-allowed',
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

export default function NumberInputPage(): JSX.Element {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <NumberInput.Group className="flex items-center">
          <NumberInput className={cn(inputStyle)} />
          <NumberInput.ButtonGroup className="flex flex-col w-5">
            <NumberInput.PlusButton className={buttonStyle}>
              <ArrowUpIcon />
            </NumberInput.PlusButton>
            <NumberInput.MinusButton className={buttonStyle}>
              <ArrowDownIcon />
            </NumberInput.MinusButton>
          </NumberInput.ButtonGroup>
        </NumberInput.Group>
      </div>

      <ChangeNumberInput />

      <div>Disabled</div>
      <div className="flex flex-col gap-2">
        <NumberInput.Group className="flex items-center">
          <NumberInput className={cn(inputStyle)} disabled />
          <NumberInput.ButtonGroup className="flex flex-col w-5">
            <NumberInput.PlusButton className={buttonStyle} disabled>
              <ArrowUpIcon />
            </NumberInput.PlusButton>
            <NumberInput.MinusButton className={buttonStyle} disabled>
              <ArrowDownIcon />
            </NumberInput.MinusButton>
          </NumberInput.ButtonGroup>
        </NumberInput.Group>

        <NumberInput.Group className="flex items-center">
          <NumberInput className={cn(inputStyle)} defaultValue={2} disabled />
          <NumberInput.ButtonGroup className="flex flex-col w-5">
            <NumberInput.PlusButton className={buttonStyle} disabled>
              <ArrowUpIcon />
            </NumberInput.PlusButton>
            <NumberInput.MinusButton className={buttonStyle} disabled>
              <ArrowDownIcon />
            </NumberInput.MinusButton>
          </NumberInput.ButtonGroup>
        </NumberInput.Group>

        <NumberInput.Group className="flex items-center">
          <NumberInput className={cn(inputStyle)} placeholder="placeholder" disabled />
          <NumberInput.ButtonGroup className="flex flex-col w-5">
            <NumberInput.PlusButton className={buttonStyle} disabled>
              <ArrowUpIcon />
            </NumberInput.PlusButton>
            <NumberInput.MinusButton className={buttonStyle} disabled>
              <ArrowDownIcon />
            </NumberInput.MinusButton>
          </NumberInput.ButtonGroup>
        </NumberInput.Group>
      </div>

      <div>ReadOnly</div>
      <div className="flex flex-col gap-2">
        <NumberInput.Group className="flex items-center">
          <NumberInput className={cn(inputStyle)} readOnly />
          <NumberInput.ButtonGroup className="flex flex-col w-5">
            <NumberInput.PlusButton className={cn(buttonStyle, 'cursor-default')}>
              <ArrowUpIcon />
            </NumberInput.PlusButton>
            <NumberInput.MinusButton className={cn(buttonStyle, 'cursor-default')}>
              <ArrowDownIcon />
            </NumberInput.MinusButton>
          </NumberInput.ButtonGroup>
        </NumberInput.Group>

        <NumberInput.Group className="flex items-center">
          <NumberInput className={cn(inputStyle)} defaultValue={10} readOnly />
          <NumberInput.ButtonGroup className="flex flex-col w-5">
            <NumberInput.PlusButton className={cn(buttonStyle, 'cursor-default')}>
              <ArrowUpIcon />
            </NumberInput.PlusButton>
            <NumberInput.MinusButton className={cn(buttonStyle, 'cursor-default')}>
              <ArrowDownIcon />
            </NumberInput.MinusButton>
          </NumberInput.ButtonGroup>
        </NumberInput.Group>

        <NumberInput.Group className="flex items-center">
          <NumberInput className={cn(inputStyle)} placeholder="placeholder." readOnly />
          <NumberInput.ButtonGroup className="flex flex-col w-5">
            <NumberInput.PlusButton className={cn(buttonStyle, 'cursor-default')}>
              <ArrowUpIcon />
            </NumberInput.PlusButton>
            <NumberInput.MinusButton className={cn(buttonStyle, 'cursor-default')}>
              <ArrowDownIcon />
            </NumberInput.MinusButton>
          </NumberInput.ButtonGroup>
        </NumberInput.Group>
      </div>

      <div>Invalid</div>
      <div className="flex flex-col gap-2">
        {/* <NumberInput invalid /> */}
        <NumberInput.Group className="flex items-center">
          <NumberInput
            className={cn(
              'inline-block w-full min-w-0 relative border border-solid border-border box-border bg-component-bg text-inherit py-1 px-3 leading-none',
              'border-error',
              'focus:outline-0 focus:border-error focus:border focus:shadow-[0_0_2px_border-error]',
            )}
          />
          <NumberInput.ButtonGroup className="flex flex-col w-5">
            <NumberInput.PlusButton className={buttonStyle}>
              <ArrowUpIcon />
            </NumberInput.PlusButton>
            <NumberInput.MinusButton className={buttonStyle}>
              <ArrowDownIcon />
            </NumberInput.MinusButton>
          </NumberInput.ButtonGroup>
        </NumberInput.Group>
      </div>

      <div>Min/Max</div>
      <div className="flex flex-col gap-2">
        <NumberInput.Group className="flex items-center">
          <NumberInput className={cn(inputStyle)} min={0} max={100} step={5} defaultValue={50} />
          <NumberInput.ButtonGroup className="flex flex-col w-5">
            <NumberInput.PlusButton className={buttonStyle}>
              <ArrowUpIcon />
            </NumberInput.PlusButton>
            <NumberInput.MinusButton className={buttonStyle}>
              <ArrowDownIcon />
            </NumberInput.MinusButton>
          </NumberInput.ButtonGroup>
        </NumberInput.Group>
      </div>
    </div>
  );
}
