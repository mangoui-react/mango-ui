import React from 'react';

import { useComposedRefs } from '@mangoui/compose-refs';
// import ReactDOM from 'react-dom';
import { Slot } from '@mangoui/slot';

import { useSelectItemContext } from '../item/select-item-context';

// import { useSelectRootContext } from '../root/select-root-context';

export interface SelectItemTextProps extends React.ComponentPropsWithoutRef<'span'> {
  asChild?: boolean;
}

export type SelectItemTextElement = HTMLSpanElement;

const SelectItemText = React.forwardRef<SelectItemTextElement, SelectItemTextProps>(
  (props, ref) => {
    const { children, asChild = false, ...itemTextProps } = props;

    // const context = useSelectRootContext();
    const itemContext = useSelectItemContext();

    const composedRefs = useComposedRefs(ref, itemContext.onItemTextChange);

    const Component = asChild ? Slot : 'span';

    return (
      <>
        <Component id={itemContext.textId} {...itemTextProps} ref={composedRefs}>
          {children}
        </Component>
        {/* {itemContext.isSelected && context.valueNode && !context.valueNodeHasChildren
          ? ReactDOM.createPortal(children, context.valueNode)
          : null} */}
      </>
    );
  },
);

SelectItemText.displayName = 'Select.Text';

export default SelectItemText;
