import classNames from 'classnames';
import React, { FC, useState } from 'react';
import { getLastName } from 'utils';

import downloadAssets from '../../imgs/download-assets.png';
import styles from './FilePopover.module.less';
import Popover from './Popover';

interface FilePopoverProps {
  iconSrc: string;
  currentSelect: number;
  listSrc: string[];
  downloadsSrc?: string[];
  namesSrc?: string[];
  displaysSrc?: string[];
}

const FilePopover: FC<FilePopoverProps> = ({
  iconSrc,
  currentSelect,
  listSrc,
  downloadsSrc = listSrc,
  namesSrc = listSrc,
  displaysSrc = listSrc,
}) => {
  const [currentIndex, setCurrentIndex] = useState(
    listSrc[currentSelect] ? currentSelect : 0,
  );

  const content = (
    <>
      <div className={styles.preview}>
        <img
          className={styles.previewImg}
          src={displaysSrc[currentIndex]}
          alt={displaysSrc[currentIndex]}
        />
        <span className={styles.name}>{getLastName(namesSrc[currentIndex])}</span>
        <a className={styles.download} download href={downloadsSrc[currentIndex]}>
          <img
            className={styles.downloadIcon}
            src={downloadAssets}
            alt={downloadAssets}
          />
        </a>
      </div>
      <ul className={styles.list}>
        {listSrc.map((itemSrc, index) => (
          <li
            key={itemSrc}
            className={classNames(styles.item, currentIndex === index && styles.selected)}
            onClick={() => {
              setCurrentIndex(index);
            }}
          >
            <img src={itemSrc} alt={itemSrc} />
          </li>
        ))}
      </ul>
    </>
  );

  return (
    <Popover
      contentStyle={{
        display: 'flex',
        flexDirection: 'column',
      }}
      content={content}
    >
      <img className={styles.me} src={iconSrc} alt={iconSrc} />
    </Popover>
  );
};

export default FilePopover;
