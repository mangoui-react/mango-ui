import React from 'react';

import { SelectContentElement } from './select-content';
import { SelectViewportElement } from './select-viewport';

export interface SelectContentContextValue {
  closeOnItemClick?: boolean;
  content?: SelectContentElement | null;
  viewport?: SelectViewportElement | null;
  onViewportChange?: (node: SelectViewportElement | null) => void;
  // itemRefCallback?: (node: SelectItemElement | null, value: string, disabled: boolean) => void;
  // selectedItem?: SelectItemElement | null;
  // onItemLeave?: () => void;
  // itemTextRefCallback?: (
  //   node: SelectItemTextElement | null,
  //   value: string,
  //   disabled: boolean,
  // ) => void;
  // focusSelectedItem?: () => void;
  // selectedItemText?: SelectItemTextElement | null;
  // position?: SelectContentProps['position'];
  // isPositioned?: boolean;
  // searchRef?: React.RefObject<string>;
}

export const SelectContentContext = React.createContext<SelectContentContextValue>({
  closeOnItemClick: true,
});

export function useSelectContentContext(): SelectContentContextValue {
  const context = React.useContext(SelectContentContext);
  if (context === null) {
    throw new Error(
      'Mango UI: SelectContentContext is missing. Select parts must be placed within <Select.Content>.',
    );
  }
  return context;
}
