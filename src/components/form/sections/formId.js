import React, { useState } from 'react'
import { Descriptions, Divider, Button } from 'antd'
import { FormItem, Input, Select } from 'formik-antd'
import TableEquip from './../tables/table-equip'

import {
    _46SEQ_REF,
    _47GRAU_PART,
    _48COD_OP_CPF,
    _49NOME_PROF_EQUIP,
    _50NOME_CONS_PROF_EQUIP,
    _51NUM_CONSELHO_EQUIP,
    _52UF_EQUIP,
    _53COD_CBO_EQUIP,
} from '../fieldsNames'


export default function FormDadBenef() {

    const [adding, setAdding] = useState(false)

    const adder = () => {
        setAdding(true)
        setTimeout(() => {
            console.log('Dados adicionados a Tabela!');
            setAdding(false)
        }, 2000)

    }

    const MyTextInput = (props) => {
        return (
            <>
                <FormItem name={props.name}>
                    <Input {...props} />
                </FormItem>
            </>
        )
    }

    return (
        <section id="identificacao-da-equipe">
            <Divider orientation="left" style={{ fontSize: "20px", fontWeight: "bold" }}>Identificação da equipe</Divider>
            <Descriptions style={{ margin: "10px 0px" }} bordered size="small" column={{ xxl: 4, xl: 3, lg: 2, md: 2, sm: 1, xs: 1 }}>
                <Descriptions.Item label="46 - Seq.Ref">
                    <MyTextInput name={_46SEQ_REF} type="text" />
                </Descriptions.Item>
                <Descriptions.Item label="47 - Grau Part" >
                    <Select
                        style={{ width: "100%" }}
                        name={_47GRAU_PART}
                    >
                        <Select.Option value={'00'}>Cirurgião</Select.Option>
                        <Select.Option value={'01'}>Primeiro Auxiliar</Select.Option>
                        <Select.Option value={'02'}>Segundo Auxiliar</Select.Option>
                        <Select.Option value={'03'}>Terceiro Auxiliar</Select.Option>
                        <Select.Option value={'04'}>Quarto Auxiliar</Select.Option>
                        <Select.Option value={'05'}>Instrumentador </Select.Option>
                        <Select.Option value={'06'}>Anestesista</Select.Option>
                        <Select.Option value={'07'}>Auxiliar de Anestesista</Select.Option>
                        <Select.Option value={'08'}>Consultor</Select.Option>
                        <Select.Option value={'09'}>Perfusionista</Select.Option>
                        <Select.Option value={'10'}>Pediatra na sala de parto</Select.Option>
                        <Select.Option value={'11'}>Auxiliar SADT</Select.Option>
                        <Select.Option value={'12'}>Clínico</Select.Option>
                        <Select.Option value={'13'}>Intensivista</Select.Option>
                    </Select>
                </Descriptions.Item>
                <Descriptions.Item label="48 - Códio na Operadora/CPF">
                    <MyTextInput name={_48COD_OP_CPF} type="text" />
                </Descriptions.Item>
                <Descriptions.Item label="49 - Nome do Profissional">
                    <MyTextInput name={_49NOME_PROF_EQUIP} type="text" />
                </Descriptions.Item>
                <Descriptions.Item label="50 - Conselho Profissional">
                    <MyTextInput name={_50NOME_CONS_PROF_EQUIP} type="text" />
                </Descriptions.Item>
                <Descriptions.Item label="51 - Numero no Conselho">
                    <MyTextInput name={_51NUM_CONSELHO_EQUIP} type="text" />
                </Descriptions.Item>
                <Descriptions.Item label="52 - UF">
                    <MyTextInput name={_52UF_EQUIP} type="text" />
                </Descriptions.Item>
                <Descriptions.Item label="53 - Código CBO">
                    <MyTextInput name={_53COD_CBO_EQUIP} type="text" />
                </Descriptions.Item>
            </Descriptions>
            <Button size="small" loading={adding} type="primary" className="add" onClick={adder}>Adicionar</Button>
            <TableEquip />
        </section>
    )

}



