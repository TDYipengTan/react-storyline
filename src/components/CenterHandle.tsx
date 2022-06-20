import React, { FC } from 'react';
import { Handle, Position } from 'react-flow-renderer';

const topHandleStyle = {
  top: '50%',
  transform: 'translate(-50%, -50%) scale(0)',
};

const rightHandleStyle = {
  right: '50%',
  transform: 'translate(-50%, -50%) scale(0)',
};

const leftHandleStyle = {
  left: '50%',
  transform: 'translate(-50%, -50%) scale(0)',
};

interface CenterHandleProps {
  isConnectable: boolean;
}

const CenterHandle: FC<CenterHandleProps> = ({ isConnectable }) => {
  return (
    <>
      <Handle
        id="source-top"
        style={topHandleStyle}
        isConnectable={isConnectable}
        type="source"
        position={'top' as Position}
      />
      <Handle
        id="source-right"
        style={rightHandleStyle}
        isConnectable={isConnectable}
        type="source"
        position={'right' as Position}
      />
      <Handle
        id="target-top"
        style={topHandleStyle}
        isConnectable={isConnectable}
        type="target"
        position={'top' as Position}
      />
      <Handle
        id="target-left"
        style={leftHandleStyle}
        isConnectable={isConnectable}
        type="target"
        position={'left' as Position}
      />
    </>
  );
};

export default CenterHandle;
