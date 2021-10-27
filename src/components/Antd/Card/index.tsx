import React from 'react';

interface BaseCardTypes {
  type?: 'radius';
  style?: React.CSSProperties;
  className?: string;
  bodyStyle?: React.CSSProperties;
  bodyClassName?: string;
  width?: string;
  height?: string;
}

export const Card: React.FC<BaseCardTypes> = ({ children, style, type, width, height, className, bodyStyle, bodyClassName }) => {
  const _typeWithClassName = type ? `card-${type}` : `card-default`;
  return (
    <React.Fragment>
      <div className={`${className ? className : ''} card`} style={style ?? {}}>
        <div className={`${_typeWithClassName} ${bodyClassName ? bodyClassName : ''} ui-w-100 ui-h-100`} style={bodyStyle ?? {}}>
          {children}
        </div>
      </div>
      <style jsx>{`
        .card {
          width: ${width || '100%'};
          height: ${height || 'auto'};
          box-shadow: 0 10px 10px -3px rgba(9, 11, 13, 0.5);
          background-image: linear-gradient(135deg, #24262b 0%, #191c1f 100%);
          border-radius: 10px;
          color: #fff;
          padding: 2px;
        }
        .card-radius {
          border: 2px solid #111213;
          padding: 8px 28px;
          border-radius: 10px;
        }
        .card-big {
          border-radius: 15px;
        }
        .card-big .card-radius {
          padding: 28px;
          border-radius: 15px;
        }
        .card-default {
          padding: 8px 28px;
        }
      `}</style>
    </React.Fragment>
  );
};
