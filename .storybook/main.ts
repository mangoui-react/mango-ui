import type { StorybookConfig } from '@storybook/react-vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import path from 'path';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: [
    // '../stories/**/*.mdx',
    // '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../packages/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-mdx-gfm',
    '@chromatic-com/storybook',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  staticDirs: ['./public'],
  docs: {},
  viteFinal: async (config) => {
    return mergeConfig(config, {
      plugins: [vanillaExtractPlugin()],
      resolve: {
        alias: [
          {
            find: '@mangoui',
            replacement: path.resolve(__dirname, '../packages/react/src'),
          },
        ],
      },
    });
  },
};

export default config;
