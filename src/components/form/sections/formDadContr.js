import React from 'react'
import { Divider, Form, Row, Col, Input } from 'antd'
import { Controller } from 'react-hook-form';

import {
    _13COD_OP_CNPJ, _14NOME_CONT, _15COD_CNES
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
        <section id="dados-do-contratado-executante">
            <Divider orientation="left" style={{ marginBottom: '30px', fontSize: "20px", fontWeight: "bold" }}>Dados do Contratado Executante</Divider>
            <Row align='bottom' gutter={[10, 10]}>
                <Col className="coluna">
                    <InputField name={_13COD_OP_CNPJ} label="13 - Código na Operadora/CNPJ" />
                </Col>
                <Col className="coluna">
                    <InputField name={_14NOME_CONT} label="14 - Nome do Contratado" />
                </Col>
                <Col className="coluna">
                    <InputField name={_15COD_CNES} label="15 - Código CNES" span={1} />
                </Col>
            </Row>
        </section>
    )

}