import { ChatItemProps } from 'components/common/ChatSidePanel';
import { EmailItemProps } from 'components/common/EmailSidePanel';
import { SMSItemProps } from 'components/common/SMSSidePanel';
import { VoiceItemProps } from 'components/common/VoiceSidePanel';
import CustomCcStraight from 'components/customEdge/CcStraight';
import Straight from 'components/customEdge/Straight';
import { ENV } from 'configs';
import React from 'react';
import { getRandomId } from 'utils';

import CustomAvatar from './components/costomNode/Avatar';
import CustomChannel from './components/costomNode/Channel';
import ccUser1 from './imgs/cc-user1.png';
import ccUser2 from './imgs/cc-user2.png';
import ccUser3 from './imgs/cc-user3.png';
import chat from './imgs/chat.svg';
import download from './imgs/download.svg';
import email from './imgs/email.svg';
import exampleFile from './imgs/example-file.png';
import exampleTable from './imgs/example-table.png';
import excel from './imgs/excel.png';
import file from './imgs/file.svg';
import imgView1 from './imgs/image-view1.png';
import imgView2 from './imgs/image-view2.png';
import imgView3 from './imgs/image-view3.png';
import imgView4 from './imgs/image-view4.png';
import imgView5 from './imgs/image-view5.png';
import img from './imgs/img.svg';
import link from './imgs/link.svg';
import pdf from './imgs/pdf.png';
import pdfContent from './imgs/pdf-content.png';
import sms from './imgs/sms.svg';
import user1 from './imgs/user1.png';
import user2 from './imgs/user2.png';
import user3 from './imgs/user3.png';
import user4 from './imgs/user4.png';
import user5 from './imgs/user5.png';
import user6 from './imgs/user6.png';
import user7 from './imgs/user7.png';
import voice from './imgs/voice.svg';
import word from './imgs/word.png';

const EmailChannelMockData: (EmailItemProps & { id: string })[] = [
  {
    id: getRandomId(),
    fromSrc: user1,
    toSrc: user2,
    content: `Hello, I would like to check my insurance payment status and salary details for this month. I received a notice that the insurance the company paid me did not take effect. And there is also a problem with the details of this month's salary. Attached are screenshots and schedules.`,
    filesSrc: [exampleTable, exampleFile],
    date: '2022-03-14 09:34 AM',
  },
  {
    id: getRandomId(),
    fromSrc: user2,
    toSrc: user1,
    ccSrcs: [ccUser2, ccUser1],
    content: (
      <>
        Hello. Glad to serve you.
        <br />
        Please provide your employee number, I need to record it and generate a ticket for
        you.
      </>
    ),
    date: '2022-03-14 10:42 AM',
  },
  {
    id: getRandomId(),
    fromSrc: user1,
    toSrc: user2,
    ccSrcs: [ccUser2, ccUser1],
    content: 'My employee number is 002233, thank you!',
    date: '2022-03-14 10:45 AM',
  },
];

const ChatChannelMockData: (ChatItemProps & { id: string })[] = Array.from(
  new Array(3),
  () => [
    {
      id: getRandomId(),
      src: user2,
      content: 'Hello Maria and Teresa',
    },
    {
      id: getRandomId(),
      src: user3,
      content: 'Hi  Daniel 🙋',
    },
    {
      id: getRandomId(),
      src: user4,
      content: 'Hello  Daniel',
    },
    {
      id: getRandomId(),
      src: user2,
      content: 'I received a user request. I need your help. 😊',
    },
    {
      id: getRandomId(),
      src: user2,
      content:
        'I need you to help me check the insurance information and salary details of employee number 002233. The employee told me that there is a problem with her salary and insurance.',
    },
    {
      id: getRandomId(),
      src: user3,
      content: `What's wrong with insurance?`,
    },
    {
      id: getRandomId(),
      src: user2,
      content: `She told me her insurance didn't take effect.`,
    },
    {
      id: getRandomId(),
      isImg: true,
      src: user2,
      content: exampleTable,
    },
    {
      id: getRandomId(),
      isImg: true,
      src: user2,
      content: exampleFile,
    },
    {
      id: getRandomId(),
      src: user4,
      content: 'OK',
    },
    {
      id: getRandomId(),
      src: user4,
      content: 'Cool',
    },
    {
      id: getRandomId(),
      src: user4,
      content: 'Thank you.',
    },
  ],
).flat(Infinity) as (ChatItemProps & { id: string })[];

