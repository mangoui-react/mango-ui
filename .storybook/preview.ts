import type { Preview } from '@storybook/react';

import './global.css';

const preview: Preview = {
  parameters: {
    // v8.0.9로 업데이트 되면서 argTypesRegex를 제거하고 대신 @storybook/test의 fn 함수를 사용할 것을 권장함
    // actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
