import ViewportProvider from '@cobalt/react-viewport-provider';
import React, { FC } from 'react';

import useResponsiveValue, { ResponsiveValue } from '../useResponsiveValue';
import * as snippets from './snippets';

const Story: FC<{ value: ResponsiveValue<string> }> = ({ value }) => {
  const v = useResponsiveValue(value);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
      }}
    >
      <span>{v}</span>
    </div>
  );
};

export const primaryStory = () => {
  return (
    <ViewportProvider>
      <Story value={['SMALL', 'MEDIUM', 'LARGE']} />
    </ViewportProvider>
  );
};

primaryStory.story = {
  parameters: {
    code: snippets.BASIC,
  },
};

export const fixedValue = () => {
  return (
    <ViewportProvider>
      <Story value="ALL" />
    </ViewportProvider>
  );
};

fixedValue.story = {
  parameters: {
    code: snippets.FIXED_VALUE,
  },
};

export default {
  title: 'useResponsiveValue',
  component: useResponsiveValue,
  parameters: {
    notes: {
      markdown: `
This hook takes a responsive value, which can be a value or a tuple of three
values of any type, and returns the value that matches the current viewport.

Resize the browser window to see it in action!
      `,
    },
  },
};
