import { addDecorator, addParameters } from "@storybook/react";
import withThemeSelector from "@cobalt-utils/storybook-addon-theme-selector";
import DocsPage from "@cobalt/storybook-addon-docs";

addDecorator(withThemeSelector);

addParameters({
  docs: {
    page: DocsPage,
    description: {
      component: "Default `HTMLElement` props can also be used."
    }
  }
});
