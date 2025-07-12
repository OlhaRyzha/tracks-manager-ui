import '../src/index.css';           
import type { Preview } from '@storybook/react';

export const parameters: Preview['parameters'] = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

