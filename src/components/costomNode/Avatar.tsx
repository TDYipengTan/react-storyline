import { Divider, Tooltip } from 'antd';
import ContextMenu from 'components/common/ContextMenu';
import { fire, getCcScrollId } from 'event';
import useShowMeByCc from 'hooks/useShowMeByCc';
import React, { FC } from 'react';
import { NodeProps } from 'react-flow-renderer';

import CenterHandle from '../CenterHandle';
import styles from './Avatar.module.less';

interface AvatarProps
  extends NodeProps<{
    cc?: boolean;
    source?: string;
    src: string;
    state: 'normal' | 'busy' | 'away';
    name: string;
    email: string;
  }> {}

const Avatar: FC<AvatarProps> = ({
  isConnectable,
  data: { cc = false, source = '', src, state, name, email },
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
          { id: 1, label: `Add ${name}` },
          { id: 2, label: 'Chat' },
          { id: 3, label: 'Email' },
          { id: 4, label: 'Voice' },
        ]}
      >
        <Tooltip
          color="#fff"
          placement="top"
          title={
            <>
              <div className={styles.tooltipName}>{name}</div>
              <div className={styles.tooltipOccupation}>Agent</div>
              <Divider style={{ margin: '10px 0', backgroundColor: '#f1f1f1' }} />
              <div className={styles.tooltipEmailTitle}>Email Address</div>
              <a className={styles.tooltipEmail} href={`mailto:${email}`}>
                {email}
              </a>
            </>
          }
        >
          <div
            className={styles.container}
            onDoubleClick={() => {
              if (cc) {
                fire(getCcScrollId(source), src);
              }
            }}
          >
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
