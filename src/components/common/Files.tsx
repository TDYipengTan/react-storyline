import React, { FC } from 'react';

import styles from './Files.module.less';

interface AvatarProps {
  filesSrc?: string[];
}

const Files: FC<AvatarProps> = ({ filesSrc = [] }) => {
  return filesSrc.length ? (
    <ul className={styles.filesContainer}>
      {filesSrc.map((fileSrc) => (
        <li className={styles.fileItem} key={fileSrc}>
          <img src={fileSrc} alt="file img" />
        </li>
      ))}
    </ul>
  ) : null;
};

export default Files;
