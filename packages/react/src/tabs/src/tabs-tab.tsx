import React from 'react';

import { useSelected } from './hooks/use-selected';
import { TabsContext } from './tabs';

export interface TabsTabProps extends React.ComponentPropsWithoutRef<'li'> {
  index?: number;
  value?: string;
  /** tab disabled */
  disabled?: boolean;
}

const TabsTab = React.forwardRef<HTMLLIElement, TabsTabProps>((props, ref) => {
  const { index = 0, value, disabled, children, onClick, ...rest } = props;

  const { selectedIndex, selectedValue, setSelected /* , orientation */ } =
    React.useContext(TabsContext);

  const isSelected = useSelected({ index, value, selectedIndex, selectedValue });

  const handleClick = (event: React.MouseEvent<HTMLLIElement>): void => {
    if (disabled) return;
    setSelected(index, value);
    onClick?.(event);
  };

  return (
    <li
      ref={ref}
      role="tab"
      data-state={isSelected ? 'active' : 'inactive'}
      data-disabled={disabled ? '' : undefined}
      {...rest}
      onClick={handleClick}
    >
      {children}
    </li>
  );
});

TabsTab.displayName = 'Tabs.Tab';

export default TabsTab;
