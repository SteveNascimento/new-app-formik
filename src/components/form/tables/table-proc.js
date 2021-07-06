import React from 'react'
import { Table } from 'antd'

export default function TableDec() {

    const dataSource = [
        {
            key: '1',
            id: '1',
            data: `04-09-2001`,
            hrinicial: '13-32-23',
            hrfinal: '13-32-23',
            tab: 3,
            codProc: 5,
            descr: 'Procedimento tal',
            qtd: 1,
            via: 'Unica',
            tec: 'Convencional',
            red: 0.04,
            vlunit: 34.50,
            vltotal: 34.5,
        },
        {
            key: '2',
            id: '1',
            data: `04-09-2001`,
            hrinicial: '13-32-23',
            hrfinal: '13-32-23',
            tab: 3,
            codProc: 5,
            descr: 'Procedimento tal',
            qtd: 1,
            via: 'Unica',
            tec: 'Convencional',
            red: 0.04,
            vlunit: 34.50,
            vltotal: 34.5,
        },
        {
            key: '3',
            id: '1',
            data: `04-09-2001`,
            hrinicial: '13-32-23',
            hrfinal: '13-32-23',
            tab: 3,
            codProc: 5,
            descr: 'Procedimento tal',
            qtd: 1,
            via: 'Unica',
            tec: 'Convencional',
            red: 0.04,
            vlunit: 34.50,
            vltotal: 34.5,
        },
    ];

    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: '34 - Data',
            dataIndex: 'data',
            key: 'data',
        },
        {
            title: '35- HrInicial',
            dataIndex: 'hrinicial',
            key: 'hrinicial',
        },
        {
            title: '36- HrFinal',
            dataIndex: 'hrfinal',
            key: 'hrfinal',
        },
        {
            title: '37- Tab',
            dataIndex: 'tab',
            key: 'tab',
        },
        {
            title: '38- CodProced',
            dataIndex: 'codProc',
            key: 'codProc',
        },
        {
            title: '39- Descrição',
            dataIndex: 'descr',
            key: 'descr',
        },
        {
            title: '40-Qtde',
            dataIndex: 'qtd',
            key: 'qtd',
        },
        {
            title: '41-Via',
            dataIndex: 'via',
            key: 'via',
        },
        {
            title: '42-Téc',
            dataIndex: 'tec',
            key: 'tec',
        },
        {
            title: '43- %Red/Acresc',
            dataIndex: 'red',
            key: 'red',
        },
        {
            title: '44- Vl Unit',
            dataIndex: 'vlunit',
            key: 'vlunit',
        },
        {
            title: '45- Vl Total',
            dataIndex: 'vltotal',
            key: 'vltotal',
        },
    ];

    return (
        <Table bordered size="small" scroll={{ x: 1800, y: 300 }} columns={columns} dataSource={dataSource} />
    )
}