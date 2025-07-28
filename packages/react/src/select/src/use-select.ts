import React from 'react';

import { SelectContext, SelectContextValue } from './select';

export const useSelect = (): SelectContextValue => {
  const context = React.useContext(SelectContext);

  if (!context) {
    throw new Error('useSelect must be used within a SelectProvider');
  }

  return context;
};
