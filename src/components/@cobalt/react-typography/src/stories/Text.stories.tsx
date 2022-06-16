import React from 'react';

import Text from '../Text';
import { TruncatedWrapper } from './helpers';
import * as snippets from './snippets';

export const primaryStory = () => {
  return (
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
      irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
      deserunt mollit anim id est laborum.
    </Text>
  );
};

primaryStory.parameters = {
  docs: { source: { code: snippets.TEXT_DEFAULT } },
};

export const Sizes = () => {
  return (
    <>
      <h5>Small:</h5>
      <Text size="small">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Tristique senectus et netus et
        malesuada.
      </Text>

      <h5>Medium:</h5>
      <Text size="medium">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Tristique senectus et netus et
        malesuada.
      </Text>
    </>
  );
};

Sizes.parameters = {
  docs: { source: { code: snippets.SIZES } },
};

export const Weights = () => {
  return (
    <>
      <h5>Light:</h5>
      <Text weight="light">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Tristique senectus et netus et
        malesuada.
      </Text>
      <h5>Regular:</h5>
      <Text weight="regular">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Tristique senectus et netus et
        malesuada.
      </Text>
      <h5>Medium:</h5>
      <Text weight="medium">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Tristique senectus et netus et
        malesuada.
      </Text>
      <h5>Inherit (inherits the font-weight from its ancestors):</h5>
      <div style={{ backgroundColor: '#EEE', fontWeight: 500 }}>
        <Text weight="inherit">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Tristique senectus et netus et
          malesuada.
        </Text>
      </div>
      <h5>Inline medium:</h5>
      <Text>
        This is a text{' '}
        <Text weight="medium" inline>
          partially in bold
        </Text>
        .
      </Text>
    </>
  );
};

Weights.parameters = {
  docs: { source: { code: snippets.WEIGHTS } },
};

export const TextInline = () => {
  return (
    <>
      <Text inline style={{ marginLeft: '8px' }}>
        Text 1.
      </Text>
      <Text inline style={{ marginLeft: '8px' }}>
        Text 2.
      </Text>
      <Text inline style={{ marginLeft: '8px' }}>
        Text 3.
      </Text>
    </>
  );
};

TextInline.parameters = {
  docs: { source: { code: snippets.TEXT_INLINE } },
};

export const TextColor = () => {
  return (
    <Text color="steelblue">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Tristique senectus et netus et
      malesuada.
    </Text>
  );
};

TextColor.parameters = {
  docs: { source: { code: snippets.TEXT_COLOR } },
};

export const ParagraphTruncated = () => {
  return (
    <TruncatedWrapper>
      <Text truncated>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis ante nec
        erat ultricies, nec dignissim mi imperdiet. Morbi ullamcorper urna justo, sed
        faucibus ante egestas non.
      </Text>
    </TruncatedWrapper>
  );
};

ParagraphTruncated.parameters = {
  docs: { source: { code: snippets.TEXT_TRUNCATED } },
};

export const textSkeleton = () => {
  return (
    <>
      <Text skeleton="static" />
      <br />
      <Text skeleton="animated" />
      <br />
      <Text size="small" skeleton="static" />
      <br />
      <Text size="small" skeleton="animated" />
      <br />
      <Text skeleton={{ type: 'static', width: 450, lines: 3 }} />
      <br />
      <Text skeleton={{ type: 'animated', width: 450, lines: 2 }} />
    </>
  );
};

textSkeleton.parameters = {
  docs: { source: { code: snippets.TEXT_SKELETON } },
};

export default { title: 'Text', component: Text };
