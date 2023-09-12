import React from 'react';

import { Input } from 'mango-headlessui';

import cn from '@/utils/cn';

import ChangeInput from './examples/ChangeInput';
import ClearableInput from './examples/ClearableInput';
import LeftInsideIconInput from './examples/LeftInsideIconInput';
import RightInsideIconInput from './examples/RightInsideIconInput';
import AddonInputExam from './examples/AddonInputExam';

const inputStyle = cn(
  'inline-block w-full min-w-0 relative border border-solid border-border box-border bg-component-bg text-inherit py-1 px-3 leading-none',
  'focus:outline-0 focus:border-primary focus:border focus:shadow-[0_0_2px_border-primary]',
);

export default function InputPage(): JSX.Element {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <Input
          className={cn(
            'inline-block w-full min-w-0 relative border border-solid border-border box-border bg-component-bg text-inherit py-1 px-3 leading-none',
            'focus:outline-0 focus:border-primary focus:border focus:shadow-[0_0_2px_border-primary]',
          )}
        />
      </div>

      <ChangeInput />

      <div>Disabled</div>
      <div className="flex flex-col gap-2">
        <Input
          className={cn(
            inputStyle,
            'disabled:bg-disabled-bg disabled:text-disabled-text disabled:border-disabled-border disabled:cursor-not-allowed',
          )}
          disabled
        />
        <Input
          className={cn(
            inputStyle,
            'disabled:bg-disabled-bg disabled:text-disabled-text disabled:border-disabled-border disabled:cursor-not-allowed',
          )}
          disabled
          defaultValue="defaultValue."
        />
        <Input
          className={cn(
            inputStyle,
            'disabled:bg-disabled-bg disabled:text-disabled-text disabled:border-disabled-border disabled:cursor-not-allowed',
          )}
          disabled
          placeholder="placeholder."
        />
      </div>

      <div>ReadOnly</div>
      <div className="flex flex-col gap-2">
        <Input className={inputStyle} readOnly />
        <Input className={inputStyle} readOnly defaultValue="defaultValue." />
        <Input className={inputStyle} readOnly placeholder="placeholder." />
      </div>

      <div>Size</div>
      <div className="flex flex-col gap-2">
        <Input className={cn(inputStyle, 'py-[1px] px-3 text-sm')} defaultValue="small" />
        <Input className={inputStyle} defaultValue="medium" />
        <Input className={cn(inputStyle, 'py-3 px-3 text-lg')} defaultValue="large" />
      </div>

      <div>Invalid</div>
      <div className="flex flex-col gap-2">
        <Input
          className={cn(
            'inline-block w-full min-w-0 relative border border-solid box-border bg-component-bg text-inherit py-1 px-3 leading-none',
            'border-error',
            'focus:outline-0 focus:border-error focus:border focus:shadow-[0_0_2px_border-error]',
          )}
        />
      </div>

      <div>Clearable</div>
      <div>
        <ClearableInput />
      </div>

      <div>Left/Right Inside</div>
      <div className="flex flex-row gap-2">
        <div className="flex flex-col gap-2 w-full">
          <LeftInsideIconInput />
          <div>
            With clearable
            <LeftInsideIconInput />
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <RightInsideIconInput />
          <div>
            With clearable
            <RightInsideIconInput />
          </div>
        </div>
      </div>

      <AddonInputExam />
    </div>
  );
}
