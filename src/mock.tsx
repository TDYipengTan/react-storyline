import { ChatItemProps } from 'components/common/ChatSidePanel';
import { EmailItemProps } from 'components/common/EmailSidePanel';
import { SMSItemProps } from 'components/common/SMSSidePanel';
import { VoiceItemProps } from 'components/common/VoiceSidePanel';
import CustomCcStep from 'components/customEdge/CcStep';
import Step from 'components/customEdge/Step';
import { ENV } from 'configs';
import React from 'react';
import { getEmail, getRandomId } from 'utils';

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
    fromName: 'Judy',
    toSrc: user2,
    toName: 'Daniel',
    content: `Hello, I would like to check my insurance payment status and salary details for this month. I received a notice that the insurance the company paid me did not take effect. And there is also a problem with the details of this month's salary. Attached are screenshots and schedules.`,
    filesSrc: [exampleTable, exampleFile],
    date: '2022-03-14 09:34 AM',
  },
  {
    id: getRandomId(),
    signInfo: {
      name: 'Daniel Lee',
      phone: '001 0234 5678',
    },
    fromSrc: user2,
    fromName: 'Daniel',
    toSrc: user1,
    toName: 'Judy',
    ccSrcs: [ccUser2, ccUser1],
    ccNames: ['Kara', 'Ancestress'],
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
    fromName: 'Judy',
    toSrc: user2,
    toName: 'Daniel',
    ccSrcs: [ccUser2, ccUser1],
    ccNames: ['Kara', 'Ancestress'],
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
      email: getEmail(),
      src: user1,
      state: 'normal',
      name: 'Judy',
    },
    position: {
      x: 300,
      y: 50,
    },
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
      x: 289,
      y: 200,
    },
  },
  {
    width: 48,
    height: 48,
    id: getRandomId(),
    type: 'customAvatar',
    data: {
      email: getEmail(),
      src: user2,
      state: 'busy',
      name: 'Daniel',
    },
    position: {
      x: 300,
      y: 350,
    },
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
            `${ENV.BASE_URL}docs/template.docx`,
            `${ENV.BASE_URL}docs/template.pdf`,
            `${ENV.BASE_URL}docs/template.xlsx`,
          ],
          namesSrc: ['template.docx', 'template.pdf', 'template.xlsx'],
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
      x: 289,
      y: 500,
    },
  },
  {
    width: 48,
    height: 48,
    id: getRandomId(),
    type: 'customAvatar',
    data: {
      email: getEmail(),
      src: user3,
      state: 'away',
      name: 'Maria',
    },
    position: {
      x: 200,
      y: 650,
    },
  },
  {
    width: 48,
    height: 48,
    id: getRandomId(),
    type: 'customAvatar',
    data: {
      email: getEmail(),
      src: user4,
      state: 'busy',
      name: 'Teresa',
    },
    position: {
      x: 400,
      y: 650,
    },
  },
  {
    width: 70,
    height: 70,
    id: getRandomId(),
    type: 'customChannel',
    data: {
      type: 'email',
      src: email,
      icons: [img],
      count: 2,
    },
    position: {
      x: 189,
      y: 800,
    },
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
      x: 389,
      y: 800,
    },
  },
  {
    width: 48,
    height: 48,
    id: getRandomId(),
    type: 'customAvatar',
    data: {
      email: getEmail(),
      src: user5,
      state: 'normal',
      name: 'Kitty',
    },
    position: {
      x: 200,
      y: 950,
    },
  },
  {
    width: 48,
    height: 48,
    id: getRandomId(),
    type: 'customAvatar',
    data: {
      email: getEmail(),
      src: user6,
      state: 'busy',
      name: 'Joe',
    },
    position: {
      x: 400,
      y: 950,
    },
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
      x: 389,
      y: 1100,
    },
  },
  {
    width: 48,
    height: 48,
    id: getRandomId(),
    type: 'customAvatar',
    data: {
      email: getEmail(),
      src: user7,
      state: 'normal',
      name: 'Key',
    },
    position: {
      x: 400,
      y: 1250,
    },
  },
  {
    width: 48,
    height: 48,
    id: getRandomId(),
    type: 'customAvatar',
    data: {
      email: getEmail(),
      cc: true,
      src: ccUser1,
      state: 'normal',
      name: 'Ancestress',
    },
    position: { x: 430, y: 211 },
  },
  {
    width: 48,
    height: 48,
    id: getRandomId(),
    type: 'customAvatar',
    data: {
      email: getEmail(),
      cc: true,
      src: ccUser2,
      state: 'normal',
      name: 'Kara',
    },
    position: { x: 502, y: 211 },
  },
  {
    width: 48,
    height: 48,
    id: getRandomId(),
    type: 'customAvatar',
    data: {
      email: getEmail(),
      cc: true,
      src: ccUser3,
      state: 'away',
      name: 'Marie',
    },
    position: { x: 68, y: 811 },
  },
];

