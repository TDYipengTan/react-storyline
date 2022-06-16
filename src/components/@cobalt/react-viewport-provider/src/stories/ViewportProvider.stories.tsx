/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import ViewportProvider, { useViewport } from '../ViewportProvider';
import * as snippets from './snippets';

const CustomComponent = () => {
  const viewport = useViewport();

  return (
    <div>
      <p>Resize browser's window to reach different viewports</p>
      <p>
        Current viewport size: <b>{viewport}</b>
      </p>
    </div>
  );
};

export const primaryStory = () => {
  return (
    <ViewportProvider>
      <CustomComponent />
    </ViewportProvider>
  );
};

primaryStory.story = {
  parameters: {
    code: snippets.DEFAULT,
  },
};

export default { title: 'ViewportProvider' };
