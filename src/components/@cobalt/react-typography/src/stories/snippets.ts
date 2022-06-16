export const HEADING_DEFAULT = `
  import { Heading } from "@cobalt/react-typography"

  // Both number and string values are valid.
  <Heading level="1">This is an H1</Heading>
  <Heading level="2">This is an H2</Heading>
  <Heading level="3">This is an H3</Heading>
  <Heading level="4">This is an H4</Heading>
  <Heading level="5">This is an H5</Heading>
  <Heading level="6">This is an H6</Heading>
`;

export const HEADING_MODIFIERS = `
  import { Heading } from "@cobalt/react-typography"

  // Both number and string values are valid.
  <Heading level="2" asLevel="1">
    This is an H2 with the style of H1
  </Heading>
  <Heading level="1" asLevel="2">
    This is an H1 with the style of H2
  </Heading>
  <Heading level="1" asLevel="3">
    This is an H1 with the style of H3
  </Heading>
  <Heading level="1" asLevel="4">
    This is an H1 with the style of H4
  </Heading>
  <Heading level="1" asLevel="5">
    This is an H1 with the style of H5
  </Heading>
  <Heading level="1" asLevel="6">
    This is an H1 with the style of H6
  </Heading>
`;

export const HEADING_TRUNCATED = `
  import { Heading } from "@cobalt/react-typography"

  <Heading level="..." truncated>This is a very long title truncated</Heading>
`;

export const HEADING_COLOR = `
  import { Heading } from "@cobalt/react-typography"

  <Heading level="..." color="...">...</Heading>
`;

export const HEADING_SKELETON = `
  import { Heading } from "@cobalt/react-typography"

  <Heading level="..." skeleton="static">...</Heading>
  <Heading level="..." skeleton="animated">...</Heading>
  <Heading level="..." skeleton={{ type: "static", width: 300 }}>...</Heading>
`;

export const TEXT_DEFAULT = `
  import { Text } from "@cobalt/react-typography"

  <Text>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis
    ante nec erat ultricies, nec dignissim mi imperdiet.
  </Text>
`;

export const SIZES = `
  import { Text } from "@cobalt/react-typography"

  <Text size="small">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis
    ante nec erat ultricies, nec dignissim mi imperdiet.
  </Text>

  <Text size="medium">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis
    ante nec erat ultricies, nec dignissim mi imperdiet.
  </Text>
`;

export const WEIGHTS = `
  import { Text } from "@cobalt/react-typography"

  <Text weight="light">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis
    ante nec erat ultricies, nec dignissim mi imperdiet.
  </Text>

  <Text weight="regular">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis
    ante nec erat ultricies, nec dignissim mi imperdiet.
  </Text>

  <Text weight="medium">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis
    ante nec erat ultricies, nec dignissim mi imperdiet.
  </Text>

  <Text weight="inherit">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis
    ante nec erat ultricies, nec dignissim mi imperdiet.
  </Text>

  <Text>This is a text <Text weight="medium" inline> partially in bold</Text>.</Text>
`;

export const TEXT_INLINE = `
  import { Text } from "@cobalt/react-typography"

  <Text inline>
    Text 1.
  </Text>
  <Text inline>
    Text 2.
  </Text>
  <Text inline>
    Text 3.
  </Text>
`;

export const TEXT_COLOR = `
  import { Text } from "@cobalt/react-typography"

  <Text color="...">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis
    ante nec erat ultricies, nec dignissim mi imperdiet. Morbi ullamcorper
    urna justo, sed faucibus ante egestas non.
  </Text>
`;

export const TEXT_TRUNCATED = `
  import { Text } from "@cobalt/react-typography"

  <Text truncated>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis
    ante nec erat ultricies, nec dignissim mi imperdiet. Morbi ullamcorper
    urna justo, sed faucibus ante egestas non.
  </Text>
`;

export const TEXT_SKELETON = `
  import { Text } from "@cobalt/react-typography"

  <Text skeleton="static">...</Text>
  <Text skeleton="animated">...</Text>
  <Text skeleton={{ type: "static", width: 300, lines: 3 }}>...</Text>
`;

export const MARK = `
  import { Mark } from "@cobalt/react-typography"

  <Text>
    Hello world! This is just a <Mark>highlighted</Mark> element
  </Text>
`;

export const MARK_COLOR = `
  import { Mark } from "@cobalt/react-typography"

  <Mark color="yellow">highlighted</Mark>
  <Mark color="light-yellow">highlighted</Mark>
`;