const SMSChannelMockData: (SMSItemProps & { id: string })[] = [
  {
    id: getRandomId(),
    src: user4,
    content: (
      <>
        Hello Joe
        <br />
        We have received a salary query request. The employee number is 002233. I noticed
        that there is a problem with this month&apos;s bonus amount in this
        employee&apos;s salary.
      </>
    ),
    time: '09:34 AM',
  },
  {
    id: getRandomId(),
    src: user6,
    content: `Okay, so sorry I'm on vacation right now and may not be able to use the company's system to query and process this request.But I can ask other colleagues if they can help with this.`,
    time: '10:01 AM',
  },
  {
    id: getRandomId(),
    src: user4,
    content: `Sorry I didn't know you were on vacation.Then I will send the relevant information to you.`,
    time: '10:10 AM',
    filesSrc: [exampleFile],
  },
  {
    id: getRandomId(),
    src: user6,
    content: `OK, I probably know the reason. I will communicate with my colleagues to deal with this matter. After the deal is completed, the employee's mailbox will receive a notification.`,
    time: '10:35 AM',
  },
  {
    id: getRandomId(),
    src: user4,
    content: 'Thank you very much.',
    time: '10:41 AM',
  },
];

const VoiceChannelMockData = Array.from(new Array(10), () => [
  {
    id: getRandomId(),
    src: user7,
    content: (
      <>
        Hello Talkdesk
        <br />
        This is Key speaking.
      </>
    ),
  },
  {
    id: getRandomId(),
    src: user6,
    content: (
      <>
        Good afternoon Key
        <br />
        This is Joe
      </>
    ),
  },
  {
    id: getRandomId(),
    src: user7,
    content: (
      <>
        Hi Joe
        <br />I think you are on vacation now
      </>
    ),
  },
  {
    id: getRandomId(),
    src: user6,
    content: `Yes, so there is one more urgent job I can't handle right now. I need your help.`,
  },
  {
    id: getRandomId(),
    src: user7,
    content: (
      <>
        My pleasure
        <br />
        What can i do please
      </>
    ),
  },
  {
    id: getRandomId(),
    src: user6,
    content:
      'There is a problem with the bonus amount of an employee this month. I think this is a deviation in the deduction. Please help me check the amount. and send the result to the employee. His employee number is 002233',
  },
  {
    id: getRandomId(),
    src: user7,
    content: `OK, I'll do a check first.`,
  },
  {
    id: getRandomId(),
    src: user6,
    content:
      'Thanks. I have sent the relevant information to your email, you can check it against it.',
  },
]).flat(Infinity) as (VoiceItemProps & { id: string })[];

