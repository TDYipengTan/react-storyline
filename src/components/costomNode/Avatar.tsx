import ContextMenu from 'components/common/ContextMenu';
import React, { CSSProperties, FC } from 'react';
import { NodeProps } from 'react-flow-renderer';

import CenterHandle from '../CenterHandle';

const getStateStyle = (state: AvatarProps['data']['state']): CSSProperties => ({
  position: 'absolute',
  right: 2,
  bottom: 2,
  width: 8,
  height: 8,
  boxSizing: 'content-box',
  border: '2px solid #fff',
  borderRadius: '50%',
  backgroundColor:
    state === 'normal' ? '#34C448' : state === 'busy' ? '#E07E41' : '#A4B8C3',
});

interface AvatarProps extends NodeProps {
  data: {
    src: string;
    state: 'normal' | 'busy' | 'away';
  };
}

const Avatar: FC<AvatarProps> = ({ isConnectable, data: { src, state } }) => {
  const avatarEl = (
    <img
      style={{ width: '100%', height: '100%', pointerEvents: 'none' }}
      src={src}
      alt="avatar"
    />
  );

  const stateEl = <span style={getStateStyle(state)} />;

  return (
    <>
      <ContextMenu
        dataWithAction={[
          { id: 0, label: '个人资料' },
          { id: 1, label: '添加联系人' },
          { id: 2, label: '收藏联系人' },
          { id: 3, label: '发送Email' },
          { id: 4, label: '拨打电话' },
        ]}
      >
        <div
          style={{
            width: 48,
            height: 48,
            backgroundColor: '#fff',
            borderRadius: '50%',
          }}
        >
          {avatarEl}
          {stateEl}
        </div>
      </ContextMenu>
      <CenterHandle isConnectable={isConnectable} />
    </>
  );
};

export default Avatar;
