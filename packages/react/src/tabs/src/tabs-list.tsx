import React from 'react';

export type TabsListProps = React.ComponentPropsWithoutRef<'ul'>;

interface TabsTabProps {
  index?: number;
}

const TabsList = React.forwardRef<HTMLUListElement, TabsListProps>((props, ref) => {
  const { children, ...rest } = props;

  return (
    <ul role="tablist" {...rest} ref={ref}>
      {/* eslint-disable-next-line @typescript-eslint/promise-function-async */}
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<TabsTabProps>, {
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
