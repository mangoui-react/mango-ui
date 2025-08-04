import React, { ReactNode } from 'react';

import { Popper } from '@mangoui/popper';
import { useControlled } from '@mangoui/use-controlled/src';

import { SelectItemTextProps } from '../item-text/select-item-text';
import { SelectItemProps } from '../item/select-item';
import { SelectTriggerElement } from '../trigger/select-trigger';
import { SelectValueElement } from '../value/select-value';
import { SelectRootContext } from './select-root-context';

export type SelectValue = string | number | null; // unknown;
// export type SelectValue = string | string[];

export interface SelectRootProps {
  value?: SelectValue;
  defaultValue?: SelectValue;
  onValueChange?: (value: SelectValue) => void;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  name?: string;
  children: ReactNode;
  dir?: 'ltr' | 'rtl';
}

export default function SelectRoot(props: SelectRootProps): React.JSX.Element {
  const {
    children,
    value: valueProp,
    defaultValue,
    onValueChange,
    open: openProp,
    defaultOpen,
    onOpenChange,
    disabled,
    readOnly,
    required,
    name,
    dir,
  } = props;

  const [trigger, setTrigger] = React.useState<SelectTriggerElement | null>(null);
  const [valueNode, setValueNode] = React.useState<SelectValueElement | null>(null);
  const [valueNodeHasChildren, setValueNodeHasChildren] = React.useState(false);

  const [open, setOpen] = useControlled<boolean | undefined>(openProp, defaultOpen);
  const [value, setValue] = useControlled<SelectValue | undefined>(valueProp, defaultValue);

  const [selectedItemText, setSelectedItemText] = React.useState<React.ReactNode>(
    (): React.ReactNode => {
      const itemMap = new Map<SelectValue, React.ReactNode>();

      const traverse = (node: React.ReactNode): void => {
        React.Children.forEach(node, (child) => {
          if (!React.isValidElement(child)) {
            return;
          }

          if ((child.type as any).displayName === 'Select.Item') {
            const { value: itemValue, children: itemChildren } = child.props as SelectItemProps;

            let textContent: React.ReactNode = null;
            React.Children.forEach(itemChildren, (itemChild) => {
              if (
                React.isValidElement(itemChild) &&
                (itemChild.type as any).displayName === 'Select.Text'
              ) {
                textContent = (itemChild.props as SelectItemTextProps).children;
              }
            });

            if (itemValue !== undefined) {
              itemMap.set(itemValue, textContent);
            }
          } else if ((child.props as any).children) {
            traverse((child.props as any).children);
          }
        });
      };

      traverse(children);
      return itemMap.get(value !== undefined ? value : null);
    },
  );
  // console.log('selectedItemText', selectedItemText);

  // contentId 설정
  const contentId = React.useId();

  const triggerPointerDownPosRef = React.useRef<{ x: number; y: number } | null>(null);

  const handleOpenChange = React.useCallback(
    (newOpen: boolean) => {
      setOpen(newOpen);
      onOpenChange?.(newOpen);
    },
    [onOpenChange, setOpen],
  );

  const handleValueChange = React.useCallback(
    (newValue: SelectValue) => {
      setValue(newValue);
      onValueChange?.(newValue);
    },
    [onValueChange, setValue],
  );

  const contextValue = React.useMemo(
    () => ({
      trigger,
      valueNode,
      onValueNodeChange: setValueNode,
      valueNodeHasChildren,
      onValueNodeHasChildrenChange: setValueNodeHasChildren,
      value,
      defaultValue,
      onValueChange: handleValueChange,
      selectedItemText,
      onSelectedItemText: setSelectedItemText,
      open,
      defaultOpen,
      onOpenChange: handleOpenChange,
      disabled,
      readOnly,
      required,
      name,
      dir,
      contentId,
      triggerPointerDownPosRef,
      //
      onTriggerChange: setTrigger,
    }),
    [
      trigger,
      valueNode,
      valueNodeHasChildren,
      value,
      defaultValue,
      handleValueChange,
      selectedItemText,
      open,
      defaultOpen,
      handleOpenChange,
      disabled,
      readOnly,
      required,
      name,
      dir,
      contentId,
    ],
  );

  return (
    <Popper.Root>
      <SelectRootContext.Provider value={contextValue}>{children}</SelectRootContext.Provider>
    </Popper.Root>
  );
}

SelectRoot.displayName = 'Select.Root';
