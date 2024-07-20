import React from 'react';

export type TabsListProps = React.ComponentPropsWithoutRef<'ul'>;

const TabsList = React.forwardRef<HTMLUListElement, TabsListProps>((props, ref) => {
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

TabsList.displayName = 'Tabs.List';

export default TabsList;
