import React from 'react';
import { Table } from 'antd';

const NewUserdestailtable = ({ data }) => {
  const columns = [
    { title: 'Field', dataIndex: 'field', key: 'field' },
    { title: 'Value', dataIndex: 'value', key: 'value' },
  ];

  const dataSource = Object.keys(data).map((key) => ({
    key,
    field: key,
    value: JSON.stringify(data[key]),
  }));

  return (
    <div>
      <h3>Form Data Table</h3>
      <Table dataSource={dataSource} columns={columns} pagination={false} />
    </div>
  );
};

export default NewUserdestailtable;
