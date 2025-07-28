import { forwardRef } from 'react';

import { type SelectLabelProps } from './types';
import { useSelect } from './use-select';

export const SelectLabel = forwardRef<HTMLDivElement, SelectLabelProps>((props, ref) => {
  const { ...rest } = useSelect();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { children, ...labelProps } = props;

  return (
    <div ref={ref} {...labelProps}>
      {children}
    </div>
  );
});

SelectLabel.displayName = 'SelectLabel';
