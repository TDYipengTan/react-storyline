import { ENV } from 'configs';
import React, { FC, ReactNode } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import { WithId } from 'types';

import exampleVoice from '../../imgs/example-voice.png';
import Avatar from './Avatar';
import SidePanel from './SidePanel';
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
  data: WithId<VoiceItemProps>[];
  visible: boolean;
  onClose: () => void;
}

const VoiceSidePanel: FC<VoiceSidePanelProps> = ({ data, visible, onClose }) => {
  return (
    <SidePanel
      visible={visible}
      titleIcon={exampleVoice}
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
        <AudioPlayer src={`${ENV.BASE_URL}audios/love-you.mp3`} />
      </div>
      <div className={styles.voiceToText}>Voice to text</div>
      {data.map(({ id, ...rest }) => (
        <VoiceItem key={id} {...rest} />
      ))}
    </SidePanel>
  );
};

export default VoiceSidePanel;
