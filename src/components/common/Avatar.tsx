import classNames from 'classnames';
import React, { CSSProperties, FC } from 'react';

import styles from './Avatar.module.less';

interface AvatarProps {
  src: string;
  className?: string;
  style?: CSSProperties;
}

const Avatar: FC<AvatarProps> = ({ src, className = '', style = {} }) => {
  return (
    <img
      className={classNames(styles.avatar, className)}
      src={src}
      alt={src}
      style={style}
    />
  );
};

export default Avatar;
