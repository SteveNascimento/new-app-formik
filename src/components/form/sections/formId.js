import React from 'react'
import { Divider, Row, Col, Form, Input, Select } from 'antd'
import { Controller } from 'react-hook-form'
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

    const InputField = (props) => {
        const { label, name } = props;
        return (
            <Controller
                name={name}
                render={({ field, fieldState: { error } }) => {
                    return (
                        <Form.Item
                            label={label}
                            validateStatus={error ? 'error' : ''}
                            help={error ? error.message : ''}
                            hasFeedback
                        >
                            <Input {...field} />
                        </Form.Item>
                    )
                }}
            >
            </Controller>
        )
    }

    const SelectField = (props) => {
        const { label, name, children } = props;
        return (
            <Controller
                name={name}
                render={({ field, fieldState: { error } }) => {
                    return (
                        <Form.Item
                            label={label}
                            validateStatus={error ? 'error' : ''}
                            help={error ? error.message : ''}
                        >
                            <Select {...field}>
                                {children}
                            </Select>
                        </Form.Item>
                    )
                }}
            >
            </Controller>
        )
    }

    return (
        <section id="identificacao-da-equipe">
            <Divider orientation="left" style={{ fontSize: "20px", fontWeight: "bold" }}>Identificação da equipe</Divider>
            <Row align='bottom' gutter={[20, 10]}>
                <Col>
                    <InputField name={_46SEQ_REF} label="46 - Seq.Ref" />
                </Col>
                <Col>
                    <SelectField name={_47GRAU_PART} label="47 - Grau Part" >
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
                    </SelectField>
                </Col>
                <Col>
                    <InputField name={_48COD_OP_CPF} label="48 - Códio na Operadora/CPF" />
                </Col>
                <Col>
                    <InputField name={_49NOME_PROF_EQUIP} label="49 - Nome do Profissional" />
                </Col>
                <Col>
                    <InputField name={_50NOME_CONS_PROF_EQUIP} label="50 - Conselho Profissional" />
                </Col>
                <Col>
                    <InputField name={_51NUM_CONSELHO_EQUIP} label="51 - Numero no Conselho" />
                </Col>
                <Col>
                    <InputField name={_52UF_EQUIP} label="52 - UF" />
                </Col>
                <Col>
                    <InputField name={_53COD_CBO_EQUIP} label="53 - Código CBO" />
                </Col>
            </Row>
            <TableEquip />
        </section>
    )

}
