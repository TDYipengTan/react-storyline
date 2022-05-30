import React, { FC, ReactNode } from 'react';

import exampleEmail from '../../imgs/example-email.svg';
import exampleFile from '../../imgs/example-file.png';
import exampleTable from '../../imgs/example-table.png';
import user1 from '../../imgs/user1.png';
import user2 from '../../imgs/user2.png';
import styles from './EmailSidePanel.module.less';
import SidePanel from './SidePanel';

interface EmailItemProps {
  fromSrc: string;
  toSrc: string;
  content: ReactNode;
  date: string;
  filesSrc?: string[];
}

const EmailItem: FC<EmailItemProps> = ({ fromSrc, toSrc, content, filesSrc, date }) => {
  return (
    <div className={styles.item}>
      <div className={styles.avatarContainer}>
        <img className={styles.avatar} src={fromSrc} alt="from" />
        <span className={styles.to}>To</span>
        <img className={styles.avatar} src={toSrc} alt="to" />
      </div>
      <div className={styles.content}>{content}</div>
      {filesSrc?.length && (
        <ul className={styles.filesContainer}>
          {filesSrc.map((fileSrc) => (
            <li className={styles.fileItem} key={fileSrc}>
              <img src={fileSrc} alt="file img" />
            </li>
          ))}
        </ul>
      )}
      <div className={styles.itemDate}>{date}</div>
    </div>
  );
};

const mockData: EmailItemProps[] = [
  {
    fromSrc: user1,
    toSrc: user2,
    content:
      '你好，我想查询一下我的保险缴纳情况和本月的工资明细。我收到通知，公司给我缴纳的保险没有生效。并且本月工资的明细也出现了问题。附件里是截图和明细表。',
    filesSrc: [exampleTable, exampleFile],
    date: '2022-03-14 09:34 AM',
  },
  {
    fromSrc: user2,
    toSrc: user1,
    content: (
      <>
        您好，很高兴为您服务。
        <br />
        请提供您的员工编号，我需要记录一下并帮您生成Ticket。
      </>
    ),
    date: '2022-03-14 10:42 AM',
  },
  {
    fromSrc: user1,
    toSrc: user2,
    content: '我的员工编号是002233，谢谢！',
    date: '2022-03-14 10:45 AM',
  },
];

interface EmailSidePanelProps {
  visible: boolean;
  onClose(): void;
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
      {mockData.map((item) => (
        <EmailItem key={item.content?.toString()} {...item} />
      ))}
    </SidePanel>
  );
};

export default EmailSidePanel;
