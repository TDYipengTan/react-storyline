import ThemeProvider from '@cobalt/react-theme-provider';
import ViewportProvider from '@cobalt/react-viewport-provider';
import Theme from '@cobalt/theme-experimental';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import styles from './variable-coverage';

ReactDOM.render(
  <ThemeProvider style={styles} loader={() => Promise.resolve(Theme)}>
    <ViewportProvider>
      <App />
    </ViewportProvider>
  </ThemeProvider>,
  document.getElementById('root'),
);
