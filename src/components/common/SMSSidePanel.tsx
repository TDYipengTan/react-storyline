import React, { FC, ReactNode } from 'react';
import { WithId } from 'types';

import exampleSMS from '../../imgs/example-sms.png';
import Avatar from './Avatar';
import ChannelItemTime from './ChannelItemTime';
import Files from './Files';
import SidePanel from './SidePanel';
import styles from './SMSSidePanel.module.less';

export interface SMSItemProps {
  src: string;
  content: ReactNode;
  time: string;
  filesSrc?: string[];
}

const SMSItem: FC<SMSItemProps> = ({ src, content, time, filesSrc = [] }) => {
  return (
    <div className={styles.item}>
      <Avatar style={{ width: 32, height: 32 }} src={src} />
      <div className={styles.container}>
        <div className={styles.content}>{content}</div>
        <Files filesSrc={filesSrc} />
        <div className={styles.time}>{time}</div>
      </div>
    </div>
  );
};

interface SMSSidePanelProps {
  data: WithId<SMSItemProps>[];
  visible: boolean;
  onClose: () => void;
}

const SMSSidePanel: FC<SMSSidePanelProps> = ({ data, visible, onClose }) => {
  return (
    <SidePanel
      visible={visible}
      titleIcon={exampleSMS}
      title="SMS"
      headerStyle={{
        color: '#d48d2b',
      }}
      bodyStyle={{
        paddingTop: 27,
      }}
      onClose={onClose}
    >
      <ChannelItemTime style={{ marginBottom: 25 }} value={'2022-03-15'} />
      {data.map(({ id, ...rest }) => (
        <SMSItem key={id} {...rest} />
      ))}
    </SidePanel>
  );
};

export default SMSSidePanel;
