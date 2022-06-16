import { Tooltip } from 'antd';
import ContextMenu from 'components/common/ContextMenu';
import useShowMeByCc from 'hooks/useShowMeByCc';
import React, { FC } from 'react';
import { NodeProps } from 'react-flow-renderer';

import CenterHandle from '../CenterHandle';
import styles from './Avatar.module.less';

interface AvatarProps extends NodeProps {
  data: {
    cc?: boolean;
    src: string;
    state: 'normal' | 'busy' | 'away';
    name: string;
  };
}

const Avatar: FC<AvatarProps> = ({
  isConnectable,
  data: { cc = false, src, state, name },
}) => {
  const showMe = useShowMeByCc(cc);

  const avatarEl = <img className={styles.avatar} src={src} alt="avatar" />;

  const stateEl = <span className={`${styles.state} ${styles[state]}`} />;

  if (!showMe) return null;

  return (
    <>
      <ContextMenu
        dataWithAction={[
          { id: 0, label: 'View profile' },
          { id: 1, label: 'Add Jona lee' },
          { id: 2, label: 'Chat' },
          { id: 3, label: 'Email' },
          { id: 4, label: 'Voice' },
        ]}
      >
        <Tooltip placement="top" title={`Agent：${name}`}>
          <div className={styles.container}>
            {avatarEl}
            {stateEl}
          </div>
        </Tooltip>
      </ContextMenu>
      <CenterHandle isConnectable={isConnectable} />
    </>
  );
};

export default Avatar;
