import chat from '../imgs/chat.svg';
import file from '../imgs/file.svg';
import img from '../imgs/img.svg';
import user1 from '../imgs/user1.png';

export const itemsConfig = [
  {
    id: 0,
    nodeType: 'customAvatar',
    label: 'Custom Avatar',
    data: {
      src: user1,
      state: 'normal',
    },
  },
  {
    id: 1,
    nodeType: 'customChannel',
    label: 'Custom Channel',
    data: {
      type: 'chat',
      src: chat,
      icons: [img, file],
      count: 36,
    },
  },
];
