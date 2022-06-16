import { addDecorator, addParameters } from "@storybook/react";
import withThemeSelector from "@cobalt-utils/storybook-addon-theme-selector";
import DocsPage, { extractProps } from "@cobalt/storybook-addon-docs";

addDecorator(withThemeSelector);

addParameters({
  docs: {
    page: DocsPage,
    extractProps,
    props: {
      hint:
        'The `ViewportProvider` available sizes are: `"small"`, `"medium"` and `"large"`.'
    }
  }
});
