import classNames from 'classnames';
import React, { CSSProperties, FC } from 'react';

import styles from './Container.module.less';

interface ContainerProps {
  className?: string;
  style?: CSSProperties;
}

const Container: FC<ContainerProps> = ({ className = '', style = {}, children }) => {
  return (
    <div className={classNames(styles.container, className)} style={style}>
      {children}
    </div>
  );
};

export default Container;
