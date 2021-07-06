import React from 'react'
import { Table } from 'antd'

export default function TableEquip() {

    const dataSource = [
        {
            key: '1',
            id: 1,
            seqRefer: 23,
            grauPart: 'Cirurgião',
            cpf: '000.000.000-00',
            nomeProf: 'Nome do Indivíduo',
            consProf: 'Conselho do indivíduo',
            numCons: 'Numero',
            uf: 'CE',
            codCbo: 23523542,
        },
        {
            key: '2',
            id: 1,
            seqRefer: 23,
            grauPart: 'Cirurgião',
            cpf: '000.000.000-00',
            nomeProf: 'Nome do Indivíduo',
            consProf: 'Conselho do indivíduo',
            numCons: 'Numero',
            uf: 'CE',
            codCbo: 23523542,
        },
        {
            key: '3',
            id: 1,
            seqRefer: 23,
            grauPart: 'Cirurgião',
            cpf: '000.000.000-00',
            nomeProf: 'Nome do Indivíduo',
            consProf: 'Conselho do indivíduo',
            numCons: 'Numero',
            uf: 'CE',
            codCbo: 23523542,
        },
    ];

    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: '46 - Seq.Refer',
            dataIndex: 'seqRefer',
            key: 'seqRefer',
        },
        {
            title: '47 - Grau.Part',
            dataIndex: 'grauPart',
            key: 'grauPart',
        },
        {
            title: '48 - CPF',
            dataIndex: 'cpf',
            key: 'cpf',
        },
        {
            title: '49 - Nome do Profissional',
            dataIndex: 'nomeProf',
            key: 'nomeProf',
        },
        {
            title: '50 - Conselho Prof.',
            dataIndex: 'consProf',
            key: 'consProf',
        },
        {
            title: '51 - Nº Conselho',
            dataIndex: 'numCons',
            key: 'numCons',
        },
        {
            title: '52 - UF',
            dataIndex: 'uf',
            key: 'uf',
        },
        {
            title: '53 - Código CBO',
            dataIndex: 'codCbo',
            key: 'codCbo',
        },
    ];

    return (
        <Table bordered scroll={{ x: 1800, y: 300 }} size="small" columns={columns} dataSource={dataSource} />
    )
}