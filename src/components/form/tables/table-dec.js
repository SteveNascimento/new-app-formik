import React from 'react'
import { Table } from 'antd'

export default function TableDec() {

    const dataSource = [
        {
            key: '1',
            tipoDec: 'Nascimento',
            numDec: 32,
            diagObit: 'Diagnóstico',
            obitoRN: 'Sim',
        },
        {
            key: '2',
            tipoDec: 'Nascimento',
            numDec: 32,
            diagObit: 'Diagnóstico',
            obitoRN: 'Sim',
        },
        {
            key: '3',
            tipoDec: 'Nascimento',
            numDec: 32,
            diagObit: 'Diagnóstico',
            obitoRN: 'Sim',
        },
    ];

    const columns = [
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
    ];

    return (
        <Table bordered size="small" columns={columns} dataSource={dataSource} />
    )
}