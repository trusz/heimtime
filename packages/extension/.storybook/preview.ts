import type { Preview } from "@storybook/svelte";
import {Theme} from "../src/lib/components/theme";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    () => Theme
  ]
};

export default preview;
