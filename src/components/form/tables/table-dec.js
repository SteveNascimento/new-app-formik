import React from 'react'
import { Table, Popconfirm, Button } from 'antd'
import { useStoreActions, useStoreState } from 'easy-peasy';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';

export default function TableDec() {

    const dataSource = useStoreState(state => state.tableDec.decList)

    const removeDecFromList = useStoreActions(
        actions => actions.tableDec.removeFromList
    )

    const addToList = useStoreActions(
        actions => actions.tableDec.addToList
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
            <Button
                style={{ margin: '25px 10px', float: 'right' }}
                onClick={() => {
                    addToList({
                        tipoDec: 'Nascimento',
                        numDec: 32,
                        diagObit: 'Diagnóstico',
                        obitoRN: 'Sim',
                    })
                }}
                type="primary"
                size='small'
            >
                <PlusOutlined /> Adicionar
            </Button>
            <Table name='dec-table' rowKey={(row) => `${row.id}`} bordered size="small" columns={columns} dataSource={dataSource} />
        </>
    )
}