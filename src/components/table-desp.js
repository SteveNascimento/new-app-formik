import React from 'react'
import { Table } from 'antd'

export default function TableDesp() {

    const dataSource = [
        {
            key: '1',
            id: '1',
            cd: '1 - Gases Medicinais',
            data: `04-09-2001`,
            hrInicial: '13-32-23',
            hrFinal: '13-32-23',
            tab: 3,
            codItem: 5,
            qtd: 5,
            redAcres: 0.03,
            vlUnit: 15,
            vlTotal: 75,
            descr: 'Qualquer descrição',
        },
        {
            key: '1',
            id: '1',
            cd: '1 - Gases Medicinais',
            data: `04-09-2001`,
            hrInicial: '13-32-23',
            hrFinal: '13-32-23',
            tab: 3,
            codItem: 5,
            qtd: 5,
            redAcres: 0.03,
            vlUnit: 15,
            vlTotal: 75,
            descr: 'Qualquer descrição',
        },
        {
            key: '1',
            id: '1',
            cd: '1 - Gases Medicinais',
            data: `04-09-2001`,
            hrInicial: '13-32-23',
            hrFinal: '13-32-23',
            tab: 3,
            codItem: 5,
            qtd: 5,
            redAcres: 0.03,
            vlUnit: 15,
            vlTotal: 75,
            descr: 'Qualquer descrição',
        },
        {
            key: '1',
            id: '1',
            cd: '1 - Gases Medicinais',
            data: `04-09-2001`,
            hrInicial: '13-32-23',
            hrFinal: '13-32-23',
            tab: 3,
            codItem: 5,
            qtd: 5,
            redAcres: 0.03,
            vlUnit: 15,
            vlTotal: 75,
            descr: 'Qualquer descrição',
        },
        {
            key: '1',
            id: '1',
            cd: '1 - Gases Medicinais',
            data: `04-09-2001`,
            hrInicial: '13-32-23',
            hrFinal: '13-32-23',
            tab: 3,
            codItem: 5,
            qtd: 5,
            redAcres: 0.03,
            vlUnit: 15,
            vlTotal: 75,
            descr: 'Qualquer descrição',
        },
    ];

    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: '6 - CD',
            dataIndex: 'cd',
            key: 'cd',
        },
        {
            title: '7 - Data',
            dataIndex: 'data',
            key: 'data',
        },
        {
            title: '8 - Hr Inicial',
            dataIndex: 'hrInicial',
            key: 'hrInicial',
        },
        {
            title: '9 - Hr Final',
            dataIndex: 'hrFinal',
            key: 'hrFinal',
        },
        {
            title: '10 - Tabela',
            dataIndex: 'tab',
            key: 'tab',
        },
        {
            title: '11 - Cód. Item',
            dataIndex: 'codItem',
            key: 'codItem',
        },
        {
            title: '12 - Qtd',
            dataIndex: 'qtd',
            key: 'qtd',
        },
        {
            title: '13 - %Red/Acres',
            dataIndex: 'redAcres',
            key: 'redAcres',
        },
        {
            title: '14 - VL Unitario',
            dataIndex: 'vlUnit',
            key: 'vlUnit',
        },
        {
            title: '15 - VL Total',
            dataIndex: 'vlTotal',
            key: 'vlTotal',
        },
        {
            title: '16 - Descrição',
            dataIndex: 'descr',
            key: 'descr',
        },
    ];

    return (
        <Table bordered size="small" scroll={{ x: 1800, y: 300 }} columns={columns} dataSource={dataSource} />
    )
}