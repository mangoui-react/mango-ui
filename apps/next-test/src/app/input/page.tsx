import React from 'react';

import cn from '@/utils/cn';

import AddonInputExam from './examples/AddonInputExam';
import ChangeInput from './examples/ChangeInput';
import ClearableInput from './examples/ClearableInput';
import LeftInsideIconInput from './examples/LeftInsideIconInput';
import RightInsideIconInput from './examples/RightInsideIconInput';

const inputStyle = cn(
  'inline-block w-full min-w-0 relative border border-solid border-border box-border bg-component-bg text-inherit py-1 px-3 leading-none',
  'focus:outline-0 focus:border-primary focus:border focus:shadow-[0_0_2px_border-primary]',
);

export default function InputPage(): React.JSX.Element {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <input
          className={cn(
            'border-border bg-component-bg relative box-border inline-block w-full min-w-0 border border-solid px-3 py-1 leading-none text-inherit',
            'focus:border-primary focus:border focus:shadow-[0_0_2px_border-primary] focus:outline-0',
          )}
        />
      </div>

      <ChangeInput />

      <div>Disabled</div>
      <div className="flex flex-col gap-2">
        <input
          className={cn(
            inputStyle,
            'disabled:bg-disabled-bg disabled:text-disabled-text disabled:border-disabled-border disabled:cursor-not-allowed',
          )}
          disabled
        />
        <input
          className={cn(
            inputStyle,
            'disabled:bg-disabled-bg disabled:text-disabled-text disabled:border-disabled-border disabled:cursor-not-allowed',
          )}
          disabled
          defaultValue="defaultValue."
        />
        <input
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
        <input className={inputStyle} readOnly />
        <input className={inputStyle} readOnly defaultValue="defaultValue." />
        <input className={inputStyle} readOnly placeholder="placeholder." />
      </div>

      <div>Size</div>
      <div className="flex flex-col gap-2">
        <input className={cn(inputStyle, 'px-3 py-[1px] text-sm')} defaultValue="small" />
        <input className={inputStyle} defaultValue="medium" />
        <input className={cn(inputStyle, 'px-3 py-3 text-lg')} defaultValue="large" />
      </div>

      <div>Invalid</div>
      <div className="flex flex-col gap-2">
        <input
          className={cn(
            'bg-component-bg relative box-border inline-block w-full min-w-0 border border-solid px-3 py-1 leading-none text-inherit',
            'border-error',
            'focus:border-error focus:border focus:shadow-[0_0_2px_border-error] focus:outline-0',
          )}
        />
      </div>

      <div>Clearable</div>
      <div>
        <ClearableInput />
      </div>

      <div>Left/Right Inside</div>
      <div className="flex flex-row gap-2">
        <div className="flex w-full flex-col gap-2">
          <LeftInsideIconInput />
          <div>
            With clearable
            <LeftInsideIconInput />
          </div>
        </div>
        <div className="flex w-full flex-col gap-2">
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
