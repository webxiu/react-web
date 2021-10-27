import { BaseContentProps } from './Content';
import { BaseFooterProps } from './Footer';
import { BaseHeaderProps } from './Header';
import React from 'react';

export interface BaseLayoutProps {
  className?: string;
  style?: React.CSSProperties;
}

export default class extends React.Component<BaseLayoutProps> {
  static Content: React.FC<BaseContentProps>;
  static Header: React.FC<BaseHeaderProps>;
  static Footer: React.FC<BaseFooterProps>;

  render() {
    return (
      <React.Fragment>
        <section className={`${this.props.className || 'layout'}`} style={this.props.style ?? {}}>
          {React.Children.toArray(this.props.children).map((child) => child)}
        </section>
        <style jsx>{`
          .layout {
            display: flex;
            width: 100vw;
            height: 100vh;
            overflow: hidden;
            flex-direction: column;
          }
        `}</style>
      </React.Fragment>
    );
  }
}
