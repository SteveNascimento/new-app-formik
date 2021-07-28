import React from 'react'
import { Divider, Row, Col, Form, Input, Select } from 'antd'
import { Controller } from 'react-hook-form'
import TableDec from './../tables/table-dec'

import {
    _30TIPO_DE_DECL,
    _31CID_OBITO,
    _32NUMERO_DECL,
    _33OBITO_RN
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
        <section id="declaracoes">
            <Divider orientation="left" style={{ fontSize: "20px", fontWeight: "bold" }}>Declarações</Divider>
            <Row align='bottom' gutter={[20, 10]} >
                <Col>
                    <SelectField name={_30TIPO_DE_DECL} label="30 - Tipo Declaracao" >
                        <Select.Option value={1}>Nascimento</Select.Option>
                        <Select.Option value={2}>Obito</Select.Option>
                    </SelectField>
                </Col>
                <Col>
                    <InputField name={_31CID_OBITO} label="31 - CID Óbito" />
                </Col>
                <Col>
                    <InputField name={_32NUMERO_DECL} label="32 - Numero da Declaração" />
                </Col>
                <Col>
                    <SelectField name={_33OBITO_RN} label="33 - Obito do RN" >
                        <Select.Option value={true}>Sim</Select.Option>
                        <Select.Option value={false}>Não</Select.Option>
                    </SelectField>
                </Col>
            </Row>
            <TableDec />
        </section >
    )

}
