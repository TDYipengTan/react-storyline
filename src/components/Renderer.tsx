import React, { FC, useCallback, useRef, useState } from 'react';
import ReactFlow, {
  addEdge,
  ReactFlowInstance,
  ReactFlowProps,
  updateEdge,
  useEdgesState,
  useNodesState,
} from 'react-flow-renderer';
import { getRandomId, parseJSON } from 'utils';

const connectionLineStyle = { stroke: '#999' };

interface RendererProps extends ReactFlowProps {}

/**
 * 1. support custom node and line
 * 2. support sidebar
 * 3. support property panel (MAYBE TO DO)
 */
const Renderer: FC<RendererProps> = ({
  nodes: nodesFromProps = [],
  nodeTypes = {},
  edges: edgesFromProps = [],
  edgeTypes = {},
  ...rest
}) => {
  const [reactFlowInstance, setReactFlowInstance] = useState<ReactFlowInstance | null>(
    null,
  );

  const reactFlowWrapper = useRef<HTMLDivElement | null>(null);

  // eslint-disable-next-line no-unused-vars
  const [nodes, setNodes, onNodesChange] = useNodesState(nodesFromProps);
  const [edges, setEdges, onEdgesChange] = useEdgesState(edgesFromProps);

  const onEdgeUpdate = useCallback(
    (oldEdge, newConnection) =>
      setEdges((els) => updateEdge(oldEdge, newConnection, els)),
    [],
  );

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge({ ...params }, eds)),
    [],
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event) => {
      if (!reactFlowWrapper.current || !reactFlowInstance) return;

      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const { nodeType: type, data } = parseJSON(
        event.dataTransfer.getData('application/reactflow'),
      );

      // check if the dropped element is valid
      if (typeof type === 'undefined' || !type) {
        return;
      }

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
      const newNode = {
        id: getRandomId(),
        type,
        position,
        data,
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance],
  );

  return (
    <ReactFlow
      fitView
      ref={reactFlowWrapper}
      style={{ backgroundColor: '#E9E9F0' }}
      nodes={nodes}
      edges={edges}
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onEdgeUpdate={onEdgeUpdate}
      onConnect={onConnect}
      onInit={setReactFlowInstance}
      onDrop={onDrop}
      onDragOver={onDragOver}
      connectionLineStyle={connectionLineStyle}
      defaultZoom={1.5}
      attributionPosition="bottom-right"
      {...rest}
    />
  );
};

export default Renderer;
