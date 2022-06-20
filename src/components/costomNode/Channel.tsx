import classNames from 'classnames';
import ChatSidePanel from 'components/common/ChatSidePanel';
import ContextMenu from 'components/common/ContextMenu';
import EmailSidePanel from 'components/common/EmailSidePanel';
import SMSSidePanel from 'components/common/SMSSidePanel';
import VoiceSidePanel from 'components/common/VoiceSidePanel';
import { MIN_ZOOM } from 'configs';
import useShowIconsByZoom from 'hooks/useShowIconsByZoom';
import React, { FC, useState } from 'react';
import { NodeProps } from 'react-flow-renderer';

import CenterHandle from '../CenterHandle';
import FilePopover from '../common/FilePopover';
import LinksPopover from '../common/LinksPopover';
import styles from './Channel.module.less';

interface ChannelProps extends NodeProps {
  data: {
    type: 'email' | 'chat' | 'sms' | 'voice';
    src: string;
    data: any[];
    icons?: string[];
    count?: number;
  };
}

const Channel: FC<ChannelProps> = ({
  isConnectable,
  data: { type, src, data, icons = [], count = 0 },
  selected,
}) => {
  const [showEmailSidePanel, setShowEmailSidePanel] = useState(false);
  const [showChatSidePanel, setShowChatSidePanel] = useState(false);
  const [showSMSSidePanel, setShowSMSSidePanel] = useState(false);
  const [showVoiceSidePanel, setShowVoiceSidePanel] = useState(false);
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

  const panels = data && (
    <>
      <EmailSidePanel
        data={data}
        visible={showEmailSidePanel}
        onClose={closeChannelSidePanelFn}
      />
      <ChatSidePanel
        data={data}
        visible={showChatSidePanel}
        onClose={closeChannelSidePanelFn}
      />
      <SMSSidePanel
        data={data}
        visible={showSMSSidePanel}
        onClose={closeChannelSidePanelFn}
      />
      <VoiceSidePanel
        data={data}
        visible={showVoiceSidePanel}
        onClose={closeChannelSidePanelFn}
      />
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
      >
        <div
          className={classNames(
            styles.container,
            styles[type],
            selected && styles.selected,
          )}
          onClick={() => showChannelSidePanelFn()}
        >
          {typeEl}
          {countEl}
          {listEl}
        </div>
      </ContextMenu>
      {panels}
      <CenterHandle isConnectable={isConnectable} />
    </>
  );
};

export default Channel;
