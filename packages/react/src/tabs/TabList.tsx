import React from 'react';

export type TabListProps = React.ComponentPropsWithoutRef<'ul'>;

const TabList = React.forwardRef<HTMLUListElement, TabListProps>((props, ref) => {
  const { children, ...rest } = props;

  return (
    <ul ref={ref} role="tablist" {...rest}>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement, {
            // index: child.props.index ?? index,
            index,
          });
        }
        return child;
      })}
    </ul>
  );
});

TabList.displayName = 'Tabs.TabList';

export default TabList;
