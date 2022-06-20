import { Switch } from 'antd';
import classNames from 'classnames';
import React, { FC, ReactNode, useEffect, useState } from 'react';
import { WithId } from 'types';

import closeEye from '../../imgs/close-eye.png';
import exampleEmail from '../../imgs/example-email.svg';
import link from '../../imgs/link.png';
import openEye from '../../imgs/open-eye.png';
import signAboutTalkdesk from '../../imgs/sign-about-talkdesk.png';
import Avatar from './Avatar';
import styles from './EmailSidePanel.module.less';
import Files from './Files';
import SidePanel from './SidePanel';

export interface EmailItemProps {
  fromSrc: string;
  fromName?: string;
  toSrc: string;
  toName?: string;
  ccSrcs?: string[];
  ccNames?: string[];
  content: ReactNode;
  date: string;
  signInfo?: {
    name: string;
    phone: string;
  };
  filesSrc?: string[];
}

interface EmailItemStateProps {
  index: number;
  showMore: boolean;
  // eslint-disable-next-line no-unused-vars
  onChange: (index: number, showMore: boolean) => void;
}

const EmailItem: FC<EmailItemProps & EmailItemStateProps> = ({
  fromSrc,
  fromName,
  toSrc,
  toName,
  ccSrcs,
  ccNames,
  content,
  filesSrc,
  date,
  signInfo,
  index,
  showMore,
  onChange,
}) => {
  const signInfoEl = signInfo && (
    <div className={styles.signContainer}>
      <div>—</div>
      <div className={styles.signName}>{signInfo.name}</div>
      <div className={styles.signPhone}>{signInfo.phone}</div>
      <img
        className={styles.signAboutTalkdesk}
        src={signAboutTalkdesk}
        alt="sign about talkdesk"
      />
    </div>
  );

  return (
    <div className={styles.item}>
      <div className={styles.itemHeader}>
        <div className={styles.itemHeaderLeft}>
          <div className={styles.avatarContainer}>
            <Avatar agentName={fromName} src={fromSrc} />
            <span className={classNames(styles.to, styles.ml4)}>To</span>
            <Avatar agentName={toName} src={toSrc} className={styles.ml4} />
          </div>
          {ccSrcs?.length && (
            <div className={styles.avatarContainer}>
              <span className={styles.cc}>Cc</span>
              {ccSrcs.map((ccSrc, index) => (
                <Avatar
                  key={ccSrc}
                  agentName={ccNames ? ccNames[index] : ''}
                  src={ccSrc}
                  className={styles.ml4}
                />
              ))}
            </div>
          )}
        </div>
        <div
          className={styles.itemHeaderRight}
          onClick={() => onChange(index, !showMore)}
        >
          <img
            className={styles.itemHeaderRightIcon}
            src={showMore ? openEye : closeEye}
            alt="right icon"
          />
        </div>
      </div>
      <div className={styles.content}>{content}</div>
      {showMore && <Files filesSrc={filesSrc} />}
      <div className={styles.itemDate}>{date}</div>
      {showMore && signInfoEl}
    </div>
  );
};

interface EmailSidePanelProps {
  data: WithId<EmailItemProps>[];
  visible: boolean;
  onClose: () => void;
}

const EmailSidePanel: FC<EmailSidePanelProps> = ({ data, visible, onClose }) => {
  const [showMoreList, setShowMoreList] = useState(
    Array.from(new Array(data.length), () => false),
  );
  const [showAllMore, setShowAllMore] = useState(false);

  const onChange = (index: number, showMore: boolean) => {
    const newShowMoreList = [...showMoreList];
    newShowMoreList[index] = showMore;

    setShowMoreList(newShowMoreList);
  };

  useEffect(() => {
    setShowMoreList((pre) => pre.map(() => showAllMore));
  }, [showAllMore]);

  return (
    <SidePanel
      visible={visible}
      titleIcon={exampleEmail}
      title="Email"
      headerStyle={{
        color: '#5481dd',
      }}
      bodyStyle={{
        paddingTop: 27,
      }}
      onClose={onClose}
    >
      <div className={styles.title}>Ask questions about my insurance and salary</div>
      <div className={styles.iconsContainer}>
        <img className={styles.link} src={link} alt="link" />
        <div className={styles.switchContainer}>
          <Switch
            style={{ marginRight: 8 }}
            checked={showAllMore}
            onChange={() => setShowAllMore(!showAllMore)}
          />
          Original
        </div>
      </div>
      {data.map(({ id, ...rest }, index) => (
        <EmailItem
          key={id}
          index={index}
          showMore={showMoreList[index]}
          onChange={onChange}
          {...rest}
        />
      ))}
    </SidePanel>
  );
};

export default EmailSidePanel;
