import React, { useEffect, useRef } from 'react';

import { Popover } from 'antd';

interface Props {
  tipText?: React.ReactNode;
}

const Component: React.FC<Props> = (props) => {
  const { tipText, children } = props;
  const subDom = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    subDom.current && (subDom.current.parentNode! as HTMLDivElement).removeAttribute('title');
  }, []);
  return (
    <>
      <Popover
        placement="topLeft"
        content={<span style={{ display: 'inline-block', maxWidth: 300, maxHeight: 80, overflow: 'auto' }}>{tipText ? tipText : children}</span>}
      >
        <span ref={subDom}>{children}</span>
      </Popover>
      {/* <style jsx global>{`
        .ant-popover .ant-popover-content .ant-popover-inner {
          background: #1c1c24;
        }
        .ant-popover .ant-popover-content .ant-popover-inner .ant-popover-inner-content {
          color: #fff;
        }
        .ant-popover .ant-popover-content .ant-popover-arrow {
          border-color: #181a1d;
        }
      `}</style> */}
    </>
  );
};

// export default React.memo(Component);
export default Component;
