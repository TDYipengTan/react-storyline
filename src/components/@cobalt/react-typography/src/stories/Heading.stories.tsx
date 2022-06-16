import React from 'react';

import Heading from '../Heading';
import { TruncatedWrapper } from './helpers';
import * as snippets from './snippets';

export const primaryStory = () => {
  return (
    <>
      <Heading level="1" style={{ margin: '8px 0' }}>
        This is an H1
      </Heading>
      <Heading level="2" style={{ margin: '8px 0' }}>
        This is an H2
      </Heading>
      <Heading level="3" style={{ margin: '8px 0' }}>
        This is an H3
      </Heading>
      <Heading level="4" style={{ margin: '8px 0' }}>
        This is an H4
      </Heading>
      <Heading level="5" style={{ margin: '8px 0' }}>
        This is an H5
      </Heading>
      <Heading level="6" style={{ margin: '8px 0' }}>
        This is an H6
      </Heading>
    </>
  );
};

primaryStory.parameters = {
  docs: { source: { code: snippets.HEADING_DEFAULT } },
};

export const HeadingsWithModifiers = () => {
  return (
    <>
      <Heading level="2" asLevel="1" style={{ margin: '8px 0' }}>
        This is an H2 with the style of H1
      </Heading>
      <Heading level="1" asLevel="2" style={{ margin: '8px 0' }}>
        This is an H1 with the style of H2
      </Heading>
      <Heading level="1" asLevel="3" style={{ margin: '8px 0' }}>
        This is an H1 with the style of H3
      </Heading>
      <Heading level="1" asLevel="4" style={{ margin: '8px 0' }}>
        This is an H1 with the style of H4
      </Heading>
      <Heading level="1" asLevel="5" style={{ margin: '8px 0' }}>
        This is an H1 with the style of H5
      </Heading>
      <Heading level="1" asLevel="6">
        This is an H1 with the style of H6
      </Heading>
    </>
  );
};

HeadingsWithModifiers.parameters = {
  docs: { source: { code: snippets.HEADING_MODIFIERS } },
};

export const HeadingColor = () => {
  return (
    <Heading level="1" color="steelblue">
      Header with color
    </Heading>
  );
};

HeadingColor.storyName = 'Headings With Color';
HeadingColor.parameters = {
  docs: { source: { code: snippets.HEADING_COLOR } },
};

export const HeadingTruncated = () => {
  return (
    <TruncatedWrapper>
      <Heading level="1" truncated>
        This is a very long title truncated
      </Heading>
    </TruncatedWrapper>
  );
};

HeadingTruncated.storyName = 'Truncated';
HeadingTruncated.parameters = {
  docs: { source: { code: snippets.HEADING_TRUNCATED } },
};

export const headingSkeleton = () => {
  return (
    <>
      <Heading level="1" skeleton="static" />
      <br />
      <Heading level="2" skeleton="animated" />
      <br />
      <Heading level="3" skeleton={{ type: 'static', width: 500 }} />
      <br />
      <Heading level="4" skeleton={{ type: 'animated', width: 300 }} />
    </>
  );
};

headingSkeleton.storyName = 'Skeleton';
headingSkeleton.parameters = {
  docs: { source: { code: snippets.HEADING_SKELETON } },
};

export default { title: 'Heading', component: Heading };
