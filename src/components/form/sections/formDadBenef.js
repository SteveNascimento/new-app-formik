import React from 'react'
import { Divider, Row, Col } from 'antd'
import { Input, Select, DatePicker, Form } from 'formik-antd'

import {
    _8NUM_CART, _9VAL_CART, _10NOME_BENEF, _11CART_NAC_SAUD,
    _12AT_A_RN
} from '../fieldsNames'


export default function FormDadBenef() {

    return (
        <section id="dados-do-beneficiario">
            <Divider orientation="left" style={{ marginBottom: '30px', fontSize: "20px", fontWeight: "bold" }}>Dados do Beneficiário</Divider>
            <Row align='bottom' gutter={[10, 10]}>
                <Col className="coluna" >
                    <Form.Item name={_8NUM_CART} label="8 - Número da Carteira" >
                        <Input name={_8NUM_CART} type="text" />
                    </Form.Item>
                </Col>
                <Col className="coluna">
                    <Form.Item name={_9VAL_CART} label="9 - Validade da Carteira" >
                        <DatePicker.MonthPicker name={_9VAL_CART} placeholder="Data" />
                    </Form.Item>
                </Col>
                <Col className="coluna">
                    <Form.Item name={_10NOME_BENEF} label="10 - Nome" >
                        <Input name={_10NOME_BENEF} type="text" />
                    </Form.Item>
                </Col>
                <Col className="coluna">
                    <Form.Item name={_11CART_NAC_SAUD} label="11 - Cartão Nacional de Saúde" >
                        <Input name={_11CART_NAC_SAUD} type="text" />
                    </Form.Item>
                </Col>
                <Col className="coluna">
                    <Form.Item name={_12AT_A_RN} label="12 - Atendimento a RN" >
                        <Select
                            name={_12AT_A_RN}
                            placeholder="Atendimento a RN"
                        >
                            <Select.Option value={true}>Sim</Select.Option>
                            <Select.Option value={false}>Não</Select.Option>
                        </Select>
                    </Form.Item>
                </Col>
            </Row>

        </section>
    )

}

/* <Descriptions style={{ margin: "10px 0px" }} bordered size="small" column={{ xxl: 4, xl: 3, lg: 2, md: 2, sm: 1, xs: 1 }}>

    <Descriptions.Item label="8 - Número da Carteira" >
        <MyTextInput name={_8NUM_CART} type="text" />
    </Descriptions.Item>
    <Descriptions.Item label="9 - Validade da Carteira" >
        <DatePicker.MonthPicker name={_9VAL_CART} placeholder="Data" />
    </Descriptions.Item>
    <Descriptions.Item label="10 - Nome" >
        <MyTextInput name={_10NOME_BENEF} type="text" />
    </Descriptions.Item>
    <Descriptions.Item label="11 - Cartão Nacional de Saúde" >
        <MyTextInput name={_11CART_NAC_SAUD} type="text" />
    </Descriptions.Item>
    <Descriptions.Item label="12 - Atendimento a RN" >
        <Select
            name={_12AT_A_RN}
            placeholder="Atendimento a RN"
        >
            <Select.Option value={true}>Sim</Select.Option>
            <Select.Option value={false}>Não</Select.Option>
        </Select>
    </Descriptions.Item>
</Descriptions> */