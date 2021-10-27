import axios, { AxiosRequestConfig, InjectAbort } from '@/axios';

import { Button } from '@/components/Antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import React from 'react';
import moment from 'moment';
import utils from '../../utils';

export interface Props<T> {
  url: string;
  fileName: string;
  text?: string;
  params?: T;
  style?: React.CSSProperties;
}

export default function Export<T extends Record<string, any>>(props: Props<T>) {
  const { url, params, style, fileName, text = '导出' } = props;
  const exportHandle = () => {
    Modal.confirm({
      icon: <ExclamationCircleOutlined />,
      content: <div>确认导出吗?</div>,
      centered: true,
      okText: '确认',
      cancelText: '取消',
      onOk: () => onExport(),
      onCancel: () => {
        getFiles['abort'] && getFiles['abort']('取消导出');
      }
    });
  };

  /** 获取文件流 */
  const getFiles = () => {
    return axios
      .get(
        url,
        InjectAbort(getFiles, {
          params,
          responseType: 'blob',
          timeout: 0
        } as AxiosRequestConfig)
      )
      .then((res) => res.data)
      .catch((e) => {
        console.error('err:', e);
      });
  };

  /** 导出 */
  const onExport = async () => {
    const blob = (await getFiles()) as Blob;
    if (!blob) return;
    const name = `${moment().format('YYYYMMDDHHmmss')}${fileName}.xlsx`;
    utils.downLoadFile(blob, name);
  };

  return (
    <Button onClick={exportHandle} style={style}>
      {text}
    </Button>
  );
}
