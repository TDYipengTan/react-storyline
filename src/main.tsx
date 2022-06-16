import 'antd/es/row/style/css';
import 'antd/es/col/style/css';
import 'antd/es/tooltip/style/css';
import './main.less';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { edges, edgeTypes, itemsConfig, nodes, nodeTypes } from './mock';

ReactDOM.render(
  <App
    nodes={nodes}
    nodeTypes={nodeTypes}
    edges={edges}
    edgeTypes={edgeTypes}
    itemsConfig={itemsConfig}
    nodesDraggable={false}
    nodesConnectable={false}
    deleteKeyCode={null}
  />,
  document.getElementById('root'),
);
