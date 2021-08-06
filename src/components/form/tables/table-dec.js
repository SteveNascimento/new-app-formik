import React from 'react'
import { Table, Popconfirm, Button } from 'antd'
import { useStoreActions, useStoreState } from 'easy-peasy';
import { DeleteOutlined } from '@ant-design/icons';
import {
    _30TIPO_DE_DECL,
    _31CID_OBITO,
    _32NUMERO_DECL,
    _33OBITO_RN
} from '../fieldsNames'

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
            dataIndex: [_30TIPO_DE_DECL],
            key: [_30TIPO_DE_DECL],
        },
        {
            title: 'Diagnótico de óbito',
            dataIndex: [_31CID_OBITO],
            key: [_31CID_OBITO],
        },
        {
            title: 'Número da declaração',
            dataIndex: [_32NUMERO_DECL],
            key: [_32NUMERO_DECL],
        },
        {
            title: 'Óbito do RN',
            dataIndex: [_33OBITO_RN],
            key: [_33OBITO_RN],
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
            <Table 
            name='dec-table'
            bordered
            size="small"
            rowKey={(row) => `${row.id}`}
            columns={columns}
            dataSource={dataSource} />
        </>
    )
}