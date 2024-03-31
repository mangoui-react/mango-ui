import React, { useCallback, useEffect, useMemo } from 'react';

import { Locale, koKR } from '../locale';

export interface ConfigValue {
  theme?: 'light' | 'dark' | 'system';
  locale?: Locale;
  prefixCls?: string;
}

// TODO: locale 과 theme 구분하는 것으로 수정하자.
// default prefixCls es, locale은 koKR
export const ConfigContext = React.createContext<ConfigValue>({
  theme: 'light',
  locale: koKR,
  prefixCls: 'es',
});

export interface ConfigProviderProps extends ConfigValue {
  children?: React.ReactNode;
}

const ConfigProvider: React.FC<ConfigProviderProps> = (props) => {
  const { theme = 'light', locale = koKR, prefixCls = 'es', children } = props;

  const syncBodyClassName = useCallback(() => {
    const dark = `${prefixCls}-dark`;
    const system = `${prefixCls}-system`;

    if (theme === 'dark') {
      document.body.classList.add(dark);
      document.body.classList.remove(system);
    } else if (theme === 'system') {
      document.body.classList.add(system);
      document.body.classList.remove(dark);
    } else {
      document.body.classList.remove(dark);
      document.body.classList.remove(system);
    }
  }, [prefixCls, theme]);

  useEffect(() => {
    syncBodyClassName();
  }, [syncBodyClassName]);

  const contextValue = useMemo(() => ({ theme, locale, prefixCls }), [locale, prefixCls, theme]);
  return <ConfigContext.Provider value={contextValue}>{children}</ConfigContext.Provider>;
};

export default ConfigProvider;
