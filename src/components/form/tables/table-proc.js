import React from 'react'
import { Table,  Popconfirm, Button } from 'antd'
import { useStoreActions, useStoreState } from 'easy-peasy';
import { DeleteOutlined } from '@ant-design/icons';
import {
    _34DATA_PROC,
    _35HORA_INICIO_PROC,
    _36HORA_FIM_PROC,
    _37TAB_PROC,
    _38COD_PROC,
    _39DESC_PROC,
    _40QTD_PROC,
    _41VIA_PROC,
    _42TEC_PROC,
    _43RED_ACRESC,
    _44VALOR_UNIT_PROC,
    _45VALOR_TOT_PROC,
} from '../fieldsNames'

export default function TableProc() {

    const dataSource = useStoreState(state => state.tableProc.procList)

    
    const removeProcFromList = useStoreActions(
        actions => actions.tableProc.removeFromList
    )

    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: '34 - Data',
            dataIndex: [_34DATA_PROC],
            key: [_34DATA_PROC],
        },
        {
            title: '37- Tab',
            dataIndex: [_37TAB_PROC],
            key: [_37TAB_PROC],
        },
        {
            title: '38- CodProced',
            dataIndex: [_38COD_PROC],
            key: [_38COD_PROC],
        },
        {
            title: '45- Vl Total',
            dataIndex: [_45VALOR_TOT_PROC],
            key: [_45VALOR_TOT_PROC],
        },
        {
            title: '',
            dataIndex: 'operation',
            render: (_t, _r, index) =>
                <Popconfirm title="Confirma apagar o procedimento?" onConfirm={() => removeProcFromList(index)}>
                    <Button type='ghost' ><DeleteOutlined /></Button>
                </Popconfirm>
        },
    ];

    const columnsExp = [
        {
            title: '35- HrInicial',
            dataIndex: [_35HORA_INICIO_PROC],
            key: [_35HORA_INICIO_PROC],
        },
        {
            title: '36- HrFinal',
            dataIndex: [_36HORA_FIM_PROC],
            key: [_36HORA_FIM_PROC],
        },
        {
            title: '39- Descrição',
            dataIndex: [_39DESC_PROC],
            key: [_39DESC_PROC],
        },
        {
            title: '40-Qtde',
            dataIndex: [_40QTD_PROC],
            key: [_40QTD_PROC],
        },
        {
            title: '41-Via',
            dataIndex: [_41VIA_PROC],
            key: [_41VIA_PROC],
        },
        {
            title: '42-Téc',
            dataIndex: [_42TEC_PROC],
            key: [_42TEC_PROC],
        },
        {
            title: '43- %Red/Acresc',
            dataIndex: [_43RED_ACRESC],
            key: [_43RED_ACRESC],
        },
        {
            title: '44- Vl Unit',
            dataIndex: [_44VALOR_UNIT_PROC],
            key: [_44VALOR_UNIT_PROC],
        },
    ];

    return (
        <>
            <Table
            expandable={{
                expandedRowRender: record => {
                    console.log(record);
                    return(
                        <Table
                        bordered={true}
                        size='small'
                        rowKey={() => `${record.id}`}
                        columns={columnsExp}
                        dataSource={record.expand}/>
                    )
                }
            }}    
            name='proc-table'
            bordered size="small"
            rowKey={(row) => `${row.id}`}
            columns={columns}
            dataSource={dataSource} />
        </>
    )
}