export const nodes = [
  {
    width: 48,
    height: 48,
    id: getRandomId(),
    type: 'customAvatar',
    data: {
      src: user1,
      state: 'normal',
      name: 'Judy',
    },
    position: {
      x: 300,
      y: 50,
    },
    positionAbsolute: {
      x: 300,
      y: 50,
    },
    z: 0,
  },
  {
    width: 70,
    height: 70,
    id: getRandomId(),
    type: 'customChannel',
    data: {
      type: 'email',
      src: email,
      data: EmailChannelMockData,
      icons: [img, file],
      count: 3,
    },
    position: {
      x: 383,
      y: 129,
    },
    selected: false,
    dragging: false,
    positionAbsolute: {
      x: 383,
      y: 129,
    },
    z: 0,
  },
  {
    width: 48,
    height: 48,
    id: getRandomId(),
    type: 'customAvatar',
    data: {
      src: user2,
      state: 'busy',
      name: 'Daniel',
    },
    position: {
      x: 301,
      y: 245,
    },
    selected: false,
    dragging: false,
    positionAbsolute: {
      x: 301,
      y: 245,
    },
    z: 0,
  },
  {
    width: 70,
    height: 70,
    id: getRandomId(),
    type: 'customChannel',
    data: {
      type: 'chat',
      src: chat,
      data: ChatChannelMockData,
      icons: [
        {
          icon: img,
          component: 'FilePopover',
          currentSelect: 2,
          listSrc: [imgView1, imgView2, imgView3, imgView4, imgView5],
          style: {},
        },
        {
          icon: file,
          component: 'FilePopover',
          currentSelect: 1,
          listSrc: [word, pdf, excel],
          downloadsSrc: [
            `${ENV.BASE_URL}docs/template.pptx`,
            `${ENV.BASE_URL}docs/template.pptx`,
            `${ENV.BASE_URL}docs/template.pptx`,
          ],
          namesSrc: ['template.docs', 'template.pptx', 'template.xlsx'],
          displaysSrc: [pdfContent, pdfContent, pdfContent],
          style: { transform: 'translateY(6px)' },
        },
        {
          icon: link,
          component: 'LinksPopover',
          links: [
            'https://talkdesk.atlassian.net/wiki/spaces/TSC/pages',
            'https://drive.google.com/drive/my-drive',
          ],
          style: {},
        },
      ],
      count: 36,
    },
    position: {
      x: 381,
      y: 344,
    },
    selected: false,
    dragging: false,
    positionAbsolute: {
      x: 381,
      y: 344,
    },
    z: 0,
  },
  {
    width: 48,
    height: 48,
    id: getRandomId(),
    type: 'customAvatar',
    data: {
      src: user3,
      state: 'away',
      name: 'Maria',
    },
    position: {
      x: 306,
      y: 498,
    },
    selected: false,
    dragging: false,
    positionAbsolute: {
      x: 306,
      y: 498,
    },
    z: 0,
  },
  {
    width: 48,
    height: 48,
    id: getRandomId(),
    type: 'customAvatar',
    data: {
      src: user4,
      state: 'busy',
      name: 'Teresa',
    },
    position: {
      x: 491,
      y: 498,
    },
    selected: false,
    dragging: false,
    positionAbsolute: {
      x: 491,
      y: 498,
    },
    z: 0,
  },
  {
    width: 70,
    height: 70,
    id: getRandomId(),
    type: 'customChannel',
    data: {
      type: 'email',
      src: email,
      icons: [file],
      count: 2,
    },
    position: {
      x: 214,
      y: 619,
    },
    selected: false,
    dragging: false,
    positionAbsolute: {
      x: 214,
      y: 619,
    },
    z: 0,
  },
  {
    width: 70,
    height: 70,
    id: getRandomId(),
    type: 'customChannel',
    data: {
      type: 'sms',
      src: sms,
      data: SMSChannelMockData,
      icons: [file],
      count: 5,
    },
    position: {
      x: 573,
      y: 619,
    },
    selected: false,
    dragging: false,
    positionAbsolute: {
      x: 573,
      y: 619,
    },
    z: 0,
  },
  {
    width: 48,
    height: 48,
    id: getRandomId(),
    type: 'customAvatar',
    data: {
      src: user5,
      state: 'normal',
      name: 'Kitty',
    },
    position: {
      x: 147,
      y: 760,
    },
    selected: false,
    dragging: false,
    positionAbsolute: {
      x: 147,
      y: 761,
    },
    z: 0,
  },
  {
    width: 48,
    height: 48,
    id: getRandomId(),
    type: 'customAvatar',
    data: {
      src: user6,
      state: 'busy',
      name: 'Joe',
    },
    position: {
      x: 490,
      y: 760,
    },
    selected: false,
    dragging: false,
    positionAbsolute: {
      x: 490,
      y: 760,
    },
    z: 0,
  },
  {
    width: 70,
    height: 70,
    id: getRandomId(),
    type: 'customChannel',
    data: {
      type: 'voice',
      src: voice,
      data: VoiceChannelMockData,
      icons: [download],
    },
    position: {
      x: 572,
      y: 876,
    },
    selected: false,
    dragging: false,
    positionAbsolute: {
      x: 572,
      y: 876,
    },
    z: 0,
  },
  {
    width: 48,
    height: 48,
    id: getRandomId(),
    type: 'customAvatar',
    data: {
      src: user7,
      state: 'normal',
      name: 'Key',
    },
    position: {
      x: 486,
      y: 1026,
    },
    selected: true,
    dragging: false,
    positionAbsolute: {
      x: 486,
      y: 1026,
    },
    z: 1000,
  },
  {
    width: 48,
    height: 48,
    id: getRandomId(),
    type: 'customAvatar',
    data: {
      cc: true,
      src: ccUser1,
      state: 'normal',
      name: 'Ancestress',
    },
    position: { x: 550, y: 81 },
    positionAbsolute: { x: 550, y: 81 },
    z: 0,
  },
  {
    width: 48,
    height: 48,
    id: getRandomId(),
    type: 'customAvatar',
    data: {
      cc: true,
      src: ccUser2,
      state: 'normal',
      name: 'Kara',
    },
    position: { x: 550, y: 226 },
    positionAbsolute: { x: 550, y: 226 },
    z: 0,
  },
  {
    width: 48,
    height: 48,
    id: getRandomId(),
    type: 'customAvatar',
    data: {
      cc: true,
      src: ccUser3,
      state: 'away',
      name: 'Marie',
    },
    position: { x: 330, y: 740 },
    positionAbsolute: { x: 330, y: 740 },
    z: 0,
  },
];