export const nodeTypes = {
  customAvatar: CustomAvatar,
  customChannel: CustomChannel,
};

export const edges = [
  {
    type: 'customStep',
    id: `${nodes[0].id}-${nodes[1].id}`,
    source: nodes[0].id,
    target: nodes[1].id,
  },
  {
    type: 'customStep',
    id: `${nodes[1].id}-${nodes[2].id}`,
    source: nodes[1].id,
    target: nodes[2].id,
  },
  {
    type: 'customStep',
    id: `${nodes[2].id}-${nodes[3].id}`,
    source: nodes[2].id,
    target: nodes[3].id,
  },
  {
    type: 'customStep',
    id: `${nodes[3].id}-${nodes[4].id}`,
    source: nodes[3].id,
    target: nodes[4].id,
  },
  {
    type: 'customStep',
    id: `${nodes[3].id}-${nodes[5].id}`,
    source: nodes[3].id,
    target: nodes[5].id,
  },
  {
    type: 'customStep',
    id: `${nodes[4].id}-${nodes[6].id}`,
    source: nodes[4].id,
    target: nodes[6].id,
  },
  {
    type: 'customStep',
    id: `${nodes[5].id}-${nodes[7].id}`,
    source: nodes[5].id,
    target: nodes[7].id,
  },
  {
    type: 'customStep',
    id: `${nodes[6].id}-${nodes[8].id}`,
    source: nodes[6].id,
    target: nodes[8].id,
  },
  {
    type: 'customStep',
    id: `${nodes[7].id}-${nodes[9].id}`,
    source: nodes[7].id,
    target: nodes[9].id,
  },
  {
    type: 'customStep',
    id: `${nodes[9].id}-${nodes[10].id}`,
    source: nodes[9].id,
    target: nodes[10].id,
  },
  {
    type: 'customStep',
    id: `${nodes[10].id}-${nodes[11].id}`,
    source: nodes[10].id,
    target: nodes[11].id,
  },
  {
    type: 'customCcStep',
    id: `${nodes[1].id}-${nodes[12].id}`,
    source: nodes[1].id,
    target: nodes[12].id,
    sourceHandle: 'source-right',
    targetHandle: 'target-left',
  },
  {
    type: 'customCcStep',
    id: `${nodes[1].id}-${nodes[13].id}`,
    source: nodes[1].id,
    target: nodes[13].id,
    sourceHandle: 'source-right',
    targetHandle: 'target-left',
  },
  {
    type: 'customCcStep',
    id: `${nodes[6].id}-${nodes[14].id}`,
    source: nodes[6].id,
    target: nodes[14].id,
    sourceHandle: 'source-right',
    targetHandle: 'target-left',
  },
];

export const edgeTypes = {
  customStep: Step,
  customCcStep: CustomCcStep,
};

export const itemsConfig = [
  {
    id: getRandomId(),
    nodeType: 'customAvatar',
    label: 'Custom Avatar',
    data: {
      src: user1,
      state: 'normal',
    },
  },
  {
    id: getRandomId(),
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
