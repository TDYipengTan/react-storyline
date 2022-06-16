import copy from 'copy-to-clipboard';
import React, { FC } from 'react';

import styles from './LinksPopover.module.less';
import Popover from './Popover';

interface LinksPopoverProps {
  iconSrc: string;
  links?: string[];
}

const LinksPopover: FC<LinksPopoverProps> = ({ iconSrc, links }) => {
  const content = (
    <>
      <div className={styles.title}>Links</div>
      <ul>
        {links?.map((link) => (
          <li key={link} className={styles.item}>
            <div className={styles.link}>{link}</div>
            <div
              className={styles.copy}
              onClick={() => {
                copy(link);
                alert('copied!');
              }}
            >
              Copy
            </div>
          </li>
        ))}
      </ul>
    </>
  );

  return (
    <Popover content={content}>
      <img className={styles.me} src={iconSrc} alt={iconSrc} />
    </Popover>
  );
};

export default LinksPopover;
