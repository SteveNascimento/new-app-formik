import React from 'react'
import { Row, Col, Input, Form } from 'antd'
import { Controller } from 'react-hook-form'

import {
    _117TOTAL_GASES,
    _118TOTAL_MEDC,
    _119TOTAL_MAT,
    _120TOTAL_TAXAS_ALUG,
    _121TOTAL_DIAR,
    _122TOTAL_OPME,
    _123TOTAL,
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

    return (
        <section >
            <Row align='bottom' gutter={[10, 10]}>
                <Col>
                    <InputField name={_117TOTAL_GASES} label="17 - Total Gases" />
                </Col>
                <Col>
                    <InputField name={_118TOTAL_MEDC} label="18 - Total Medicamentos" />
                </Col>
                <Col>
                    <InputField name={_119TOTAL_MAT} label="19 - Total Materiais" />
                </Col>
                <Col>
                    <InputField name={_120TOTAL_TAXAS_ALUG} label="20 - Total Taxas/Alugéis" />
                </Col>
                <Col>
                    <InputField name={_121TOTAL_DIAR} label="21 - Total Diárias" />
                </Col>
                <Col>
                    <InputField name={_122TOTAL_OPME} label="22 - Total de OPME" />
                </Col>
                <Col>
                    <InputField name={_123TOTAL} label="23 - Total GERAL" />
                </Col>
            </Row>
        </section>
    )

}
