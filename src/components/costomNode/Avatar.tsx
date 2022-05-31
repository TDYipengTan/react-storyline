import { Tooltip } from 'antd';
import ContextMenu from 'components/common/ContextMenu';
import React, { FC } from 'react';
import { NodeProps } from 'react-flow-renderer';

import CenterHandle from '../CenterHandle';
import styles from './Avatar.module.less';

interface AvatarProps extends NodeProps {
  data: {
    src: string;
    state: 'normal' | 'busy' | 'away';
    name: string;
  };
}

const Avatar: FC<AvatarProps> = ({ isConnectable, data: { src, state, name } }) => {
  const avatarEl = <img className={styles.avatar} src={src} alt="avatar" />;

  const stateEl = <span className={`${styles.state} ${styles[state]}`} />;

  return (
    <>
      <ContextMenu
        dataWithAction={[
          { id: 0, label: '个人资料' },
          { id: 1, label: '添加联系人' },
          { id: 2, label: '收藏联系人' },
          { id: 3, label: '发送Email' },
          { id: 4, label: '拨打电话' },
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
