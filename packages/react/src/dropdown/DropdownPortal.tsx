import React from 'react';

import Popover, { PopoverPortalProps } from '../popover';

export interface DropdownPortalProps extends PopoverPortalProps {}

export default function DropdownPortal(props: DropdownPortalProps): JSX.Element {
  return <Popover.Portal {...props} />;
}

DropdownPortal.displayName = 'Dropdown.Portal';
