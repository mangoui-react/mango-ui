import React from 'react';

import { SelectTriggerElement } from '../trigger/select-trigger';
import { SelectValueElement } from '../value/select-value';
import { SelectValue } from './select-root';

type Direction = 'ltr' | 'rtl';

export interface SelectRootContextValue {
  trigger: SelectTriggerElement | null;
  onTriggerChange: (node: SelectTriggerElement | null) => void;
  valueNode: SelectValueElement | null;
  onValueNodeChange: (node: SelectValueElement) => void;
  valueNodeHasChildren: boolean;
  onValueNodeHasChildrenChange: (hasChildren: boolean) => void;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  value: SelectValue;
  defaultValue: SelectValue;
  onValueChange: (value: SelectValue) => void;
  selectedItemText: React.ReactNode | null; // string 타입으로 변경할지 좀 더 생각해 보자
  onSelectedItemText: (itemText: React.ReactNode) => void;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange: (open: boolean) => void;
  triggerPointerDownPosRef: React.MutableRefObject<{ x: number; y: number } | null>;
  contentId: string;
  dir?: Direction;
}

export const SelectRootContext = React.createContext<SelectRootContextValue>({
  trigger: null,
  onTriggerChange: (node: SelectTriggerElement | null) => {},
  valueNode: null,
  onValueNodeChange: (node: SelectValueElement) => {},
  valueNodeHasChildren: false,
  onValueNodeHasChildrenChange: (hasChildren: boolean) => {},
  value: '',
  defaultValue: '',
  onValueChange: (value: SelectValue) => {},
  selectedItemText: null,
  onSelectedItemText: (itemText: React.ReactNode) => {},
  open: false,
  defaultOpen: false,
  onOpenChange: (open: boolean) => {},
  triggerPointerDownPosRef: { current: null },
  contentId: '',
});

export function useSelectRootContext(): SelectRootContextValue {
  const context = React.useContext(SelectRootContext);
  if (context === null) {
    throw new Error(
      'Mango UI: SelectRootContext is missing. Select parts must be placed within <Select.Root>.',
    );
  }
  return context;
}
