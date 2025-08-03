import React from 'react';

import { useComposedRefs } from '@mangoui/compose-refs';
import { Slot } from '@mangoui/slot';

import { useSelectRootContext } from '../root/select-root-context';

export interface SelectValueProps extends React.ComponentPropsWithoutRef<'span'> {
  placeholder?: React.ReactNode;
  asChild?: boolean;
}

export type SelectValueElement = HTMLSpanElement;

const SelectValue = React.forwardRef<SelectValueElement, SelectValueProps>((props, ref) => {
  const rootContext = useSelectRootContext();

  const {
    placeholder = '',
    children = rootContext.selectedItemText,
    asChild = false,
    ...valueProps
  } = props;

  const composedRefs = useComposedRefs(ref, rootContext.onValueNodeChange);

  const Component = asChild ? Slot : 'span';

  return (
    <Component {...valueProps} ref={composedRefs} style={{ pointerEvents: 'none' }}>
      {rootContext.value === '' || rootContext.value === undefined ? <>{placeholder}</> : children}
    </Component>
  );
});

SelectValue.displayName = 'Select.Value';

export default SelectValue;
