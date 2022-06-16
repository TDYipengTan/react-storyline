import classNames from 'classnames';
import { EmailChannelMockData } from 'mock';
import React, { FC, ReactNode } from 'react';

import exampleEmail from '../../imgs/example-email.svg';
import Avatar from './Avatar';
import styles from './EmailSidePanel.module.less';
import Files from './Files';
import SidePanel from './SidePanel';

export interface EmailItemProps {
  fromSrc: string;
  toSrc: string;
  ccSrcs?: string[];
  content: ReactNode;
  date: string;
  filesSrc?: string[];
}

const EmailItem: FC<EmailItemProps> = ({
  fromSrc,
  toSrc,
  ccSrcs,
  content,
  filesSrc,
  date,
}) => {
  return (
    <div className={styles.item}>
      <div className={styles.itemHeader}>
        <div className={styles.avatarContainer}>
          <Avatar src={fromSrc} />
          <span className={classNames(styles.to, styles.ml4)}>To</span>
          <Avatar src={toSrc} className={styles.ml4} />
        </div>
        {ccSrcs?.length && (
          <div className={styles.avatarContainer}>
            <span className={styles.cc}>Cc</span>
            {ccSrcs.map((ccSrc) => (
              <Avatar key={ccSrc} src={ccSrc} className={styles.ml4} />
            ))}
          </div>
        )}
      </div>
      <div className={styles.content}>{content}</div>
      <Files filesSrc={filesSrc} />
      <div className={styles.itemDate}>{date}</div>
    </div>
  );
};

interface EmailSidePanelProps {
  visible: boolean;
  onClose: () => void;
}

const EmailSidePanel: FC<EmailSidePanelProps> = ({ visible, onClose }) => {
  return (
    <SidePanel
      visible={visible}
      titleIcon={exampleEmail}
      title="Email"
      headerStyle={{
        color: '#5481dd',
      }}
      bodyStyle={{
        paddingTop: 48,
      }}
      onClose={onClose}
    >
      {EmailChannelMockData.map(({ id, ...rest }) => (
        <EmailItem key={id} {...rest} />
      ))}
    </SidePanel>
  );
};

export default EmailSidePanel;
