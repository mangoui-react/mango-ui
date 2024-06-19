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
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-mdx-gfm',
    '@chromatic-com/storybook',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  staticDirs: ['./public'],
  docs: {
    autodocs: 'tag',
  },
  viteFinal: async (config) => {
    return mergeConfig(config, {
      plugins: [vanillaExtractPlugin()],
      resolve: {
        alias: [
          {
            find: '@melio-ui/use-controlled',
            replacement: path.resolve(__dirname, '../packages/react/src/use-controlled'),
          },
          {
            find: '@melio-ui/use-merged-ref',
            replacement: path.resolve(__dirname, '../packages/react/src/use-merged-ref'),
          },
          {
            find: '@melio-ui/use-portal',
            replacement: path.resolve(__dirname, '../packages/react/src/use-portal'),
          },
          {
            find: '@melio-ui/use-effect-once',
            replacement: path.resolve(__dirname, '../packages/react/src/use-effect-once'),
          },
          {
            find: '@melio-ui/slot',
            replacement: path.resolve(__dirname, '../packages/react/src/slot'),
          },
          {
            find: '@melio-ui/modal',
            replacement: path.resolve(__dirname, '../packages/react/src/modal'),
          },
        ],
      },
    });
  },
};

export default config;
