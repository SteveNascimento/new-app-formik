import React from 'react'
import { Row, Col, Input, Form } from 'antd'
import { Controller } from 'react-hook-form'

import {
    _54TOTAL_PROCED,
    _55TOTAL_DIAR,
    _56TOTAL_TAXAS_ALUG,
    _57TOTAL_MAT,
    _58TOTAL_OPME,
    _59TOTAL_MEDC,
    _60TOTAL_GASES,
    _61TOTAL,
    _81OBS_TOTAL
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

    const InputTextAreaField = (props) => {
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
                            <Input.TextArea {...field} />
                        </Form.Item>
                    )
                }}
            >
            </Controller>
        )
    }

    return (
        <section id="totais" >
            <Row align='top' gutter={[10, 10]}>
                <Col >
                    <InputField name={_54TOTAL_PROCED} label="54 - Total Proced (R$)" />
                </Col>
                <Col>
                    <InputField name={_55TOTAL_DIAR} label="55 - Total de Diárias" />
                </Col>
                <Col>
                    <InputField name={_56TOTAL_TAXAS_ALUG} label="56 - Total Taxas/Aluguéis" />
                </Col>
                <Col>
                    <InputField name={_57TOTAL_MAT} label="57 - Total Materiais (R$)" />
                </Col>
                <Col>
                    <InputField name={_58TOTAL_OPME} label="58 - Total de OPME (R$)" />
                </Col>
                <Col>
                    <InputField name={_59TOTAL_MEDC} label="59 - Total Medicamentos (R$)" />
                </Col>
                <Col>
                    <InputField name={_60TOTAL_GASES} label="60 - Total Gases (R$)" />
                </Col>
                <Col>
                    <InputField name={_61TOTAL} label="61 - Total (R$)" />
                </Col>
            </Row>
            <Row align='top' gutter={[10, 10]}>
                <Col span={10}>
                    <InputTextAreaField name={_81OBS_TOTAL} label="81 - Observação" />
                </Col>
            </Row>
        </section>
    )

}
