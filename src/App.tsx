import React from 'react';

import styles from './App.module.less';

console.log(import.meta.env);

function App() {
  return <div className={`${styles.header} header`}>hello world!!!</div>;
}

export default App;
