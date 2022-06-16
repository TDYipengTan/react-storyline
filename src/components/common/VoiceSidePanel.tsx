import React, { FC, ReactNode } from 'react';

import loveYouAudioSrc from '../../audios/love-you.mp3';
import exampleEmail from '../../imgs/example-email.svg';
import { VoiceChannelMockData } from '../../mock';
import Avatar from './Avatar';
import SidePanel from './SidePanel';
import Voice from './Voice';
import styles from './VoiceSidePanel.module.less';

export interface VoiceItemProps {
  src: string;
  content: ReactNode;
}

const VoiceItem: FC<VoiceItemProps> = ({ src, content }) => {
  return (
    <div className={styles.item}>
      <Avatar style={{ width: 32, height: 32 }} src={src} />
      <div className={styles.container}>
        <div className={styles.content}>{content}</div>
      </div>
    </div>
  );
};

interface VoiceSidePanelProps {
  visible: boolean;
  onClose: () => void;
}

const VoiceSidePanel: FC<VoiceSidePanelProps> = ({ visible, onClose }) => {
  return (
    <SidePanel
      visible={visible}
      titleIcon={exampleEmail}
      title="Voice"
      headerStyle={{
        color: '#7d76e9',
      }}
      bodyStyle={{
        paddingTop: 44,
      }}
      onClose={onClose}
    >
      <div className={styles.voiceTime}>2022-03-15 12:34-12:38 PM</div>
      <div className={styles.voiceContainer}>
        <Voice src={loveYouAudioSrc} />
      </div>
      <div className={styles.voiceToText}>Voice to text</div>
      {VoiceChannelMockData.map(({ id, ...rest }) => (
        <VoiceItem key={id} {...rest} />
      ))}
    </SidePanel>
  );
};

export default VoiceSidePanel;
