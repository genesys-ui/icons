import type { StorybookConfig } from '@storybook/react-vite';
import { dirname, join } from 'node:path';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  stories: ['../stories/**/*.@(mdx|stories.tsx)'],
  async viteFinal(config) {
    return mergeConfig(config, {
      optimizeDeps: {
        include: [
          // '@storybook/blocks',
          // 'styled-components',
          // 'decamelize',
          // '@floating-ui/react',
        ],
      },
    });
  },
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-themes'),
    getAbsolutePath('@storybook/preset-scss'),
  ],
};

export default config;

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}
