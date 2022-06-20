import { Switch } from 'antd';
import classNames from 'classnames';
import React, { FC, ReactNode, useState } from 'react';
import { WithId } from 'types';

import closeEye from '../../imgs/close-eye.png';
import exampleEmail from '../../imgs/example-email.svg';
import link from '../../imgs/link.png';
import openEye from '../../imgs/open-eye.png';
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

interface EmailItemStateProps {
  index: number;
  showMore: boolean;
  // eslint-disable-next-line no-unused-vars
  onChange: (index: number, showMore: boolean) => void;
}

const EmailItem: FC<EmailItemProps & EmailItemStateProps> = ({
  fromSrc,
  toSrc,
  ccSrcs,
  content,
  filesSrc,
  date,
  index,
  showMore,
  onChange,
}) => {
  return (
    <div className={styles.item}>
      <div className={styles.itemHeader}>
        <div className={styles.itemHeaderLeft}>
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
      <Files filesSrc={filesSrc} />
      <div className={styles.itemDate}>{date}</div>
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
        <img src={link} alt="link" />
        <div className={styles.switchContainer}>
          <Switch checked={showAllMore} onChange={() => setShowAllMore(!showAllMore)} />
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
