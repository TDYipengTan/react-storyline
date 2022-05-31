import ContextMenu from 'components/common/ContextMenu';
import EmailSidePanel from 'components/common/EmailSidePanel';
import React, { FC, useState } from 'react';
import { NodeProps } from 'react-flow-renderer';

import CenterHandle from '../CenterHandle';
import styles from './Channel.module.less';

interface ChannelProps extends NodeProps {
  data: {
    type: 'email' | 'chat' | 'sms' | 'call';
    src: string;
    icons?: string[];
    count?: number;
  };
}

const Channel: FC<ChannelProps> = ({
  isConnectable,
  data: { type, src, icons = [], count = 0 },
  selected,
}) => {
  const [showEmailSidePanel, setShowEmailSidePanel] = useState(false);

  const showEmailSidePanelFn = () => {
    if (type === 'email') {
      setShowEmailSidePanel(true);
    }
  };

  const closeEmailSidePanelFn = () => {
    setShowEmailSidePanel(false);
  };

  const newIcons = icons.map((icon) => {
    return typeof icon === 'string' ? { icon, style: {} } : icon;
  });

  const typeEl = <img className={styles.type} src={src} alt={`icon: ${type}`} />;

  const countEl = count && <span className={styles.count}>{count}</span>;

  const listEl = (
    <ul className={styles.listContainer}>
      {newIcons.map(({ icon, style }) => (
        <li style={style} key={icon}>
          <img src={icon} alt="icon" />
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <ContextMenu
        dataWithAction={[
          { id: 0, label: '查看详情', callback: showEmailSidePanelFn },
          { id: 1, label: '下载附件' },
          { id: 2, label: '全部归档' },
        ]}
      >
        <div
          className={[styles.container, styles[type], selected && styles.selected]
            .filter(Boolean)
            .join(' ')}
          onClick={() => showEmailSidePanelFn()}
        >
          {typeEl}
          {countEl}
          {listEl}
        </div>
      </ContextMenu>
      <EmailSidePanel visible={showEmailSidePanel} onClose={closeEmailSidePanelFn} />
      <CenterHandle isConnectable={isConnectable} />
    </>
  );
};

export default Channel;
