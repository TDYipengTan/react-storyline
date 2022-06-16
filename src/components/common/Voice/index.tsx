/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import './styles.scss';

import Flex from '@cobalt/react-flex';
import Icon from '@cobalt/react-icon';
import { Text } from '@cobalt/react-typography';
import classNames from 'classnames';
import { Howl } from 'howler';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import AudioVolume from './components/audio-volume';

interface VoiceProps {
  prefixCls?: string;
  src: string;
  onload?: (len: number) => void;
  controls?: boolean;
  autoplay?: boolean;
}

function formatTime(secs: number): string {
  const minutes = Math.floor(secs / 60) || 0;
  const seconds = Math.round(secs - minutes * 60) || 0;
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

const cls = 'voice';
Voice.defaultProps = {
  prefixCls: 'cobalt',
};

function Voice({ prefixCls, src, onload }: VoiceProps): JSX.Element {
  const componentCls = `${prefixCls}-${cls}`;

  const [duration, setDuration] = useState<number | string>(0);
  const [visiblePlay, setVisiblePlay] = useState<boolean>(true);
  const barRef = useRef<HTMLDivElement>(null);
  const barContainerRef = useRef<HTMLDivElement>(null);
  const [curTime, setCurTime] = useState(() => formatTime(0));
  const barContainerRect = useRef({ left: 0, top: 0, width: 0, height: 0, x: 0, y: 0 });
  const loadError = useRef<boolean>(false);
  const isProgressbarMousedown = useRef<boolean>(false);
  const reqId = useRef<number>(0);

  const sound = useMemo(() => {
    const sound = new Howl({
      html5: true,
      src: [src],
      loop: false,
      onload: () => {
        loadError.current = false;
        setDuration(sound.duration().toFixed(2));
        onload?.(sound.duration());
      },
      onloaderror: () => {
        loadError.current = true;
      },
      onplay: () => {
        handleStartStep();
      },
      onpause: () => {
        cancelAnimationFrame(reqId.current);
      },
      onend: () => {
        setVisiblePlay(true);
        cancelAnimationFrame(reqId.current);
      },
    });

    return sound;
  }, [src, onload]); // eslint-disable-line

  function handleProcess() {
    const percent = (sound.seek() as number) / sound.duration();
    const barStyle = (barRef.current as HTMLDivElement)?.style;
    if (!barStyle) return;

    barStyle.transform = `scaleX(${percent * 100}%)  translateZ(0)`;
    setCurTime(formatTime(sound.seek() as number));
  }

  useEffect(() => {
    barContainerRect.current = (
      barContainerRef.current as HTMLDivElement
    ).getBoundingClientRect() as DOMRect;
  });

  function handleStartStep() {
    reqId.current = requestAnimationFrame(handleStartStep);
    handleProcess();
  }

  useEffect(() => {
    const barStyle = (barRef.current as HTMLDivElement).style;
    barStyle.transform = `scaleX(0%) translateZ(0)`;

    return () => {
      sound.unload();
      cancelAnimationFrame(reqId.current);
    };
  }, [src, sound]);

  function progressForward(e: React.MouseEvent) {
    if (loadError.current) return;

    const localX =
      e.pageX -
      ((barContainerRef.current as HTMLDivElement).getBoundingClientRect() as DOMRect)
        .left;
    let percent: number = localX / barContainerRect.current.width;
    percent = percent > 1 ? 1 : percent < 0 ? 0 : percent;

    if (sound && sound.playing()) {
      sound.seek(percent * sound.duration());
    } else {
      const ctext: number = (percent * sound.duration()) / 60;
      setCurTime(ctext.toFixed(2));
      (barRef.current as HTMLDivElement).style.transform = `scaleX(${
        percent * 100
      }%)  translateZ(0)`;
      sound.seek(percent * sound.duration());
    }
  }

  const handlePlay = useCallback(
    (e: React.MouseEvent) => {
      if (loadError.current) return;

      if (sound && !sound.playing()) {
        sound.play();
        setVisiblePlay(false);
      }
    },
    [sound],
  );

  const handlePause = useCallback(
    (e: React.MouseEvent) => {
      if (sound && sound.playing()) {
        sound.pause();
        setVisiblePlay(true);
      }
    },
    [sound],
  );

  const volumeChange = (p: number) => {
    if (loadError.current) return;
    sound.volume(p);
  };

  function handleProgressMouseDown(e: MouseEvent | React.MouseEvent) {
    if (loadError.current) return;

    isProgressbarMousedown.current = true;
  }
  function handleProgressMouseMove(e: MouseEvent) {
    if (!isProgressbarMousedown.current) return;
    progressForward(e as any as React.MouseEvent);
  }
  function handleProgressMouseUp(e: MouseEvent) {
    isProgressbarMousedown.current = false;
  }

  function handleProgressMouseLeave(e: MouseEvent) {
    isProgressbarMousedown.current = false;
  }

  useEffect(() => {
    document.body.addEventListener('mousemove', handleProgressMouseMove, false);
    document.body.addEventListener('mouseleave', handleProgressMouseLeave, false);
    document.body.addEventListener('mouseup', handleProgressMouseUp, false);

    return () => {
      document.body.removeEventListener('mousemove', handleProgressMouseMove, false);
      document.body.removeEventListener('mouseleave', handleProgressMouseLeave, false);
      document.body.removeEventListener('mouseup', handleProgressMouseUp, false);
    };
  });

  function handleBackward() {
    if (!sound.playing()) return;
    let curPercent = (sound.seek() as number) - 10;
    curPercent = curPercent < 0 ? 0 : curPercent;
    sound.seek(curPercent);
  }
  function handleForward() {
    if (!sound.playing()) return;
    let curPercent = (sound.seek() as number) + 10;
    curPercent = curPercent > sound.duration() ? sound.duration() : curPercent;
    sound.seek(curPercent);
  }

  const PlayControlWidget = useMemo(() => {
    function handleTogglePlay(e: React.MouseEvent) {
      e.stopPropagation();
      e.preventDefault();
      visiblePlay ? handlePlay(e) : handlePause(e);
    }

    return (
      <Flex className="pointer" onClick={handleTogglePlay}>
        {visiblePlay ? (
          <Icon size="small" name="play_arrow" />
        ) : (
          <Icon size="small" name="pause" />
        )}
      </Flex>
    );
  }, [handlePause, handlePlay, visiblePlay]);

  return (
    <div className={componentCls}>
      <Flex alignY="center" alignX="start" className={classNames('audio-container')}>
        {PlayControlWidget}
        <Flex width={50} alignX="center">
          <Text>{curTime}</Text>
        </Flex>
        <div
          ref={barContainerRef}
          className={classNames('play-bar-bg', { loading: !duration })}
          onClick={progressForward}
          onMouseDown={handleProgressMouseDown}
        >
          <div ref={barRef} className="play-bar-process"></div>
        </div>

        <Flex className="time-text" alignY="center" alignX="center">
          <Text>{formatTime(duration as number)}</Text>
        </Flex>

        <Flex alignX="space-around" alignY="center" width={140}>
          <AudioVolume onChange={volumeChange} />

          <span className="pos-r pointer" onClick={handleBackward}>
            <Icon size="small" name="replay" />
            <span className="widget-speek-text">10</span>
          </span>
          <span className="icon-forward pointer" onClick={handleForward}>
            <Icon size="small" name="replay" />
            <span className="widget-speek-text speek-text-reverse">10</span>
          </span>
          <Text size="small" weight="medium">
            1.00x
          </Text>
        </Flex>
      </Flex>
    </div>
  );
}

Voice.formatTime = formatTime;

export default Voice;
