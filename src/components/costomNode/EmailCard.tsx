import { Card } from 'antd';
import React, { FC } from 'react';
import { Handle, NodeProps, Position } from 'react-flow-renderer';

interface EmailCardProps extends NodeProps {}

const EmailCard: FC<EmailCardProps> = ({ isConnectable, data }) => {
  console.log('data', data);

  return (
    <>
      <Card>EmailCard</Card>
      <Handle
        type="source"
        position={'right' as Position}
        isConnectable={isConnectable}
      />
    </>
  );
};

export default EmailCard;