export const nodeTypes = {
  customAvatar: CustomAvatar,
  customChannel: CustomChannel,
};

export const edges = [
  {
    type: 'customStraight',
    id: `${nodes[0].id}-${nodes[1].id}`,
    source: nodes[0].id,
    target: nodes[1].id,
  },
  {
    type: 'customStraight',
    id: `${nodes[1].id}-${nodes[2].id}`,
    source: nodes[1].id,
    target: nodes[2].id,
  },
  {
    type: 'customStraight',
    id: `${nodes[2].id}-${nodes[3].id}`,
    source: nodes[2].id,
    target: nodes[3].id,
  },
  {
    type: 'customStraight',
    id: `${nodes[3].id}-${nodes[4].id}`,
    source: nodes[3].id,
    target: nodes[4].id,
  },
  {
    type: 'customStraight',
    id: `${nodes[3].id}-${nodes[5].id}`,
    source: nodes[3].id,
    target: nodes[5].id,
  },
  {
    type: 'customStraight',
    id: `${nodes[4].id}-${nodes[6].id}`,
    source: nodes[4].id,
    target: nodes[6].id,
  },
  {
    type: 'customStraight',
    id: `${nodes[5].id}-${nodes[7].id}`,
    source: nodes[5].id,
    target: nodes[7].id,
  },
  {
    type: 'customStraight',
    id: `${nodes[6].id}-${nodes[8].id}`,
    source: nodes[6].id,
    target: nodes[8].id,
  },
  {
    type: 'customStraight',
    id: `${nodes[7].id}-${nodes[9].id}`,
    source: nodes[7].id,
    target: nodes[9].id,
  },
  {
    type: 'customStraight',
    id: `${nodes[9].id}-${nodes[10].id}`,
    source: nodes[9].id,
    target: nodes[10].id,
  },
  {
    type: 'customStraight',
    id: `${nodes[10].id}-${nodes[11].id}`,
    source: nodes[10].id,
    target: nodes[11].id,
  },
  {
    type: 'customCcStraight',
    id: `${nodes[1].id}-${nodes[12].id}`,
    source: nodes[1].id,
    target: nodes[12].id,
  },
  {
    type: 'customCcStraight',
    id: `${nodes[1].id}-${nodes[13].id}`,
    source: nodes[1].id,
    target: nodes[13].id,
  },
  {
    type: 'customCcStraight',
    id: `${nodes[6].id}-${nodes[14].id}`,
    source: nodes[6].id,
    target: nodes[14].id,
  },
];

export const edgeTypes = {
  customStraight: Straight,
  customCcStraight: CustomCcStraight,
};

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
