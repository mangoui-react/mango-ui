import { useContext } from 'react';

import { ConfigContext, ConfigValue } from './config-provider';

const useConfig = (): ConfigValue => {
  const { theme, locale, prefixCls } = useContext(ConfigContext);

  return {
    theme,
    locale,
    prefixCls,
  };
};

export default useConfig;
