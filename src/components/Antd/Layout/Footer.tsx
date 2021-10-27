import React, { Fragment } from 'react';

export interface BaseFooterProps {
  className?: string;
  style?: React.CSSProperties;
}

export const Header: React.FC<BaseFooterProps> = ({ children }) => {
  return (
    <Fragment>
      <footer>
        V{$$.AppInfo.versions.appVersion} Build({$$.AppInfo.versions.build ?? 'Local'})
      </footer>
      <style jsx>{`
        footer {
          width: 100%;
          background: var(--bodybgc);
          color: var(--greyc);
          font-size: 14px;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding: 10px 0 16px;
        }
      `}</style>
    </Fragment>
  );
};

export default Header;
