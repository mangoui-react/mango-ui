import { forwardRef } from 'react';

import { type SelectGroupProps } from './types';
import { useSelect } from './use-select';

export const SelectGroup = forwardRef<HTMLDivElement, SelectGroupProps>((props, ref) => {
  const { ...rest } = useSelect();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { children, ...groupProps } = props;

  return (
    <div ref={ref} {...groupProps}>
      {children}
    </div>
  );
});

SelectGroup.displayName = 'SelectGroup';
