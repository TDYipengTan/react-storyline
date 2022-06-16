import { addParameters } from "@storybook/react";
import DocsPage from "@cobalt/storybook-addon-docs";

addParameters({
  docs: {
    page: DocsPage,
    extractComponentDescription: (component, { notes }) => {
      if (notes) {
        return typeof notes === "string" ? notes : notes.markdown || notes.text;
      }

      return null;
    }
  }
});
