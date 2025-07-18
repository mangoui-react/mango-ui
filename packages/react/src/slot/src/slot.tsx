import React from 'react';

import { composeRefs } from '@mangoui/compose-refs';

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

  if (React.isValidElement(children)) {
    const childrenRef = getElementRef(children);
    const mergedSlotRefs = composeRefs(ref, childrenRef);
    // const mergedSlotRefs = useMergedRef(ref, (children as any).ref); react19 에서 element.ref 제거로 인해

    return React.cloneElement(children, {
      ...mergeProps(rest, children.props as AnyProps),
      ref: ref ? mergedSlotRefs : childrenRef, // (children as any).ref, // react19 에서 element.ref 제거로 인해
    });
  }

  // return React.Children.count(children) > 1 ? React.Children.only(null) : null;
  return <>{children}</>;
});

// Before React 19 accessing `element.props.ref` will throw a warning and suggest using `element.ref`
// After React 19 accessing `element.ref` does the opposite.
// https://github.com/facebook/react/pull/28348
//
// Access the ref using the method that doesn't yield a warning.
function getElementRef(element: React.ReactElement): any {
  // React <=18 in DEV
  let getter = Object.getOwnPropertyDescriptor(element.props, 'ref')?.get;
  let mayWarn = getter && 'isReactWarning' in getter && getter.isReactWarning;
  if (mayWarn) {
    return (element as any).ref;
  }

  // React 19 in DEV
  getter = Object.getOwnPropertyDescriptor(element, 'ref')?.get;
  mayWarn = getter && 'isReactWarning' in getter && getter.isReactWarning;
  if (mayWarn) {
    return (element.props as { ref?: React.Ref<unknown> }).ref;
  }

  // Not DEV
  return (element.props as { ref?: React.Ref<unknown> }).ref || (element as any).ref;
}

Slot.displayName = 'Slot';

export default Slot;
