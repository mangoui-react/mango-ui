import React from 'react';

import { useSelected } from './hooks/use-selected';
import { TabsContext, TabsProps } from './tabs';

export interface TabsContentProps
  extends Pick<TabsProps, 'renderMode'>,
    React.ComponentPropsWithoutRef<'div'> {
  index?: number;
  value?: string;
}

const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>((props, ref) => {
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
    <div data-state={isSelected ? 'active' : 'inactive'} role="tabpanel" {...rest} ref={ref}>
      {/* {isSelected ? children : null} */}
      {renderChildren()}
    </div>
  );
});

TabsContent.displayName = 'Tabs.Content';

export default TabsContent;
