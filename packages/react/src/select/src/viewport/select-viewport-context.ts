import React from 'react';

export interface SelectViewportContextValue {
  contentWrapper?: HTMLDivElement | null;
  shouldExpandOnScrollRef?: React.RefObject<boolean>;
  // onScrollButtonChange?: (node: SelectScrollButtonImplElement | null) => void;
}

export const SelectViewportContext = React.createContext<SelectViewportContextValue>({});

export function useSelectViewportContext(): SelectViewportContextValue {
  const context = React.useContext(SelectViewportContext);
  if (context === null) {
    throw new Error(
      'Mango UI: SelectViewportContext is missing. Select parts must be placed within <Select.Viewport>.',
    );
  }
  return context;
}
