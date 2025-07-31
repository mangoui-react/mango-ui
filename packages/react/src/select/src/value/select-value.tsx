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
  const context = useSelectRootContext();

  const {
    placeholder = '',
    children = context.selectedItemText,
    asChild = false,
    ...valueProps
  } = props;

  const composedRefs = useComposedRefs(ref, context.onValueNodeChange);

  const Component = asChild ? Slot : 'span';

  return (
    <Component {...valueProps} ref={composedRefs} style={{ pointerEvents: 'none' }}>
      {context.value === '' || context.value === undefined ? <>{placeholder}</> : children}
    </Component>
  );
});

SelectValue.displayName = 'Select.Value';

export default SelectValue;
