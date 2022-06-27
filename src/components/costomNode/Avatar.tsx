import { Divider, Tooltip } from 'antd';
import classNames from 'classnames';
import ContextMenu from 'components/common/ContextMenu';
import useShowMeByCc from 'hooks/useShowMeByCc';
import React, { FC, useState } from 'react';
import { NodeProps } from 'react-flow-renderer';
import { fire, getCcScrollId } from 'utils';

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
    occupation?: string;
  }> {}

const stateToLabel = (state: AvatarProps['data']['state']) => {
  switch (state) {
    case 'normal':
      return 'Active';
    case 'busy':
      return 'Busy';
    case 'away':
      return 'Away';
    default:
      return 'None';
  }
};

const Avatar: FC<AvatarProps> = ({
  isConnectable,
  data: { cc = false, source = '', src, state, name, occupation, email },
}) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);

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
        onContextMenu={() => setTooltipVisible(false)}
      >
        <Tooltip
          visible={tooltipVisible}
          onVisibleChange={(v) => setTooltipVisible(v)}
          color="#fff"
          placement="top"
          overlayInnerStyle={{ padding: 0 }}
          title={
            <div
              className={styles.tooltipContainer}
              onClick={(e) => e.stopPropagation()}
              onContextMenu={(e) => e.stopPropagation()}
            >
              <div className={styles.tooltipName}>{name}</div>
              {occupation && <div className={styles.tooltipOccupation}>{occupation}</div>}
              <div className={styles.tooltipStatus}>
                <span className={classNames(styles[state], styles.dot)} />
                {stateToLabel(state)}
              </div>
              <Divider style={{ margin: '4px 0', backgroundColor: '#f1f1f1' }} />
              <div className={styles.tooltipEmailTitle}>Email Address</div>
              <a className={styles.tooltipEmail} href={`mailto:${email}`}>
                {email}
              </a>
            </div>
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
