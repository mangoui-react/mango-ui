// 참고 소스: https://github.com/radix-ui/primitives/blob/main/packages/react/popper/src/Popper.tsx
import React from 'react';

import { Measurable } from './types';

export interface PopperContextValue {
  anchor: Measurable | null;
  onAnchorChange: (anchor: Measurable | null) => void;
  // onAnchorChange: React.Dispatch<React.SetStateAction<Measurable | null>>;
}
export const PopperContext = React.createContext<PopperContextValue>({
  anchor: null,
  onAnchorChange: () => {},
});

export default function Popper(props: React.PropsWithChildren): JSX.Element {
  const { children } = props;
  const [anchor, setAnchor] = React.useState<Measurable | null>(null);

  const contextValue = React.useMemo(() => ({ anchor, onAnchorChange: setAnchor }), [anchor]);

  return <PopperContext.Provider value={contextValue}>{children}</PopperContext.Provider>;
}

Popper.displayName = 'Popper';
