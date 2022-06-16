import React, { FC, HTMLAttributes, useEffect, useState } from 'react';

import useOutsideClick from '../useOutsideClick';
import * as snippets from './snippets';

interface Props extends HTMLAttributes<HTMLElement> {
  enabled?: boolean;
  nested?: boolean;
}

const Component: FC<Props> = ({ enabled = true, nested }) => {
  const DEFAULT_MESSAGE = 'Click outside this box';
  const [message, setMessage] = useState(DEFAULT_MESSAGE);

  const handlers = useOutsideClick(() => {
    console.log('Outside click detected');
    setMessage('Outside click detected');
  }, enabled);

  const nestedHandlerEnabled = enabled && !!nested;
  const nestedHandlers = useOutsideClick(() => {
    console.log('Nested outside detected');
  }, nestedHandlerEnabled);

  useEffect(() => {
    setTimeout(() => setMessage(DEFAULT_MESSAGE), 5000);
  }, [message]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'center',
        alignItems: 'center',
        padding: 4,
        width: 200,
        height: 200,
        backgroundColor: '#a1a1a1',
      }}
      {...handlers}
    >
      <div
        style={{
          display: 'flex',
          flexGrow: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {message}
      </div>
      {nested ? (
        <div
          style={{
            position: 'absolute',
            top: '190px',
            width: 200,
            height: 100,
            paddingTop: 8,
            paddingBottom: 8,
            border: '1px solid white',
            backgroundColor: 'black',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
          {...nestedHandlers}
        >
          Nested container. Check console for nested outside clicks.
        </div>
      ) : null}
    </div>
  );
};

export const primaryStory = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Component />
    </div>
  );
};

primaryStory.parameters = {
  docs: { source: { code: snippets.BASIC } },
};

export const onIframe = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <iframe
        title="CD"
        src="https://cobalt-design.talkdeskapp.com/"
        width={200}
        height={200}
      />
      <Component />
    </div>
  );
};

onIframe.parameters = {
  docs: { source: { code: snippets.BASIC }, disable: true },
};

export const nested = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Component nested />
    </div>
  );
};

nested.parameters = {
  docs: { source: { code: snippets.BASIC }, disable: true },
};

export default {
  title: 'useOutsideClick',
  component: useOutsideClick,
  parameters: {
    notes: {
      markdown: `
This hook takes a callback function, to be called when a click outside is detected,
and a boolean value, to determine if the callback is called or not,
and returns a handler to be passed to the component that should be detecting outside clicks.

Try clicking outside the gray area and looking at the console's logs!
      `,
    },
  },
};
