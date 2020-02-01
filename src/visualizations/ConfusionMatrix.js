
import React from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import { Table } from 'antd';

function ConfusionMatrix() {

    const columns = [
        {
            title: '',
            dataIndex: 'name',
        },
        {
            title: 'Class 1 predicted',
            dataIndex: 'class1',
        },
        {
            title: 'Class 2 predicted',
            dataIndex: 'class2',
        },
        {
            title: 'Class 3 predicted',
            dataIndex: 'class3',
        },
    ];

    const data = [
        {
            key: '1',
            name: 'Class 1 Actual',
            class1: 300,
            class2: 100,
            class3: 100,
        },
        {
            key: '2',
            name: 'Class 2 Actual',
            class1: 100,
            class2: 300,
            class3: 100,
        },
        {
            key: '3',
            name: 'Class 3 Actual',
            class1: 100,
            class2: 100,
            class3: 300,
        },
    ];
    return (
        <Table
            pagination={false}
            columns={columns}
            dataSource={data}
        />
    )
}
export default ConfusionMatrix;
