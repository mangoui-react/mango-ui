import React from 'react';

import { TabsContext, TabsProps } from './Tabs';
import useSelected from './hooks/useSelected';

export interface TabPanelProps
  extends Pick<TabsProps, 'renderMode'>,
    React.ComponentPropsWithoutRef<'div'> {
  index?: number;
  value?: string;
}

const TabContent = React.forwardRef<HTMLDivElement, TabPanelProps>((props, ref) => {
  const { selectedIndex, selectedValue, renderMode: renderModeCtx } = React.useContext(TabsContext);

  const { index = 0, value, renderMode = renderModeCtx, children, ...rest } = props;

  const isSelected = useSelected({ index, value, selectedIndex, selectedValue });

  const selectedRef = React.useRef<boolean>(false);
  const renderChildren = (): React.ReactNode => {
    if (renderMode === 'selected' && isSelected) {
      selectedRef.current = true;
    }

    return renderMode === 'force' || selectedRef.current || isSelected ? children : null;
  };

  return (
    <div ref={ref} role="tabpanel" data-state={isSelected ? 'active' : 'inactive'} {...rest}>
      {/* {isSelected ? children : null} */}
      {renderChildren()}
    </div>
  );
});

TabContent.displayName = 'Tabs.Content';

export default TabContent;
