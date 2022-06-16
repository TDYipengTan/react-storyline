import React, { FC } from 'react';
import { Handle, Position } from 'react-flow-renderer';

import styles from './CenterHandle.module.less';

interface CenterHandleProps {
  isConnectable: boolean;
}

const CenterHandle: FC<CenterHandleProps> = ({ isConnectable }) => {
  return (
    <>
      <Handle
        className={styles.handle}
        isConnectable={isConnectable}
        type="source"
        position={'top' as Position}
      />
      <Handle
        className={styles.handle}
        isConnectable={isConnectable}
        type="target"
        position={'top' as Position}
      />
    </>
  );
};

export default CenterHandle;
