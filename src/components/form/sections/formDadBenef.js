import React from 'react'
import { Divider, Row, Col, Input, Select, DatePicker, Form } from 'antd'
import { Controller } from 'react-hook-form'

import {
    _8NUM_CART, _9VAL_CART, _10NOME_BENEF, _11CART_NAC_SAUD,
    _12AT_A_RN
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

    const DatePickerField = (props) => {
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
                        >
                            <DatePicker
                                {...field}
                                placeholder={'Data'}
                                format={'DD/MM/YYYY'}
                            />
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
        <section id="dados-do-beneficiario">
            <Divider orientation="left" style={{ marginBottom: '30px', fontSize: "20px", fontWeight: "bold" }}>Dados do Beneficiário</Divider>
            <Row align='bottom' gutter={[10, 10]}>
                <Col className="coluna" >
                    <InputField name={_8NUM_CART} label="8 - Número da Carteira" />
                </Col>
                <Col className="coluna">
                    <DatePickerField name={_9VAL_CART} label="9 - Validade da Carteira" />
                </Col>
                <Col className="coluna">
                    <InputField name={_10NOME_BENEF} label="10 - Nome" />
                </Col>
                <Col className="coluna">
                    <InputField name={_11CART_NAC_SAUD} label="11 - Cartão Nacional de Saúde" />
                </Col>
                <Col className="coluna">
                    <SelectField name={_12AT_A_RN} label="12 - Atendimento a RN" >
                        <Select.Option value={true}>Sim</Select.Option>
                        <Select.Option value={false}>Não</Select.Option>
                    </SelectField>
                </Col>
            </Row>
        </section>
    )
}