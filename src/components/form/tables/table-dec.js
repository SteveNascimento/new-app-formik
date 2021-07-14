import React from 'react'
import { Table, Popconfirm, Button } from 'antd'
import { useStoreActions, useStoreState } from 'easy-peasy';

export default function TableDec() {

    const dataSource = useStoreState(state => state.tableDec.decList)

    const removeDecFromList = useStoreActions(
        actions => actions.tableDec.removeFromList
    )

    const columns = [
        {
            title: '',
            dataIndex: 'key',
            key: 'key',
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
                    <Button type='ghost' >Apagar</Button>
                </Popconfirm>
        },
    ]

    return (
        <Table bordered size="small" columns={columns} dataSource={dataSource} />
    )
}