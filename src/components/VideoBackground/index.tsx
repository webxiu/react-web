/* eslint-disable no-var */
/**
 * @Author yejiang1015
 * @Date 2020-11-16 17:23:06
 * @Last Modified by: yejiang1015
 * @Last Modified time: 2020-11-20 17:31:20
 * @Message https://threejs.org/examples/webgl_points_waves.html
 */

import React, { useEffect, useRef } from 'react';

const background = require('@/assets/video/background.gif');

export default (props) => {
  const VideoREF = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!VideoREF || !VideoREF.current) return;
    VideoREF.current.playbackRate = 0.7;
  }, [VideoREF]);
  return (
    <section className="ui-p-r ui-w-100 ui-h-100 ui-ov-h">
      <div className="three">
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        {/* <video
          ref={VideoREF}
          poster={poster}
          object-fit="cover"
          autoPlay
          loop
          width="100%"
          preload="metadata"
          src={`${window.location.origin}/public/assets/video/background.mp4`}
        ></video> */}
        <div style={{ width: '100%', height: '100%', background: `url(${background.default}) no-repeat`, backgroundSize: 'cover' }}></div>
      </div>
      <div className="inner">{props.children}</div>
      <style jsx>{`
        .three,
        .inner {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
        }
        .three {
          z-index: 1;
        }
        .inner {
          z-index: 2;
          background: rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </section>
  );
};
