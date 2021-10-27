import { ColumnProps, TableProps } from 'antd/lib/table';

import { Table as AntdTable } from 'antd';
import DateTime from '../DateTime';
import EllipsisText from '../EllipsisText';
import React from 'react';

export interface BaseListSummary {
  pageCurrent: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
}

export type BaseColumnProps<T> = ColumnProps<T> & {
  timestamp?: boolean;
  no?: boolean;
  disable?: boolean;
};

interface Props<T> extends TableProps<T> {
  topArea?: React.ReactNode;
  bottomArea?: React.ReactNode;
  listSummary?: BaseListSummary;
  rowSelection?: TableProps<T>['rowSelection'] & {
    selectedRows?: T[];
    onClear?: () => void;
    selectLimit?: number | [number, number];
  };
  scrolllY?: number;
  scrolllX?: string | number;
  columns: BaseColumnProps<T>[];
  onPaginationChange?: (page: number, pageSize?: number) => void;
}

export function Table<T extends Record<string, any>>(props: Props<T>) {
  const defaultListSummary: BaseListSummary = {
    pageCurrent: 1,
    pageSize: 10,
    totalItems: 0,
    totalPages: 0
  };
  const {
    listSummary = defaultListSummary,
    dataSource = [],
    scrolllY = 580,
    scrolllX,
    rowKey = 'id',
    bottomArea,
    topArea,
    rowSelection,
    columns,
    ...otherPops
  } = props;

  const { pageCurrent, pageSize, totalItems } = listSummary;

  const formatColumns = (listSummary: BaseListSummary, columns: BaseColumnProps<T>[]): BaseColumnProps<T>[] => {
    const { pageCurrent, pageSize } = listSummary;
    const noID = (pageCurrent - 1) * pageSize;
    const transFormText = (text?: string | string[]) => {
      if (Array.isArray(text)) return text.join(' / ');
      return text + ''; // 存在数字0,hover提示框不显示, 需转为字符串
    };
    return columns
      .filter((col) => !col.disable)
      .map((col) => {
        col = { ...col };
        col.align = col.align || 'center';
        /** 时间戳转换 */
        if (col.timestamp && !col.render) {
          col.render = (text: string) => (
            <EllipsisText>
              <DateTime date={text} dateFormat={'YYYY-MM-DD'} />
            </EllipsisText>
          );
        }
        /** 超出一行省略 */
        if (col.ellipsis && !col.render) {
          col.render = (text: string) => {
            return <EllipsisText>{transFormText(text)}</EllipsisText>;
          };
        }
        /** 自动生成序号 */
        if (col.no) {
          col.render = (text, record, index: number) => noID + index + 1;
        }
        return col;
      });
  };

  return (
    <>
      <div className={'table-header'}>{topArea}</div>
      <div className="table-wrap">
        <AntdTable<T>
          className="m-table"
          scroll={{ y: scrolllY }}
          pagination={{
            className: 'm-pagination',
            showTotal: (total: number) => `共${total}条`,
            showQuickJumper: true,
            pageSizeOptions: ['10', '50', '100'],
            showSizeChanger: false,
            current: pageCurrent,
            pageSize,
            total: totalItems,
            onChange: (page, pageSize) => {
              props.onPaginationChange && props.onPaginationChange(page, pageSize);
            }
          }}
          rowSelection={rowSelection}
          dataSource={dataSource}
          rowKey={rowKey}
          columns={formatColumns(listSummary, columns)}
          {...otherPops}
        />
        {bottomArea && dataSource?.length > 0 && <div className={'table-footer'}>{bottomArea}</div>}
      </div>
      <style jsx global>{`
        .table-wrap {
          position: relative;
        }
        .table-wrap .ant-spin-container::after {
          background: rgba(0, 0, 0, 0.01) !important;
        }
        .table-wrap .ant-table {
          background: transparent;
          color: #cacace;
        }
        .m-table.ant-table-wrapper .ant-table-tbody > tr > td {
          border-bottom-color: transparent;
        }
        .m-table.ant-table-wrapper .ant-table-tbody > tr > td {
          background: #1c1c24;
        }
        .m-table.ant-table-wrapper .ant-table-tbody > tr:nth-child(2n) > td {
          background: #2e2e35;
        }
        .m-table.ant-table-wrapper .ant-table-tbody > tr:hover > td {
          background: rgba(0, 0, 0);
        }

        .table-footer {
          position: absolute;
          bottom: 4px;
          transform: translateY(-50%);
        }
        .m-table.ant-table-wrapper .ant-table-thead tr > th {
          height: 60px;
          border-bottom-color: transparent;
          background: #000;
          color: #fff;
          font-weight: 700;
        }
        .m-table.ant-table-wrapper .ant-table-tbody tr.ant-table-row > td:first-child {
          border-top-left-radius: 15px;
          border-bottom-left-radius: 15px;
        }

        .m-table.ant-table-wrapper .ant-table-tbody tr.ant-table-row > td:last-child {
          border-top-right-radius: 15px;
          border-bottom-right-radius: 15px;
        }

        .ant-pagination {
          background: transparent;
          padding: 20px;
          text-align: right;
        }

        .ant-pagination .ant-pagination-total-text {
          color: rgba(255, 255, 255, 0.65);
          font-size: 14px;
        }

        .ant-pagination .ant-pagination-prev .ant-pagination-item-link,
        .ant-pagination .ant-pagination-next .ant-pagination-item-link {
          background: transparent;
          color: rgba(255, 255, 255, 0.65);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .ant-pagination .ant-pagination-item.ant-pagination-item-active,
        .ant-pagination .ant-pagination-item.ant-pagination-item-active a {
          border-color: #177ddc;
          color: #177ddc;
        }
        .ant-pagination .ant-pagination-item {
          border-radius: 2px;
          border-color: rgba(255, 255, 255, 0.2);
          font-size: 14px;
          background: transparent;
        }
        .ant-pagination .ant-pagination-item-ellipsis {
          color: rgba(255, 255, 255, 0.65) !important;
        }

        .ant-pagination .ant-pagination-item > a,
        .ant-pagination-options-quick-jumper {
          color: rgba(255, 255, 255, 0.65);
        }

        .ant-pagination .ant-select-selector,
        .ant-pagination-options-quick-jumper input {
          background: transparent;
          border-color: rgba(255, 255, 255, 0.2);
          color: rgba(255, 255, 255, 0.65);
        }
        .ant-table-cell-scrollbar {
          box-shadow: none;
        }
        .ant-empty-description {
          color: #cacace;
        }

        .ant-table-empty {
          position: relative;
        }
        .ant-table-empty .ant-table-cell {
          position: unset;
          height: 167px;
        }
        .ant-table-empty .ant-empty {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          margin: 0;
          margin-top: 30px;
        }
      `}</style>
    </>
  );
}

export default Table;
