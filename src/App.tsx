import { Col, Divider, Row } from 'antd';
import Renderer from 'components/Renderer';
import Sidebar from 'components/Sidebar';
import { DEFAULT_EDGE_TYPES, DEFAULT_NODE_TYPES } from 'configs';
import React, { FC } from 'react';
import { ReactFlowProps } from 'react-flow-renderer';
import { assign } from 'utils';

import styles from './App.module.less';

console.log(import.meta.env);

export interface CommonProps {
  nodes?: ReactFlowProps['nodes'];
  nodeTypes?: ReactFlowProps['nodeTypes'];
  edges?: ReactFlowProps['edges'];
  edgeTypes?: ReactFlowProps['edgeTypes'];
}

interface AppProps extends CommonProps {}

const App: FC<AppProps> = ({ nodes, nodeTypes, edges, edgeTypes }) => {
  return (
    <Row className={`${styles.app} app`}>
      <Col flex="300px">
        <Sidebar />
      </Col>
      <Col flex="none">
        <Divider style={{ height: '100%' }} type="vertical" />
      </Col>
      <Col flex="auto">
        <Renderer
          nodes={nodes}
          nodeTypes={assign(DEFAULT_NODE_TYPES, nodeTypes)}
          edges={edges}
          edgeTypes={assign(DEFAULT_EDGE_TYPES, edgeTypes)}
        />
      </Col>
    </Row>
  );
};

export default App;
