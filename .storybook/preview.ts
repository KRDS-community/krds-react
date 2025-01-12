import type { Preview } from '@storybook/react';
import '../packages/core/dist/style.css';
import '../packages/core/lib/i18n';
import i18n from '../packages/core/lib/i18n';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const { locale } = context.globals;
      i18n.changeLanguage(locale);
      return Story();
    },
  ],
  globalTypes: {
    locale: {
      name: 'Locale',
      description: '언어 선택',
      defaultValue: 'ko',
      toolbar: {
        icon: 'globe',
        items: [
          { value: 'ko', title: '한국어' },
          { value: 'en', title: 'English' },
        ],
      },
    },
  },
};

export default preview;
