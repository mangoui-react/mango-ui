import React, { ReactNode } from 'react';

import { Popper } from '@mangoui/popper';
import { useControlled } from '@mangoui/use-controlled/src';

import { SelectTriggerElement } from '../trigger/select-trigger';
import { SelectContext } from './select-root-context';

export type SelectValue = string | number | undefined; // unknown;
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
    value,
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
  const [open, setOpen] = useControlled<boolean | undefined>(openProp, defaultOpen);

  // contentId 설정
  const contentId = React.useId();

  const triggerPointerDownPosRef = React.useRef<{ x: number; y: number } | null>(null);

  const onOpen = React.useCallback(() => {
    if (!open) {
      setOpen(true);
      onOpenChange?.(true);
    }
  }, [onOpenChange, open, setOpen]);

  const onClose = React.useCallback(() => {
    setOpen(false);
    onOpenChange?.(false);
  }, [onOpenChange, setOpen]);

  const contextValue = React.useMemo(
    () => ({
      trigger,
      value,
      defaultValue,
      onValueChange,
      open,
      defaultOpen,
      disabled,
      readOnly,
      required,
      name,
      dir,
      contentId,
      triggerPointerDownPosRef,
      //
      onOpen,
      onClose,
      onTriggerChange: setTrigger,
    }),
    [
      trigger,
      value,
      defaultValue,
      onValueChange,
      open,
      defaultOpen,
      disabled,
      readOnly,
      required,
      name,
      dir,
      contentId,
      onOpen,
      onClose,
    ],
  );

  return (
    <Popper.Root>
      <SelectContext.Provider value={contextValue}>{children}</SelectContext.Provider>
    </Popper.Root>
  );
}

SelectRoot.displayName = 'Select.Root';
