import React, { FC } from 'react';
import { WithId } from 'types';

import exampleChat from '../../imgs/example-chat.png';
import Avatar from './Avatar';
import ChannelItemTime from './ChannelItemTime';
import styles from './ChatSidePanel.module.less';
import SidePanel from './SidePanel';

export interface ChatItemProps {
  isImg?: boolean;
  src: string;
  content: string;
}

const ChatItem: FC<ChatItemProps> = ({ isImg = false, src, content }) => {
  return (
    <div className={styles.item}>
      <Avatar style={{ width: 32, height: 32 }} src={src} />
      {isImg ? (
        <img className={styles.imgContent} src={content} alt={content} />
      ) : (
        <div className={styles.content}>{content}</div>
      )}
    </div>
  );
};

interface ChatSidePanelProps {
  data: WithId<ChatItemProps>[];
  visible: boolean;
  onClose: () => void;
}

const ChatSidePanel: FC<ChatSidePanelProps> = ({ data, visible, onClose }) => {
  return (
    <SidePanel
      visible={visible}
      titleIcon={exampleChat}
      title="Chat"
      headerStyle={{
        color: '#648E43',
      }}
      bodyStyle={{
        paddingTop: 27,
      }}
      onClose={onClose}
    >
      <ChannelItemTime style={{ marginBottom: 24 }} value={'2022-03-14  10:45 AM'} />
      {data.map(({ id, ...rest }) => (
        <ChatItem key={id} {...rest} />
      ))}
    </SidePanel>
  );
};

export default ChatSidePanel;
