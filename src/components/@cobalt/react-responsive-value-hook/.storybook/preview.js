import { addDecorator, addParameters } from "@storybook/react";
import DocsPage, { extractProps } from "@cobalt/storybook-addon-docs";

addParameters({
  docs: {
    page: DocsPage,
    extractComponentDescription: (component: any, { notes }: any) => {
      if (notes) {
        return typeof notes === "string"
          ? notes
          : notes.markdown || notes.text;
      }

      return null;
    }
  }
});
