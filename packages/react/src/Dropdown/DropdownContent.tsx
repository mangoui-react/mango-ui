import React from 'react';

import Popover, { PopoverContentProps } from '../Popover';

export interface DropdownContentProps extends PopoverContentProps {
  /**
   * DropdownItem 클릭시 close
   * @default true
   */
  closeOnItemClick?: boolean;
}

export interface DropdownContentContextValue {
  closeOnItemClick?: boolean;
}
export const DropdownContentContext = React.createContext<DropdownContentContextValue>({
  closeOnItemClick: true,
});

const DropdownContent = React.forwardRef<HTMLDivElement, DropdownContentProps>((props, ref) => {
  const { closeOnItemClick = true, ...rest } = props;

  const contextValue = React.useMemo(
    () => ({
      closeOnItemClick,
    }),
    [closeOnItemClick],
  );

  return (
    <DropdownContentContext.Provider value={contextValue}>
      <Popover.Content ref={ref} role="menu" {...rest} />
    </DropdownContentContext.Provider>
  );
});

DropdownContent.displayName = 'Dropdown.Content';

export default DropdownContent;
