import React from 'react';

import { useSelected } from './hooks/use-selected';
import { TabsContext } from './tabs';

export interface TabProps extends React.ComponentPropsWithoutRef<'li'> {
  index?: number;
  value?: string;
  /** tab disabled */
  disabled?: boolean;
}

const Tab = React.forwardRef<HTMLLIElement, TabProps>((props, ref) => {
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

Tab.displayName = 'Tabs.Tab';

export default Tab;
