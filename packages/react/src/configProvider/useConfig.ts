import { useContext } from 'react';

import { ConfigContext, ConfigValue } from './ConfigProvider';

const useConfig = (): ConfigValue => {
  const { theme, locale, prefixCls } = useContext(ConfigContext);

  return {
    theme,
    locale,
    prefixCls,
  };
};

export default useConfig;
