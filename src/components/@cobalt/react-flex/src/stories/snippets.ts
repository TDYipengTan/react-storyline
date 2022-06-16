export const BASIC = `
  import Flex from "@cobalt/react-flex";

  <Flex />;
  <Flex direction="column" />;
`;

export const HORIZONTAL_ALIGNMENT = `
  import Flex from "@cobalt/react-flex";

  // This also works for non-inline flex containers.
  <Flex alignX="start" />;
  <Flex alignX="center" />;
  <Flex alignX="end" />;
  <Flex alignX="space-around" />
  <Flex alignX="space-between" />
  <Flex alignX="space-evenly" />
  <Flex direction="column" alignX="stretch" />;
`;

export const VERTICAL_ALIGNMENT = `
  import Flex from "@cobalt/react-flex";

  // This also works for inline flex containers.
  <Flex direction="column" alignY="start" />;
  <Flex direction="column" alignY="center" />;
  <Flex direction="column" alignY="end" />;
  <Flex direction="column" alignY="space-around" />
  <Flex direction="column" alignY="space-between" />
  <Flex direction="column" alignY="space-evenly" />
  <Flex direction="row" alignY="stretch"/>;
`;

export const PADDING = `
  import Flex from "@cobalt/react-flex";

  // Both number and string values are valid.
  <Flex padding={2} paddingY={4} paddingTop={8} />;

  // Responsive value can also be used
  <Flex padding={[1, 2, 4]} />;
`;

export const GAP = `
  import Flex from "@cobalt/react-flex";

  // Both number and string values are valid.
  <Flex gap={4} />;
  <Flex direction="column" gap={4} />;

  // Responsive value can also be used
  <Flex gap={[1, 2, 4]} />;
`;

export const ITEM_GROW = `
  import Flex from "@cobalt/react-flex";

  // Applies the \`flex-grow\` property to the child with the corresponding index.
  <Flex gap={4} itemGrow={[1,0]} width="100%" />;
`;

export const INWARDS = `
  import Flex from "@cobalt/react-flex";

  <Flex inwards gap={4} />;
  <Flex direction="column" inwards gap={4} />;
`;

export const WRAP = `
  import Flex from "@cobalt/react-flex";

  // Use with gap to get horizontal and vertical spacing automatically.
  <Flex gap={4} wrap />;
  <Flex direction="column" gap={4} wrap />;
`;

export const SCROLLABLE = `
  import Flex from "@cobalt/react-flex";

  <Flex scrollable />;
  <Flex direction="column" scrollable />;
`;

export const BACKGROUND_COLOR = `
  <Flex backgroundColor="...">
`;
