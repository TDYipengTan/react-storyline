import Flex from '@cobalt/react-flex';
import React from 'react';

import styles from './App.module.less';

function App() {
  return (
    <Flex direction="column" width="100%">
      <Flex className={styles.header}>Hello</Flex>
      <Flex className={styles.header}>World</Flex>
      <Flex className={styles.header}>!</Flex>
    </Flex>
  );
}

export default App;
