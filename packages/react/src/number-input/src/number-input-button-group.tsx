import React from 'react';

export interface NumberInputButtonGroupProps extends React.ComponentPropsWithoutRef<'span'> {}

// TODO: 필요한지 확인필요
const NumberInputButtonGroup = React.forwardRef<HTMLSpanElement, NumberInputButtonGroupProps>(
  (props, ref) => {
    const { children, ...rest } = props;

    return (
      <span {...rest} ref={ref}>
        {children}
      </span>
    );
  },
);

NumberInputButtonGroup.displayName = 'NumberInput.ButtonGroup';

export default NumberInputButtonGroup;
