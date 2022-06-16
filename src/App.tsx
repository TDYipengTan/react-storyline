import ViewportProvider from '@cobalt/react-viewport-provider';
import { Col, Row } from 'antd';
import Renderer, { RendererProps } from 'components/Renderer';
import Sidebar, { SidebarProps } from 'components/Sidebar';
import { DEFAULT_EDGE_TYPES, DEFAULT_ITEMS_CONFIG, DEFAULT_NODE_TYPES } from 'configs';
import React, { FC } from 'react';
import { assign, assignArray } from 'utils';

import styles from './App.module.less';

console.log(import.meta.env);

const showSidebar = sessionStorage.getItem('show-side-bar');

interface AppProps extends SidebarProps, RendererProps {}

const App: FC<AppProps> = ({ nodeTypes, edgeTypes, itemsConfig, ...rest }) => {
  return (
    <ViewportProvider>
      <Row className={`${styles.app} app`}>
        {showSidebar && (
          <Col flex="300px">
            <Sidebar itemsConfig={assignArray(DEFAULT_ITEMS_CONFIG, itemsConfig)} />
          </Col>
        )}
        <Col flex="auto">
          <Renderer
            {...rest}
            nodeTypes={assign(DEFAULT_NODE_TYPES, nodeTypes)}
            edgeTypes={assign(DEFAULT_EDGE_TYPES, edgeTypes)}
          />
        </Col>
      </Row>
    </ViewportProvider>
  );
};

export default App;
