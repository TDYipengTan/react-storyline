import React from 'react';

import Mark from '../Mark';
import Text from '../Text';
import * as snippets from './snippets';

export const primaryStory = () => {
  return (
    <Text>
      Hello world! This is just a <Mark>highlighted</Mark> element
    </Text>
  );
};

primaryStory.parameters = {
  docs: { source: { code: snippets.MARK } },
};

export const colors = () => {
  return (
    <>
      <p>Yellow</p>
      <Mark color="yellow">highlighted</Mark>
      <p>Light-yellow</p>
      <Mark color="light-yellow">highlighted</Mark>
    </>
  );
};

colors.parameters = {
  docs: { source: { code: snippets.MARK_COLOR } },
};

export default { title: 'Mark', component: Mark };
