import React, { useState } from 'react'
import { Divider, Button, Row, Col } from 'antd'
import { Form, Input, Select } from 'formik-antd'
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

    return (
        <section id="identificacao-da-equipe">
            <Divider orientation="left" style={{ fontSize: "20px", fontWeight: "bold" }}>Identificação da equipe</Divider>
            <Row align='bottom' gutter={[20, 10]}>
                <Col>
                    <Form.Item name={_46SEQ_REF} label="46 - Seq.Ref">
                        <Input name={_46SEQ_REF} type="text" />
                    </Form.Item>
                </Col>
                <Col>
                    <Form.Item name={_47GRAU_PART} label="47 - Grau Part" >
                        <Select
                            style={{ width: "100%" }}
                            name={_47GRAU_PART}
                        >
                            <Select.Option value={0}>Cirurgião</Select.Option>
                            <Select.Option value={1}>Primeiro Auxiliar</Select.Option>
                            <Select.Option value={2}>Segundo Auxiliar</Select.Option>
                            <Select.Option value={3}>Terceiro Auxiliar</Select.Option>
                            <Select.Option value={4}>Quarto Auxiliar</Select.Option>
                            <Select.Option value={5}>Instrumentador </Select.Option>
                            <Select.Option value={6}>Anestesista</Select.Option>
                            <Select.Option value={7}>Auxiliar de Anestesista</Select.Option>
                            <Select.Option value={8}>Consultor</Select.Option>
                            <Select.Option value={9}>Perfusionista</Select.Option>
                            <Select.Option value={10}>Pediatra na sala de parto</Select.Option>
                            <Select.Option value={11}>Auxiliar SADT</Select.Option>
                            <Select.Option value={12}>Clínico</Select.Option>
                            <Select.Option value={13}>Intensivista</Select.Option>
                        </Select>
                    </Form.Item>
                </Col>
                <Col>
                    <Form.Item name={_48COD_OP_CPF} label="48 - Códio na Operadora/CPF">
                        <Input name={_48COD_OP_CPF} type="text" />
                    </Form.Item>
                </Col>
                <Col>
                    <Form.Item name={_49NOME_PROF_EQUIP} label="49 - Nome do Profissional">
                        <Input name={_49NOME_PROF_EQUIP} type="text" />
                    </Form.Item>
                </Col>
                <Col>
                    <Form.Item name={_50NOME_CONS_PROF_EQUIP} label="50 - Conselho Profissional">
                        <Input name={_50NOME_CONS_PROF_EQUIP} type="text" />
                    </Form.Item>
                </Col>
                <Col>
                    <Form.Item name={_51NUM_CONSELHO_EQUIP} label="51 - Numero no Conselho">
                        <Input name={_51NUM_CONSELHO_EQUIP} type="text" />
                    </Form.Item>
                </Col>
                <Col>
                    <Form.Item name={_52UF_EQUIP} label="52 - UF">
                        <Input name={_52UF_EQUIP} type="text" />
                    </Form.Item>
                </Col>
                <Col>
                    <Form.Item name={_53COD_CBO_EQUIP} label="53 - Código CBO">
                        <Input name={_53COD_CBO_EQUIP} type="text" />
                    </Form.Item>
                </Col>
            </Row>
            <Button size="small" loading={adding} type="primary" className="add" onClick={adder}>Adicionar</Button>
            <TableEquip />
        </section>
    )

}



/*         <section id="identificacao-da-equipe">
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
                        <Select.Option value={0}>Cirurgião</Select.Option>
                        <Select.Option value={1}>Primeiro Auxiliar</Select.Option>
                        <Select.Option value={2}>Segundo Auxiliar</Select.Option>
                        <Select.Option value={3}>Terceiro Auxiliar</Select.Option>
                        <Select.Option value={4}>Quarto Auxiliar</Select.Option>
                        <Select.Option value={5}>Instrumentador </Select.Option>
                        <Select.Option value={6}>Anestesista</Select.Option>
                        <Select.Option value={7}>Auxiliar de Anestesista</Select.Option>
                        <Select.Option value={8}>Consultor</Select.Option>
                        <Select.Option value={9}>Perfusionista</Select.Option>
                        <Select.Option value={10}>Pediatra na sala de parto</Select.Option>
                        <Select.Option value={11}>Auxiliar SADT</Select.Option>
                        <Select.Option value={12}>Clínico</Select.Option>
                        <Select.Option value={13}>Intensivista</Select.Option>
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
        </section> */