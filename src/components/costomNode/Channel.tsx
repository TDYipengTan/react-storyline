import { Tooltip } from 'antd';
import classNames from 'classnames';
import ChatSidePanel from 'components/common/ChatSidePanel';
import ContextMenu from 'components/common/ContextMenu';
import EmailSidePanel from 'components/common/EmailSidePanel';
import SMSSidePanel from 'components/common/SMSSidePanel';
import VoiceSidePanel from 'components/common/VoiceSidePanel';
import { MIN_ZOOM } from 'configs';
import useShowIconsByZoom from 'hooks/useShowIconsByZoom';
import React, { FC, ReactNode, useEffect, useRef, useState } from 'react';
import { NodeProps } from 'react-flow-renderer';
import { getCcScrollId, subscribe } from 'utils';

import CenterHandle from '../CenterHandle';
import FilePopover from '../common/FilePopover';
import LinksPopover from '../common/LinksPopover';
import styles from './Channel.module.less';

interface ChannelProps
  extends NodeProps<{
    description: ReactNode;
    type: 'email' | 'chat' | 'sms' | 'voice';
    src: string;
    data: any[];
    icons?: string[];
    count?: number;
  }> {}

const Channel: FC<ChannelProps> = ({
  id,
  isConnectable,
  data: { description, type, src, data, icons = [], count = 0 },
  selected,
}) => {
  const [showEmailSidePanel, setShowEmailSidePanel] = useState(false);
  const [showChatSidePanel, setShowChatSidePanel] = useState(false);
  const [showSMSSidePanel, setShowSMSSidePanel] = useState(false);
  const [showVoiceSidePanel, setShowVoiceSidePanel] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const ccToScrollRef = useRef<string>('');
  const showIcons = useShowIconsByZoom(MIN_ZOOM);

  const toggleChannelSidePanelVisible = (flag: boolean) => {
    switch (type) {
      case 'email':
        setShowEmailSidePanel(flag);
        break;
      case 'chat':
        setShowChatSidePanel(flag);
        break;
      case 'sms':
        setShowSMSSidePanel(flag);
        break;
      case 'voice':
        setShowVoiceSidePanel(flag);
        break;
      default:
        break;
    }
  };

  const showChannelSidePanelFn = () => {
    toggleChannelSidePanelVisible(true);
  };

  const closeChannelSidePanelFn = () => {
    toggleChannelSidePanelVisible(false);
  };

  const newIcons = icons.map((icon) => {
    return typeof icon === 'string'
      ? { icon, component: '', currentSelect: -1, listSrc: [], style: {} }
      : icon;
  });

  const typeEl = <img className={styles.type} src={src} alt={`icon: ${type}`} />;

  const countEl = Boolean(count) && <span className={styles.count}>{count}</span>;

  const listEl = showIcons && newIcons?.length && (
    <ul className={styles.listContainer}>
      {newIcons.map(({ icon, component, style, ...rest }) => (
        <li className={styles.listItem} style={style} key={icon}>
          {component ? (
            component === 'FilePopover' ? (
              <FilePopover iconSrc={icon} {...rest} />
            ) : (
              <LinksPopover iconSrc={icon} {...rest} />
            )
          ) : (
            <img src={icon} alt="icon" />
          )}
        </li>
      ))}
    </ul>
  );

  useEffect(() => {
    const fn = (src: string) => {
      ccToScrollRef.current = src;
      showChannelSidePanelFn();
    };
    subscribe(getCcScrollId(id), fn);
  }, []);

  const panels = data && (
    <>
      {showEmailSidePanel && (
        <EmailSidePanel
          ccToScroll={ccToScrollRef.current}
          data={data}
          visible={showEmailSidePanel}
          onClose={closeChannelSidePanelFn}
        />
      )}
      {showChatSidePanel && (
        <ChatSidePanel
          data={data}
          visible={showChatSidePanel}
          onClose={closeChannelSidePanelFn}
        />
      )}
      {showSMSSidePanel && (
        <SMSSidePanel
          data={data}
          visible={showSMSSidePanel}
          onClose={closeChannelSidePanelFn}
        />
      )}
      {showVoiceSidePanel && (
        <VoiceSidePanel
          data={data}
          visible={showVoiceSidePanel}
          onClose={closeChannelSidePanelFn}
        />
      )}
    </>
  );

  return (
    <>
      <ContextMenu
        dataWithAction={[
          { id: 0, label: 'More', callback: showChannelSidePanelFn },
          { id: 1, label: 'Download' },
          { id: 2, label: 'Archive' },
        ]}
        onContextMenu={() => setTooltipVisible(false)}
      >
        <Tooltip
          visible={tooltipVisible}
          onVisibleChange={(v) => setTooltipVisible(v)}
          color="#fff"
          placement="right"
          overlayInnerStyle={{
            padding: 0,
            boxShadow: '0px 6px 10px 0px #AEB3B8',
            borderRadius: 4,
            overflow: 'hidden',
          }}
          title={
            description && (
              <div
                className={styles.toolTipOverlay}
                onClick={(e) => e.stopPropagation()}
                onContextMenu={(e) => e.stopPropagation()}
              >
                {description}
              </div>
            )
          }
        >
          <div
            className={classNames(
              styles.container,
              styles[type],
              selected && styles.selected,
            )}
            onClick={() => {
              ccToScrollRef.current = '';
              showChannelSidePanelFn();
            }}
          >
            {typeEl}
            {countEl}
            {listEl}
          </div>
        </Tooltip>
      </ContextMenu>
      {panels}
      <CenterHandle isConnectable={isConnectable} />
    </>
  );
};

export default Channel;
