import { Switch } from 'antd';
import classNames from 'classnames';
import React, { FC, ReactNode, useEffect, useRef, useState } from 'react';
import { WithId } from 'types';

import closeEye from '../../imgs/close-eye.png';
import exampleEmail from '../../imgs/example-email.svg';
import forward from '../../imgs/forward.svg';
import openEye from '../../imgs/open-eye.png';
import reply from '../../imgs/reply.svg';
import replyAll from '../../imgs/reply-all.svg';
import signAboutTalkdesk from '../../imgs/sign-about-talkdesk.png';
import Avatar from './Avatar';
import styles from './EmailSidePanel.module.less';
import Files from './Files';
import SidePanel from './SidePanel';

export interface EmailItemProps {
  fromSrc: string;
  fromName?: string;
  toSrc: string | string[];
  toName?: string | string[];
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

const EmailItem: FC<EmailItemProps & EmailItemStateProps & { canScroll: boolean }> = ({
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
  canScroll,
  onChange,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  toSrc = Array.isArray(toSrc) ? toSrc : [toSrc];
  toName = Array.isArray(toName) ? toName : [toName || ''];
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

  useEffect(() => {
    if (!containerRef.current) return;
    if (canScroll) {
      containerRef.current.scrollIntoView();
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={classNames(styles.item, canScroll && styles.itemHighlight)}
    >
      <div className={styles.itemHeader}>
        <div className={styles.itemHeaderLeft}>
          <div className={styles.avatarContainer}>
            <Avatar agentName={fromName} src={fromSrc} />
            <span className={classNames(styles.to, styles.ml4)}>To</span>
            {toSrc.map((toSrcItem, index) => (
              <Avatar
                key={toSrcItem}
                agentName={(toName as string[])[index]}
                src={toSrcItem}
                className={styles.ml4}
              />
            ))}
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
        <div className={styles.itemHeaderRight}>
          <div className={styles.itemHeaderRightItem}>
            <img className={styles.itemHeaderRightItemIcon} src={reply} alt="reply" />
          </div>
          <div className={styles.itemHeaderRightItem}>
            <img
              className={styles.itemHeaderRightItemIcon}
              src={replyAll}
              alt="reply-all"
            />
          </div>
          <div className={styles.itemHeaderRightItem}>
            <img className={styles.itemHeaderRightItemIcon} src={forward} alt="forward" />
          </div>
          <div
            className={styles.itemHeaderRightItem}
            onClick={() => onChange(index, !showMore)}
          >
            <img
              className={styles.itemHeaderRightItemIcon}
              src={showMore ? openEye : closeEye}
              alt="eye"
            />
          </div>
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
  ccToScroll?: string;
  srcToScroll?: string;
  data: WithId<EmailItemProps>[];
  visible: boolean;
  onClose: () => void;
}

const EmailSidePanel: FC<EmailSidePanelProps> = ({
  ccToScroll = '',
  data,
  visible,
  onClose,
}) => {
  const [showMoreList, setShowMoreList] = useState(
    Array.from(new Array(data.length), () => false),
  );
  const [showAllMore, setShowAllMore] = useState(false);
  const firstFindCache = useRef(Array.from(new Array(data.length), () => false));

  const onChange = (index: number, showMore: boolean) => {
    const newShowMoreList = [...showMoreList];
    newShowMoreList[index] = showMore;

    setShowMoreList(newShowMoreList);
  };

  const getCanScroll = (ccSrcs: string[] = [], i: number = 0) => {
    if (firstFindCache.current[i]) return true;
    // only scroll to the first item element
    if (ccSrcs.includes(ccToScroll)) {
      firstFindCache.current[i] = true;

      return true;
    }
    firstFindCache.current[i] = false;

    return false;
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
        <div className={styles.switchContainer}>
          <Switch
            style={{ marginRight: 8 }}
            checked={showAllMore}
            onChange={() => setShowAllMore(!showAllMore)}
          />
          Original
        </div>
      </div>
      {data.map(({ id, ccSrcs, ...rest }, index) => (
        <EmailItem
          key={id}
          canScroll={getCanScroll(ccSrcs, index)}
          index={index}
          showMore={showMoreList[index]}
          ccSrcs={ccSrcs}
          onChange={onChange}
          {...rest}
        />
      ))}
    </SidePanel>
  );
};

export default EmailSidePanel;
