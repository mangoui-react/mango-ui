import React from 'react';

import { Button } from 'mango-headlessui';
import cn from '@/utils/cn';
import BellIcon from '@/icons/BellIcon';
import Disabled from './examples/Disabled';
import ButtonGroupExam from './examples/ButtonGroupExam';

export default function ButtonPage(): JSX.Element {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <Button
          className={cn(
            'cursor-pointer text-inherit box-border',
            'border border-solid border-border',
            'align-middle',
            'inline-flex flex-[0_0_auto] items-center justify-center content-center',
            'active:hover:border-primary active:hover:transition-all',
            'py-2 px-3.5 text-base',
          )}
        >
          버튼
        </Button>
      </div>

      <div className="flex items-center justify-start gap-1">
        <Button
          className={cn(
            'cursor-pointer text-inherit box-border',
            'border border-solid border-border',
            'align-middle',
            'inline-flex flex-[0_0_auto] items-center justify-center content-center',
            'active:hover:border-primary active:hover:transition-all',
            'py-2 px-3.5 text-base',
          )}
        >
          <BellIcon />
        </Button>
        <Button
          className={cn(
            'cursor-pointer text-inherit box-border',
            'border border-solid border-border',
            'align-middle',
            'inline-flex flex-[0_0_auto] items-center justify-center content-center',
            'active:hover:border-primary active:hover:transition-all',
            'py-2 px-3.5 text-base',
          )}
        >
          <BellIcon className="mr-2" />
          아이콘
        </Button>
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
