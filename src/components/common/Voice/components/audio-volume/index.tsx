/* eslint-disable no-unused-vars */
import './styles.scss';

import Icon from '@cobalt/react-icon';
import useOutsideClick from '@cobalt/react-outside-click-hook';
import classNames from 'classnames';
import React, { memo, useCallback, useEffect, useRef, useState } from 'react';

interface AudioVolumeProps {
  prefixCls?: string;
  onChange: (percent: number) => void;
}

AudioVolume.defaultProps = {
  prefixCls: 'cobalt',
};

const cls = 'audio-volume';

function AudioVolume({ prefixCls, onChange }: AudioVolumeProps) {
  const componentCls = `${prefixCls}-${cls}`;

  const [visibleVolume, setVisibleVolume] = useState<boolean>(false);
  const volumeControlRef = useRef<HTMLDivElement>(null);
  const volumeControlProgressRef = useRef<HTMLDivElement>(null);
  const isVolumeControlMoseDown = useRef<boolean>(false);

  const outsideClickHandler = useCallback(() => setVisibleVolume(false), []);
  const { onClickCapture } = useOutsideClick(outsideClickHandler);

  let glPercent = 0;

  const volumeControlRect = useRef({ top: 0, height: 0 });
  useEffect(() => {
    volumeControlRect.current = (
      volumeControlRef.current as HTMLDivElement
    ).getBoundingClientRect();
  });

  function volumeControlMouseDown(e: React.MouseEvent) {
    e.stopPropagation();
    isVolumeControlMoseDown.current = true;
  }
  function volumeControlMouseMove(e: MouseEvent) {
    if (!isVolumeControlMoseDown.current) return;
    progressForward(e as any as React.MouseEvent);
  }
  function volumeControlMouseUp(e: MouseEvent) {
    isVolumeControlMoseDown.current = false;
  }
  function volumeControlMouseLeave(e: MouseEvent) {
    isVolumeControlMoseDown.current = false;
  }

  function progressForward(e: React.MouseEvent) {
    e.stopPropagation();
    let localY = e.clientY - volumeControlRect.current.top;
    localY = localY > 0 ? localY : 0;
    let percent = 1 - localY / volumeControlRect.current.height;
    percent = percent < 0 ? 0 : percent;
    if (glPercent === percent) {
      return;
    }
    glPercent = percent as number;
    (volumeControlProgressRef.current as HTMLDivElement).style.transform = `scaleY(${
      percent * 100
    }%)`;
    onChange?.(percent);
  }

  useEffect(() => {
    document.body.addEventListener('mousemove', volumeControlMouseMove, false);
    document.body.addEventListener('mouseup', volumeControlMouseUp);
    document.body.addEventListener('mouseleave', volumeControlMouseLeave, false);

    return () => {
      document.body.removeEventListener('mousemove', volumeControlMouseMove, false);
      document.body.removeEventListener('mouseup', volumeControlMouseUp, false);
      document.body.removeEventListener('mouseleave', volumeControlMouseLeave, false);
    };
  });

  function toggleVolumeControl(e: React.MouseEvent) {
    e.stopPropagation();
    setVisibleVolume((visible) => !visible);
  }

  return (
    <div className={classNames('volume-wrapper', componentCls)} onClick={onClickCapture}>
      <Icon size="small" name="volume_up" onClick={toggleVolumeControl} />

      <div
        className={[
          'volume-progress-wrapper',
          visibleVolume ? 'visible-volume' : '',
        ].join(' ')}
        ref={volumeControlRef}
        onMouseDown={volumeControlMouseDown}
        onClick={progressForward}
      >
        <div ref={volumeControlProgressRef} className="volume-progress-bar"></div>
      </div>
    </div>
  );
}

export default memo(AudioVolume);
