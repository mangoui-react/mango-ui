import React from 'react';

export interface SelectLabelProps extends React.ComponentPropsWithoutRef<'span'> {}

const SelectLabel = React.forwardRef<HTMLSpanElement, SelectLabelProps>((props, ref) => {
  const { children, ...labelProps } = props;

  return (
    <span ref={ref} {...labelProps}>
      {children}
    </span>
  );
});

SelectLabel.displayName = 'Select.Label';

export default SelectLabel;
