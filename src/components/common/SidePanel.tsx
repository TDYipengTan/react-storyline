import React, { CSSProperties, FC } from 'react';
import { createPortal } from 'react-dom';

import styles from './SidePanel.module.less';

interface SidePanelProps {
  visible: boolean;
  titleIcon: string;
  title: string;
  headerStyle?: CSSProperties;
  bodyStyle?: CSSProperties;
  onClose(): void;
}

const SidePanel: FC<SidePanelProps> = ({
  visible,
  titleIcon,
  title,
  headerStyle,
  bodyStyle,
  onClose,
  children,
}) => {
  if (!visible) return null;

  return createPortal(
    <div className={styles.container}>
      <div className={styles.mask} onClick={onClose} />
      <div className={styles.mainContainer} onClick={(event) => event.stopPropagation()}>
        <div className={styles.header} style={headerStyle}>
          <div className={styles.titleContainer}>
            <img className={styles.titleIcon} src={titleIcon} alt="title icon" />
            {title}
          </div>
          <div className={styles.close} onClick={onClose} />
        </div>
        <div className={styles.body} style={bodyStyle}>
          {children}
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default SidePanel;
