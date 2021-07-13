import React, { useState } from 'react'
import { Divider, Button, Row, Col } from 'antd'
import { Form, Input, Select } from 'formik-antd'
import TableDec from './../tables/table-dec'

import {
    _30TIPO_DE_DECL,
    _31CID_OBITO,
    _32NUMERO_DECL,
    _33OBITO_RN
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
        <section id="declaracoes">
            <Divider orientation="left" style={{ fontSize: "20px", fontWeight: "bold" }}>Declarações</Divider>
            <Row align='bottom' gutter={[20, 10]}>
                <Col>
                    <Form.Item name={_30TIPO_DE_DECL} label="30 - Tipo Declaracao" >
                        <Select
                            name={_30TIPO_DE_DECL}
                            placeholder="Tipo de Declaração"
                        >
                            <Select.Option value={1}>Nascimento</Select.Option>
                            <Select.Option value={2}>Obito</Select.Option>
                        </Select>
                    </Form.Item>
                </Col>
                <Col>
                    <Form.Item name={_31CID_OBITO} label="31 - CID Óbito" >
                        <Input name={_31CID_OBITO} type="text" />
                    </Form.Item>
                </Col>
                <Col>
                    <Form.Item name={_32NUMERO_DECL} label="32 - Numero da Declaração" >
                        <Input name={_32NUMERO_DECL} type="text" />
                    </Form.Item>
                </Col>
                <Col>
                    <Form.Item name={_33OBITO_RN} label="33 - Obito do RN" >
                        <Select
                            name={_33OBITO_RN}
                            placeholder='Óbito do RN'
                        >
                            <Select.Option value={true}>Sim</Select.Option>
                            <Select.Option value={false}>Não</Select.Option>
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
            <Button size="small" loading={adding} type="primary" className="add" onClick={adder}>Adicionar</Button>
            <TableDec />
        </section>
    )

}
/*         <section id="declaracoes">
            <Divider orientation="left" style={{ fontSize: "20px", fontWeight: "bold" }}>Declarações</Divider>
            <Descriptions style={{ margin: "10px 0px" }} bordered size="small" column={{ xxl: 4, xl: 3, lg: 2, md: 2, sm: 1, xs: 1 }}>
                <Descriptions.Item label="30 - Tipo Declaracao" >
                    <Select
                        name={_30TIPO_DE_DECL}
                        placeholder="Tipo de Declaração"
                    >
                        <Select.Option value={1}>Nascimento</Select.Option>
                        <Select.Option value={2}>Obito</Select.Option>
                    </Select>
                </Descriptions.Item>
                <Descriptions.Item label="31 - CID Óbito" >
                    <MyTextInput name={_31CID_OBITO} type="text" />
                </Descriptions.Item>
                <Descriptions.Item label="32 - Numero da Declaração" >
                    <MyTextInput name={_32NUMERO_DECL} type="text" />
                </Descriptions.Item>
                <Descriptions.Item label="33 - Obito do RN" >
                    <Select
                        name={_33OBITO_RN}
                        placeholder='Óbito do RN'
                    >
                        <Select.Option value={true}>Sim</Select.Option>
                        <Select.Option value={false}>Não</Select.Option>
                    </Select>
                </Descriptions.Item>
            </Descriptions>
            <Button size="small" loading={adding} type="primary" className="add" onClick={adder}>Adicionar</Button>
            <TableDec />
        </section> */


