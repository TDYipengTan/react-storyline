/* eslint-disable no-unused-vars */
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Voice from '../index';

jest.mock('@cobalt/react-viewport-provider', () => ({
  useViewport: () => jest.fn(() => {}),
}));

describe('Voice component', () => {
  it('click outside detector', async () => {
    const { asFragment } = render(
      <Voice src="http://downsc.chinaz.net/Files/DownLoad/sound1/201906/11582.mp3" />,
    );
    const initTimeElm = document.querySelector('.time-text');
    expect(initTimeElm).toBeInTheDocument();
    expect(initTimeElm).toHaveTextContent('0:00');
    const barElm = document.querySelector('div.volume-progress-wrapper');
    expect(barElm).toBeInTheDocument();
    expect(barElm).not.toHaveClass('visible-volume');
    expect(barElm).toHaveClass('volume-progress-wrapper');
    const btn = screen.getByText('volume_up');
    expect(btn).toBeInTheDocument();
    await userEvent.click(btn);
    expect(barElm).toHaveClass('visible-volume');
    await userEvent.click(barElm);
    await userEvent.click(document.documentElement);
    expect(barElm).not.toHaveClass('visible-volume');
    const playElm = screen.getByText('play_arrow');
    expect(playElm).toBeInTheDocument();

    const bar = document.querySelector('.play-bar-bg');
    expect(bar).toBeInTheDocument();
    userEvent.click(bar);
    const iconElms = [].slice.call(document.querySelectorAll('[data-co-name="Icon"]'));
    expect(iconElms.length).toBe(4);
    const forward = iconElms.pop();
    expect(forward).toBeInTheDocument();
    await userEvent.click(forward);
    const backward = iconElms.pop();
    expect(backward).toBeInTheDocument();
    await userEvent.click(backward);
  });
});
