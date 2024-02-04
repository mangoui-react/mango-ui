import React from 'react';

import { useMergedRef } from '../../hooks';

type AnyProps = Record<string, any>;

function mergeProps(slotProps: AnyProps, childProps: AnyProps): any {
  // all child props should override
  const overrideProps = { ...childProps };

  Object.keys(childProps).forEach((propName) => {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];

    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      // if the handler exists on both, we compose them
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args: unknown[]) => {
          slotPropValue(...args);
          childPropValue(...args);
        };
      }
      // but if it exists only on the slot, we use only this one
      else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    }
    // if it's `style`, we merge them
    else if (propName === 'style') {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === 'className') {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(' ');
    }
  });

  return { ...slotProps, ...overrideProps };
}

interface SlotProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

const Slot = React.forwardRef<HTMLElement, SlotProps>((props, ref) => {
  const { children, ...rest } = props;

  const mergedSlotRefs = useMergedRef(ref, (children as any).ref);

  if (React.isValidElement(children)) {
    return React.cloneElement(children, {
      ...mergeProps(rest, children.props),
      ref: ref ? mergedSlotRefs : (children as any).ref,
    });
  }

  // return React.Children.count(children) > 1 ? React.Children.only(null) : null;
  return <>{children}</>;
});

export default Slot;
