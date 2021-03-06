import React from 'react'
import { Row, Col, Input, Form, DatePicker } from 'antd'
import { Controller } from 'react-hook-form'

import {
    _1REG_ANS, _3GUIA_SOLIC_INT, _2GN_GUIA_PREST, _4DT_DE_AUT,
    _5SENHA_GUI_RES_INT, _6VAL_DE_SENHA, _7N_GUIA_OP
} from '../fieldsNames'
export default function FormResInt() {

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

    return (
        <section id="guia-resumo-internacao">
            <Row align='top' gutter={[10, 10]}>
                <Col className="coluna">
                    <InputField label="1 - Registro ANS" name={_1REG_ANS} />
                </Col>
                <Col className="coluna">
                    <InputField label="3 - Guia Solicita????o de Interna????o" name={_3GUIA_SOLIC_INT} />
                </Col>
                <Col className="coluna">
                    <InputField label="2 - N?? Guia no Prestador" name={_2GN_GUIA_PREST} />
                </Col>
                <Col className="coluna">
                    <DatePickerField label="4 - Data da Autoriza????o" name={_4DT_DE_AUT} />
                </Col>
                <Col className="coluna">
                    <InputField label="5 - Senha" name={_5SENHA_GUI_RES_INT} />
                </Col>
                <Col className="coluna">
                    <DatePickerField label="6 - Validade da Senha" name={_6VAL_DE_SENHA} />
                </Col>
                <Col className="coluna">
                    <InputField label="7 - N?? Guia Operadora" name={_7N_GUIA_OP} />
                </Col>
            </Row>
        </section>
    )
}