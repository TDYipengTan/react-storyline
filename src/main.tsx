import 'reset-css';
import 'antd/dist/antd.min.css';
import './main.less';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { edges, edgeTypes, nodes, nodeTypes } from './mock';

ReactDOM.render(
  <App nodes={nodes} nodeTypes={nodeTypes} edges={edges} edgeTypes={edgeTypes} />,
  document.getElementById('root'),
);
