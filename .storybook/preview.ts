import { setup, Preview } from '@storybook/vue3';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

setup((app) => {
  //👇 Registers a global Pinia instance inside Storybook to be consumed by existing stories
  app.use(ElementPlus);
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
