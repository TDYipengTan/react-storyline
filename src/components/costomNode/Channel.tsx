import ContextMenu from 'components/common/ContextMenu';
import EmailSidePanel from 'components/common/EmailSidePanel';
import React, { CSSProperties, FC, useState } from 'react';
import { NodeProps } from 'react-flow-renderer';

import CenterHandle from '../CenterHandle';
import styles from './Channel.module.less';

const getTypeStyle = (type: ChannelProps['data']['type']): CSSProperties => ({
  width: 70,
  height: 70,
  backgroundColor:
    type === 'email'
      ? '#5481DD'
      : type === 'chat'
      ? '#648E43'
      : type === 'sms'
      ? '#D48D2B'
      : '#7D76E9',
  borderRadius: '50%',
});

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

  const typeEl = (
    <img
      src={src}
      style={{ width: '100%', height: '100%', pointerEvents: 'none' }}
      alt={`icon: ${type}`}
    />
  );

  const countEl = count && (
    <span
      style={{
        position: 'absolute',
        right: -3,
        top: -3,
        width: 24,
        height: 24,
        lineHeight: '24px',
        textAlign: 'center',
        fontSize: '10px',
        fontWeight: 600,
        color: '#fff',
        borderRadius: '50%',
        backgroundColor: '#cc5a00',
      }}
    >
      {count}
    </span>
  );

  const listEl = (
    <ul
      style={{
        position: 'absolute',
        left: '50%',
        bottom: -36,
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {newIcons.map(({ icon, style }) => (
        <li style={{ width: 24, height: 24, ...style }} key={icon}>
          <img style={{ width: '100%', height: '100%' }} src={icon} alt="icon" />
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
          aria-hidden="true"
          className={[styles.container, styles[type], selected && styles.selected]
            .filter(Boolean)
            .join(' ')}
          style={getTypeStyle(type)}
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
