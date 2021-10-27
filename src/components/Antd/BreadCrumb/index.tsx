import { Button } from '@/components/Antd';
import { LeftCircleOutlined } from '@ant-design/icons';
import React from 'react';
import { type } from 'os';
import { useHistory } from 'react-router';

interface Props {
  text: string;
  linkText?: string;
  onLinkClick?: () => void;
  path?: string;
  jumpPage?: number;
}

export const BreadCrumb: React.FC<Props> = ({ path, jumpPage, text, linkText, onLinkClick }) => {
  const history = useHistory();
  const goBackHandle = () => {
    // 地址和页码存在, 则携带页码跳回
    if (path && jumpPage && jumpPage > 0) {
      history.push(`${path}/?current=${jumpPage}`);
    } else {
      window.history.back();
    }
  };
  return (
    <div className={'breadCrumbWarp'}>
      <LeftCircleOutlined className="goBack" onClick={goBackHandle} />
      <span className={'ui-ml-20'}>{text}</span>
      {linkText ? (
        <Button size="large" className={'ui-ml-20'} onClick={onLinkClick}>
          {linkText}
        </Button>
      ) : null}
      <style jsx global>{`
        .goBack {
          font-size: 28px;
        }
        .breadCrumbWarp {
          font-size: 16px;
          color: #fafafb;
          display: flex;
          align-items: center;
        }
      `}</style>
    </div>
  );
};

export default BreadCrumb;
