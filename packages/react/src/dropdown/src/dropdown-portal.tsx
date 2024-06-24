import React from 'react';

import { Popover, PopoverPortalProps } from '@melio-ui/popover';

export interface DropdownPortalProps extends PopoverPortalProps {}

export default function DropdownPortal(props: DropdownPortalProps): JSX.Element {
  return <Popover.Portal {...props} />;
}

DropdownPortal.displayName = 'Dropdown.Portal';
