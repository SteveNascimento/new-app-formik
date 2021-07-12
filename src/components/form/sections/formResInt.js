import React from 'react'
import { Input, DatePicker, Form } from 'formik-antd'
import { Row, Col } from 'antd'

import {
    _1REG_ANS, _3GUIA_SOLIC_INT, _2GN_GUIA_PREST, _4DT_DE_AUT,
    _5SENHA_GUI_RES_INT, _6VAL_DE_SENHA, _7N_GUIA_OP
} from '../fieldsNames'


export default function FormResInt() {

    return (
        <section id="guia-resumo-internacao">
            <Row align='bottom' gutter={[10, 10]}>
                <Col className="coluna">
                    <Form.Item label="1 - Registro ANS" name={_1REG_ANS}>
                        <Input name={_1REG_ANS} type="text" />
                    </Form.Item>
                </Col>
                <Col className="coluna">
                    <Form.Item label="3 - Guia Solicitação de Internação" name={_3GUIA_SOLIC_INT}>
                        <Input name={_3GUIA_SOLIC_INT} type="text" />
                    </Form.Item>
                </Col>
                <Col className="coluna">
                    <Form.Item name={_2GN_GUIA_PREST} label="2 - Nº Guia no Prestador">
                        <Input name={_2GN_GUIA_PREST} type="text" />
                    </Form.Item>
                </Col>
                <Col className="coluna">
                    <Form.Item name={_4DT_DE_AUT} label="4 - Data da Autorização">
                        <DatePicker name={_4DT_DE_AUT} placeholder="Data" />
                    </Form.Item>
                </Col>
                <Col className="coluna">
                    <Form.Item name={_5SENHA_GUI_RES_INT} label="5 - Senha">
                        <Input.Password name={_5SENHA_GUI_RES_INT} type="text" />
                    </Form.Item>
                </Col>
                <Col className="coluna">
                    <Form.Item name={_6VAL_DE_SENHA} label="6 - Validade da Senha">
                        <DatePicker name={_6VAL_DE_SENHA} placeholder="Data" />
                    </Form.Item>
                </Col>
                <Col className="coluna">
                    <Form.Item name={_7N_GUIA_OP} label="7 - Nº Guia Operadora">
                        <Input name={_7N_GUIA_OP} type="text" />
                    </Form.Item>
                </Col>
            </Row>
        </section>
    )
}

/* <Descriptions style={{ margin: "10px 0px" }} bordered size="small" column={{ xxl: 4, xl: 3, lg: 2, md: 2, sm: 1, xs: 1 }}>
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
</Descriptions> */