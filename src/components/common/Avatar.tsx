import classNames from 'classnames';
import React, { CSSProperties, FC } from 'react';
import { getRandomId } from 'utils';

import styles from './Avatar.module.less';
import Container from './Container';
import ContextMenu, { ContextMenuProps } from './ContextMenu';

interface AvatarProps {
  src: string;
  agentName?: string;
  className?: string;
  position?: ContextMenuProps['position'];
  style?: CSSProperties;
}

const Avatar: FC<AvatarProps> = ({
  src,
  agentName = '',
  className = '',
  position = 'bottom',
  style = {},
}) => {
  return (
    <Container>
      <ContextMenu
        agentName={agentName}
        position={position}
        dataWithAction={[
          {
            id: getRandomId(),
            label: 'Email',
          },
          {
            id: getRandomId(),
            label: 'Chat',
          },
          {
            id: getRandomId(),
            label: 'SMS',
          },
        ]}
        style={{
          [position]: agentName ? -190 : -144,
        }}
      >
        <img
          className={classNames(styles.avatar, className)}
          src={src}
          alt={src}
          style={style}
        />
      </ContextMenu>
    </Container>
  );
};

export default Avatar;
