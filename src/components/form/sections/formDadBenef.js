import React from 'react'
import { DatePicker, Descriptions, Divider, Row, Col, Form } from 'antd'
import { FormItem, Input, Select } from 'formik-antd'

import {
    _8NUM_CART, _9VAL_CART, _10NOME_BENEF, _11CART_NAC_SAUD,
    _12AT_A_RN
} from '../fieldsNames'


export default function FormDadBenef() {

    const MyTextInput = (props) => {
        return (
            <>
                <FormItem name={props.name}>
                    <Input {...props} />
                </FormItem>
            </>
        )
    }


    return (
        <>
            <Divider orientation="left" style={{ fontSize: "20px", fontWeight: "bold" }}>Dados do Beneficiário</Divider>
            <section id="dados-do-beneficiario">
                <Row align='bottom'>
                    <Col span={5} className='coluna'>
                        <Form.Item label='8 - Número da Carteira'>
                            <MyTextInput name={_8NUM_CART} type="text" />
                        </Form.Item>
                    </Col>
                    <Col span={5} className='coluna'>
                        <Form.Item label='9 - Validade da Carteira'>
                            <MyTextInput name={_9VAL_CART} placeholder="Data" />
                        </Form.Item>
                    </Col>
                    <Col span={8} className='coluna'>
                        <Form.Item label='10 - Nome'>
                            <MyTextInput name={_10NOME_BENEF} type="text" />
                        </Form.Item>
                    </Col>
                </Row>

            </section>
        </>
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