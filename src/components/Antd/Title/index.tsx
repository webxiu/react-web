import React from 'react';

export const Title: React.FC<{ style?: React.CSSProperties }> = ({ children, style }) => {
  return (
    <React.Fragment>
      <div className="app-class" style={style ?? {}}>
        {children}
      </div>
      ;
      <style jsx>{`
        .app-class {
        }
      `}</style>
    </React.Fragment>
  );
};
