import React from "react";
import { addParameters, addDecorator } from "@storybook/react";
import DocsPage, { extractProps } from "@cobalt/storybook-addon-docs";
import ViewportProvider from "@cobalt/react-viewport-provider";

addDecorator(story => <ViewportProvider>{story()}</ViewportProvider>)

addParameters({
  docs: {
    page: DocsPage,
    extractProps,
    props: {
      hint: "Default `HTMLElement` props can also be used"
    }
  }
});
