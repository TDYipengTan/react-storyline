import classNames from 'classnames';
import React, { CSSProperties, FC } from 'react';

import styles from './ChannelItemTime.module.less';

interface ChannelItemTimeProps {
  value: string;
  className?: string;
  style?: CSSProperties;
}

const ChannelItemTime: FC<ChannelItemTimeProps> = ({
  value,
  className = '',
  style = {},
}) => {
  return (
    <div className={classNames(styles.container, className)} style={style}>
      <span className={styles.item}>{value}</span>
    </div>
  );
};

export default ChannelItemTime;
