import React from 'react'
import { Table, Popconfirm, Button } from 'antd'
import { useStoreActions, useStoreState } from 'easy-peasy';
import { DeleteOutlined } from '@ant-design/icons';

export default function TableDec() {

    const dataSource = useStoreState(state => state.tableDec.decList)

    const removeDecFromList = useStoreActions(
        actions => actions.tableDec.removeFromList
    )

    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Tipo da declaração',
            dataIndex: 'tipoDec',
            key: 'tipoDec',
        },
        {
            title: 'Diagnótico de óbito',
            dataIndex: 'diagObit',
            key: 'diagObit',
        },
        {
            title: 'Número da declaração',
            dataIndex: 'numDec',
            key: 'numDec',
        },
        {
            title: 'Óbito do RN',
            dataIndex: 'obitoRN',
            key: 'obitoRN',
        },
        {
            title: '',
            dataIndex: 'operation',
            render: (_t, _r, index) =>
                <Popconfirm title="Confirma apagar a declaração?" onConfirm={() => removeDecFromList(index)}>
                    <Button type='ghost' ><DeleteOutlined /></Button>
                </Popconfirm>
        },
    ]

    return (
        <>
            <Table name='dec-table' rowKey={(row) => `${row.id}`} bordered size="small" columns={columns} dataSource={dataSource} />
        </>
    )
}