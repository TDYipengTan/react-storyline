import { Col, Row } from 'antd';
import Renderer from 'components/Renderer';
// import Sidebar from 'components/Sidebar';
import { DEFAULT_EDGE_TYPES, DEFAULT_NODE_TYPES } from 'configs';
import React, { FC } from 'react';
import { ReactFlowProps } from 'react-flow-renderer';
import { assign } from 'utils';

import styles from './App.module.less';

console.log(import.meta.env);

interface AppProps extends ReactFlowProps {}

const App: FC<AppProps> = ({ nodeTypes, edgeTypes, ...rest }) => {
  return (
    <Row className={`${styles.app} app`}>
      {/* <Col flex="300px">
        <Sidebar />
      </Col> */}
      <Col flex="auto">
        <Renderer
          {...rest}
          nodeTypes={assign(DEFAULT_NODE_TYPES, nodeTypes)}
          edgeTypes={assign(DEFAULT_EDGE_TYPES, edgeTypes)}
        />
      </Col>
    </Row>
  );
};

export default App;
