import React from 'react'
import { Divider, Form, Row, Col } from 'antd'
import { Input } from 'formik-antd'

import {
    _13COD_OP_CNPJ, _14NOME_CONT, _15COD_CNES
} from '../fieldsNames'


export default function FormDadBenef() {


    return (
        <section id="dados-do-contratado-executante">
            <Divider orientation="left" style={{ marginBottom: '30px', fontSize: "20px", fontWeight: "bold" }}>Dados do Contratado Executante</Divider>
            <Row align='bottom' gutter={[10, 10]}>
                <Col className="coluna">
                    <Form.Item name={_13COD_OP_CNPJ} label="13 - Código na Operadora/CNPJ">
                        <Input name={_13COD_OP_CNPJ} type="text" />
                    </Form.Item>
                </Col>
                <Col className="coluna">
                    <Form.Item name={_14NOME_CONT} label="14 - Nome do Contratado" >
                        <Input name={_14NOME_CONT} type="text" />
                    </Form.Item>
                </Col>
                <Col className="coluna">
                    <Form.Item name={_15COD_CNES} label="15 - Código CNES" span={1}>
                        <Input name={_15COD_CNES} type="text" />
                    </Form.Item>
                </Col>
            </Row>
        </section>
    )

}