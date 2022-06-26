import classNames from 'classnames';
import React, { FC, ReactNode, useState } from 'react';
import { NodeProps } from 'react-flow-renderer';

import arrowDown from '../../imgs/arrow-down.png';
import styles from './Description.module.less';

interface DescriptionProps
  extends NodeProps<{
    title: string;
    subject: string;
    regardingTheRequest: ReactNode;
    processingResults: ReactNode;
  }> {}

const Description: FC<DescriptionProps> = ({
  data: { title, subject, regardingTheRequest, processingResults },
}) => {
  const [down, setDown] = useState(false);

  return (
    <div className={styles.container}>
      <div className={classNames(styles.header, !down && styles.expanded)}>
        {title}
        <img
          className={classNames(styles.arrow, !down && 'arrow-up')}
          src={arrowDown}
          alt="arrow"
          onClick={() => setDown(!down)}
        />
      </div>
      {!down && (
        <div className={classNames(styles.body, styles.bodyUp)}>
          <div className={styles.item}>
            <span className={styles.strong}>Subject: </span> {subject}
          </div>
          <div className={styles.item}>
            <span className={styles.strong}>Regarding the request: </span>{' '}
            {regardingTheRequest}
          </div>
          <div className={styles.item}>
            <span className={styles.strong}>Processing result: </span> {processingResults}{' '}
          </div>
        </div>
      )}
    </div>
  );
};

export default Description;
