import React from 'react';

import BellIcon from '@/icons/BellIcon';
import cn from '@/utils/cn';

import ButtonGroupExam from './examples/ButtonGroupExam';
import Disabled from './examples/Disabled';

export default function ButtonPage(): React.JSX.Element {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <button
          className={cn(
            'box-border cursor-pointer text-inherit',
            'border-border border border-solid',
            'align-middle',
            'inline-flex flex-[0_0_auto] content-center items-center justify-center',
            'active:hover:border-primary active:hover:transition-all',
            'px-3.5 py-2 text-base',
          )}
        >
          버튼
        </button>
      </div>

      <div className="flex items-center justify-start gap-1">
        <button
          className={cn(
            'box-border cursor-pointer text-inherit',
            'border-border border border-solid',
            'align-middle',
            'inline-flex flex-[0_0_auto] content-center items-center justify-center',
            'active:hover:border-primary active:hover:transition-all',
            'px-3.5 py-2 text-base',
          )}
        >
          <BellIcon />
        </button>
        <button
          className={cn(
            'box-border cursor-pointer text-inherit',
            'border-border border border-solid',
            'align-middle',
            'inline-flex flex-[0_0_auto] content-center items-center justify-center',
            'active:hover:border-primary active:hover:transition-all',
            'px-3.5 py-2 text-base',
          )}
        >
          <BellIcon className="mr-2" />
          아이콘
        </button>
      </div>

      <div>
        <Disabled />
      </div>

      <div>
        <ButtonGroupExam />
      </div>
    </div>
  );
}
