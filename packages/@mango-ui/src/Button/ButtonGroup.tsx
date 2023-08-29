// 'use client';

import React from 'react';

import { ComponentBaseProps } from '../types/common';

import { ButtonProps } from './Button';

export interface ButtonGroupProps extends ComponentBaseProps, React.HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
}

const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ disabled, children, ...rest }, ref) => {
    return (
      <div ref={ref} {...rest}>
        {React.Children.map(children, (child, index) => {
          if (!React.isValidElement(child)) {
            return null;
          }

          return React.cloneElement<ButtonProps>(child as React.ReactElement<ButtonProps>, {
            disabled: child.props.disabled ?? disabled,
          });
        })}
      </div>
    );
  },
);

ButtonGroup.displayName = 'Button.Group';

export default ButtonGroup;
