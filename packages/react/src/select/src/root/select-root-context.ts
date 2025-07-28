import React from 'react';

import { SelectTriggerElement } from '../trigger/select-trigger';
import { SelectValue } from './select-root';

type Direction = 'ltr' | 'rtl';

export interface SelectContextValue {
  trigger: SelectTriggerElement | null;
  onTriggerChange: (node: SelectTriggerElement | null) => void;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  value: SelectValue;
  defaultValue: SelectValue;
  onValueChange?: (value: SelectValue) => void;
  open?: boolean;
  defaultOpen?: boolean;
  // onOpenChange: (open: boolean) => void;
  triggerPointerDownPosRef: React.MutableRefObject<{ x: number; y: number } | null>;
  contentId: string;
  dir?: Direction;
  onOpen: () => void;
  onClose: () => void;
}

export const SelectContext = React.createContext<SelectContextValue>({
  trigger: null,
  onTriggerChange: () => {},
  value: '',
  defaultValue: '',
  onValueChange: (value: SelectValue) => {},
  open: false,
  defaultOpen: false,
  // onOpenChange: (open: boolean) => {},
  triggerPointerDownPosRef: { current: null },
  contentId: '',
  onOpen: () => {},
  onClose: () => {},
});

export function useSelectContext(): SelectContextValue {
  const context = React.useContext(SelectContext);
  if (context === null) {
    throw new Error(
      'Mango UI: SelectContext is missing. Select parts must be placed within <Select.Root>.',
    );
  }
  return context;
}
