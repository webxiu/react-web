import React from 'react';
export interface BaseContentProps {
  className?: string;
  style?: React.CSSProperties;
  styleName?: string;
}

export const Content: React.FC<BaseContentProps> = (props) => {
  return (
    <React.Fragment>
      <main style={props.style ?? {}}>{props.children}</main>
      <style jsx>{`
        main {
          flex: 1;
          height: 100%;
          overflow-y: auto;
          background: #13131a;
          padding: 24px 30px 10px;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Content;
