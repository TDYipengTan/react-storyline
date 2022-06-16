import React, { FC } from 'react';

import Flex from '../Flex';
import * as snippets from './snippets';

const Square: FC = ({ children }) => (
  <div
    style={{
      padding: 20,
      backgroundColor: '#EEE',
      boxSizing: 'border-box',
      border: '1px solid #AAA',
      justifyContent: 'center',
      margin: '2px',
    }}
  >
    {children}
  </div>
);

const Text = ({ text = '' }) => <code style={{ padding: '0 5px 0 0' }}>{text}</code>;

const flexStyle = {
  backgroundColor: '#F7F7F7',
  padding: '3px',
  margin: '3px 10px 15px 3px',
};

const Circle: FC = ({ children }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 50,
      height: 50,
      backgroundColor: '#EEE',
      boxSizing: 'border-box',
      border: '1px solid #AAA',
      borderRadius: '50%',
    }}
  >
    {children}
  </div>
);

export const primaryStory = () => {
  return (
    <Flex gap={8} alignX="center">
      <Flex>
        <Circle />
        <Circle />
      </Flex>
      <Flex direction="column">
        <Circle />
        <Circle />
      </Flex>
    </Flex>
  );
};

primaryStory.story = {
  parameters: {
    code: snippets.BASIC,
  },
};

export const horizontalAlignment = () => (
  <>
    <div>
      <Text text="start"></Text>
      <Flex title="alignX start" style={flexStyle} alignX="start">
        <Circle />
      </Flex>
    </div>
    <div>
      <Text text="center"></Text>
      <Flex title="alignX center" style={flexStyle} alignX="center">
        <Circle />
      </Flex>
    </div>
    <div>
      <Text text="end"></Text>
      <Flex title="alignX end" style={flexStyle} alignX="end">
        <Circle />
      </Flex>
    </div>
    <div>
      <Text text="space-around"></Text>
      <Flex alignX="space-around" title="alignX space-around" style={flexStyle}>
        <Circle />
        <Circle />
        <Circle />
      </Flex>
    </div>
    <div>
      <Text text="space-between"></Text>
      <Flex style={flexStyle} title="alignX space-between" alignX="space-between">
        <Circle />
        <Circle />
        <Circle />
      </Flex>
    </div>
    <div>
      <Text text="space-evenly"></Text>
      <Flex style={flexStyle} title="alignX space-evenly" alignX="space-evenly">
        <Circle />
        <Circle />
        <Circle />
      </Flex>
    </div>
    <div>
      <Text text="stretch"></Text>
      <Flex direction="column" style={flexStyle} title="alignX stretch" alignX="stretch">
        <Square />
        <Square />
        <Square />
      </Flex>
    </div>
  </>
);

horizontalAlignment.story = {
  parameters: {
    code: snippets.HORIZONTAL_ALIGNMENT,
    default: 'start',
    description: `
  For values \`space-around\`, \`space-between\` and \`space-evenly\`
  these will only be set when the \`direction\` is set to \`row\`,
  otherwise \`alignX\` will default to \`center\`. 
  
  The \`stretch\` value 
  will only be set when the \`direction\` is set to \`column\`,
  otherwise \`alignX\` will default to \`center\`.
  `,
  },
};

export const verticalAlignment = () => (
  <Flex height={500} alignX="center">
    <div style={{ height: '100%' }}>
      <Text text="start"></Text>
      <Flex
        title="alignY start"
        style={flexStyle}
        direction="column"
        alignY="start"
        height="100%"
      >
        <Circle />
      </Flex>
    </div>
    <div style={{ height: '100%' }}>
      <Text text="center"></Text>
      <Flex
        title="alignY center"
        style={flexStyle}
        direction="column"
        alignY="center"
        height="100%"
      >
        <Circle />
      </Flex>
    </div>
    <div style={{ height: '100%' }}>
      <Text text="end"></Text>
      <Flex
        title="alignY end"
        style={flexStyle}
        direction="column"
        alignY="end"
        height="100%"
      >
        <Circle />
      </Flex>
    </div>
    <div style={{ height: '100%' }}>
      <Text text="space-around"></Text>
      <Flex
        style={flexStyle}
        alignX="center"
        title="alignY space-around"
        direction="column"
        alignY="space-around"
        height="100%"
      >
        <Circle />
        <Circle />
        <Circle />
      </Flex>
    </div>
    <div style={{ height: '100%' }}>
      <Text text="space-evenly"></Text>
      <Flex
        style={flexStyle}
        title="alignY space-evenly"
        direction="column"
        alignX="center"
        alignY="space-evenly"
        height="100%"
      >
        <Circle />
        <Circle />
        <Circle />
      </Flex>
    </div>
    <div style={{ height: '100%' }}>
      <Text text="space-between"></Text>
      <Flex
        style={flexStyle}
        title="alignY space-between"
        alignX="center"
        direction="column"
        alignY="space-between"
        height="100%"
      >
        <Circle />
        <Circle />
        <Circle />
      </Flex>
    </div>
    <div style={{ height: '100%' }}>
      <Text text="stretch"></Text>
      <Flex
        style={flexStyle}
        title="alignY stretch"
        direction="row"
        alignY="stretch"
        height="100%"
      >
        <Square />
        <Square />
        <Square />
      </Flex>
    </div>
  </Flex>
);

