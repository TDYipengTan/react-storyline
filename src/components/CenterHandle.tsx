import React, { FC } from 'react';
import { Handle, Position } from 'react-flow-renderer';

const style = {
  top: '50%',
  transform: 'translate(-50%, -50%) scale(0)',
};

interface CenterHandleProps {
  isConnectable: boolean;
}

const CenterHandle: FC<CenterHandleProps> = ({ isConnectable }) => {
  return (
    <>
      <Handle
        style={style}
        isConnectable={isConnectable}
        type="source"
        position={'top' as Position}
      />
      <Handle
        style={style}
        isConnectable={isConnectable}
        type="target"
        position={'top' as Position}
      />
    </>
  );
};

export default CenterHandle;
