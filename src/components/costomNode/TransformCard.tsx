import { Card } from 'antd';
import React, { FC } from 'react';
import { Handle, NodeProps, Position } from 'react-flow-renderer';

interface TransformCardProps extends NodeProps {}

const TransformCard: FC<TransformCardProps> = ({ isConnectable, data }) => {
  console.log('data', data);

  return (
    <>
      <Card>TransformCard</Card>
      <Handle type="target" position={'left' as Position} isConnectable={isConnectable} />
    </>
  );
};

export default TransformCard;
