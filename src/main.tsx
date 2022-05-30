import 'reset-css';
import './main.less';
import 'antd/es/row/style/css';
import 'antd/es/col/style/css';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { edges, edgeTypes, nodes, nodeTypes } from './mock';

ReactDOM.render(
  <App
    nodes={nodes}
    nodeTypes={nodeTypes}
    edges={edges}
    edgeTypes={edgeTypes}
    nodesDraggable={false}
    nodesConnectable={false}
  />,
  document.getElementById('root'),
);
