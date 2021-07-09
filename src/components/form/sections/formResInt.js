import React from 'react'
import { Descriptions } from 'antd'
import { FormItem, Input, DatePicker } from 'formik-antd'
import { Row, Col, Form } from 'antd'

import {
    _1REG_ANS, _3GUIA_SOLIC_INT, _2GN_GUIA_PREST, _4DT_DE_AUT,
    _5SENHA_GUI_RES_INT, _6VAL_DE_SENHA, _7N_GUIA_OP
} from '../fieldsNames'


export default function FormResInt() {

    const MyTextInput = (props) => {
        return (
            <>
                <FormItem name={props.name}>
                    <Input {...props} />
                </FormItem>
            </>
        )
    }

    const MyPasswordInput = (props) => {
        return (
            <>
                <FormItem name={props.name}>
                    <Input.Password {...props} />
                </FormItem>
            </>
        )
    }

    return (
        <section id="guia-resumo-internacao">

            <Row align='bottom'>
                <Col span={5} className="coluna">
                    <Form.Item label='1 - Registro ANS'>
                        <MyTextInput name={_1REG_ANS} type="text" />
                    </Form.Item>
                </Col>
                <Col span={5} className="coluna">
                    <Form.Item label='3 - Guia Solicitação de Internação'>
                        <MyTextInput name={_3GUIA_SOLIC_INT} type="text" />
                    </Form.Item>
                </Col>
                <Col span={5} className="coluna">
                    <Form.Item label='2 - Nº Guia no Prestador'>
                        <MyTextInput name={_2GN_GUIA_PREST} type="text" />
                    </Form.Item>
                </Col>
            </Row>

        </section>
    )

}
{/* <Descriptions style={{ margin: "10px 0px" }} bordered size="small" column={{ xxl: 4, xl: 3, lg: 2, md: 2, sm: 1, xs: 1 }}>
                <Descriptions.Item label="1 - Registro ANS">
                    <MyTextInput name={_1REG_ANS} type="text" />
                </Descriptions.Item>
                <Descriptions.Item label="3 - Guia Solicitação de Internação" >
                    <MyTextInput name={_3GUIA_SOLIC_INT} type="text" />
                </Descriptions.Item>
                <Descriptions.Item label="2 - Nº Guia no Prestador" >
                    <MyTextInput name={_2GN_GUIA_PREST} type="text" />
                </Descriptions.Item>
                <Descriptions.Item label="4 - Data da Autorização" >
                    <DatePicker name={_4DT_DE_AUT} placeholder="Data" />
                </Descriptions.Item>
                <Descriptions.Item label="5 - Senha" >
                    <MyPasswordInput name={_5SENHA_GUI_RES_INT} type="text" />
                </Descriptions.Item>
                <Descriptions.Item label="6 - Validade da Senha" >
                    <DatePicker name={_6VAL_DE_SENHA} placeholder="Data" />
                </Descriptions.Item>
                <Descriptions.Item label="7 - Nº Guia Operadora" span={1}>
                    <MyTextInput name={_7N_GUIA_OP} type="text" />
                </Descriptions.Item>
            </Descriptions> */}