verticalAlignment.story = {
  parameters: {
    code: snippets.VERTICAL_ALIGNMENT,
    default: 'start',
    description: `
  For values \`space-around\`, \`space-between\` and \`space-evenly\`
  these will only be set when the \`direction\` is set to \`column\`,
  otherwise \`alignY\` will default to \`center\`.

  The \`stretch\` value 
  will only be set when the \`direction\` is set to \`row\`,
  otherwise \`alignY\` will default to \`center\`.
  `,
  },
};

export const padding = () => (
  <Flex alignX="center">
    <Flex padding={2} paddingY={4} paddingTop={8} backgroundColor="#F7F7F7">
      <Flex>
        <Circle />
        <Circle />
      </Flex>
    </Flex>
  </Flex>
);

padding.story = {
  parameters: {
    code: snippets.PADDING,
    description: `
The most specific properties take precedence over the least specific ones,
_e.g._ \`paddingTop\` takes precedence over \`paddingY\` and this takes
precedence over \`padding\`.
    `,
  },
};

export const gap = () => (
  <Flex gap={8} alignX="center">
    <Flex gap={4}>
      <Circle />
      <Circle />
    </Flex>
    <Flex direction="column" gap={4}>
      <Circle />
      <Circle />
    </Flex>
  </Flex>
);

gap.story = {
  parameters: {
    code: snippets.GAP,
  },
};

export const itemGrow = () => (
  <Flex alignX="center">
    <Flex gap={4} itemGrow={[1, 0]} width="100%">
      <Square>Grow = 1</Square>
      <Square>Grow = 0</Square>
    </Flex>
  </Flex>
);

itemGrow.story = {
  parameters: {
    code: snippets.ITEM_GROW,
  },
};

export const inwards = () => (
  <Flex gap={8} alignX="center" alignY="center">
    <Flex gap={4} alignX="center" inwards>
      <Circle />
      <Circle />
      <Circle />
      <Circle />
    </Flex>
    <Flex direction="column" gap={4} alignX="center" inwards>
      <Circle />
      <Circle />
      <Circle />
      <Circle />
    </Flex>
  </Flex>
);

inwards.story = {
  parameters: {
    code: snippets.INWARDS,
  },
};

export const wrap = () => (
  <Flex gap={8} alignX="center">
    <Flex gap={2} wrap width={166} height={166}>
      <Circle>1</Circle>
      <Circle>2</Circle>
      <Circle>3</Circle>
      <Circle>4</Circle>
      <Circle>5</Circle>
      <Circle>6</Circle>
      <Circle>7</Circle>
      <Circle>8</Circle>
    </Flex>
    <Flex direction="column" gap={2} alignX="center" wrap width={166} height={166}>
      <Circle>1</Circle>
      <Circle>2</Circle>
      <Circle>3</Circle>
      <Circle>4</Circle>
      <Circle>5</Circle>
      <Circle>6</Circle>
      <Circle>7</Circle>
      <Circle>8</Circle>
    </Flex>
  </Flex>
);

wrap.story = {
  parameters: {
    code: snippets.WRAP,
  },
};

export const scrollable = () => (
  <Flex gap={8} alignX="center">
    <Flex
      scrollable
      gap={2}
      paddingY={4}
      width={100}
      style={{ border: '1px solid #DDD' }}
    >
      <Circle />
      <Circle />
      <Circle />
      <Circle />
      <Circle />
    </Flex>
    <Flex
      direction="column"
      scrollable
      gap={2}
      paddingX={4}
      height={100}
      style={{ border: '1px solid #DDD' }}
    >
      <Circle />
      <Circle />
      <Circle />
      <Circle />
      <Circle />
    </Flex>
  </Flex>
);

scrollable.story = {
  parameters: {
    code: snippets.SCROLLABLE,
  },
};

export const withBackgroundColor = () => {
  return (
    <Flex padding="2" backgroundColor="steelblue">
      <Circle />
      <Circle />
    </Flex>
  );
};

withBackgroundColor.story = {
  parameters: {
    code: snippets.BACKGROUND_COLOR,
  },
};

export default {
  title: 'Flex',
  component: Flex,
};
