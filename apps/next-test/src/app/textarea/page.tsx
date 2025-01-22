import React from 'react';

import cn from '@/utils/cn';

import ChangeInput from './examples/ChangeInput';

const inputStyle = cn(
  'inline-block w-full min-w-0 relative border border-solid border-border box-border bg-component-bg text-inherit py-1 px-3 leading-none',
  'focus:outline-0 focus:border-primary focus:border focus:shadow-[0_0_2px_border-primary]',
);

export default function TextareaPage(): React.JSX.Element {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <textarea
          className={cn(
            'border-border bg-component-bg relative box-border inline-block w-full min-w-0 border border-solid px-3 py-1 leading-none text-inherit',
            'focus:border-primary focus:border focus:shadow-[0_0_2px_border-primary] focus:outline-0',
          )}
        />
      </div>

      <ChangeInput />

      <div>Disabled</div>
      <div className="flex flex-col gap-2">
        <textarea
          className={cn(
            inputStyle,
            'disabled:bg-disabled-bg disabled:text-disabled-text disabled:border-disabled-border disabled:cursor-not-allowed',
          )}
          disabled
        />
        <textarea
          className={cn(
            inputStyle,
            'disabled:bg-disabled-bg disabled:text-disabled-text disabled:border-disabled-border disabled:cursor-not-allowed',
          )}
          disabled
          defaultValue="defaultValue."
        />
        <textarea
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
        <textarea className={inputStyle} readOnly />
        <textarea className={inputStyle} readOnly defaultValue="defaultValue." />
        <textarea className={inputStyle} readOnly placeholder="placeholder." />
      </div>

      <div>Size</div>
      <div className="flex flex-col gap-2">
        <textarea className={cn(inputStyle, 'px-3 py-[1px] text-sm')} defaultValue="small" />
        <textarea className={inputStyle} defaultValue="medium" />
        <textarea className={cn(inputStyle, 'px-3 py-3 text-lg')} defaultValue="large" />
      </div>

      <div>Invalid</div>
      <div className="flex flex-col gap-2">
        <textarea
          className={cn(
            'bg-component-bg relative box-border inline-block w-full min-w-0 border border-solid px-3 py-1 leading-none text-inherit',
            'border-error',
            'focus:border-error focus:border focus:shadow-[0_0_2px_border-error] focus:outline-0',
          )}
        />
      </div>
    </div>
  );
}
