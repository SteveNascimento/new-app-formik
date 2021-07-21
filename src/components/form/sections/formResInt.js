import React from 'react'
import { Row, Col, Input, Form, DatePicker } from 'antd'

import {
    _1REG_ANS, _3GUIA_SOLIC_INT, _2GN_GUIA_PREST, _4DT_DE_AUT,
    _5SENHA_GUI_RES_INT, _6VAL_DE_SENHA, _7N_GUIA_OP
} from '../fieldsNames'



export default function FormResInt(props) {

    const getChangeHandlerWithValue = name => value => {
        props.reg.setValue(name, value);
    };

    return (
        <section id="guia-resumo-internacao">
            <Row align='bottom' gutter={[10, 10]}>
                <Col className="coluna">
                    <Form.Item label="1 - Registro ANS">
                        <Input {...props.reg.register(_1REG_ANS)} />
                        <p>{props.reg.formState.errors._1regANS?.message}</p>
                    </Form.Item>
                </Col>
                {/* <Col className="coluna">
                    <Form.Item name={_3GUIA_SOLIC_INT} label="3 - Guia Solicitação de Internação">
                        <Input {...props.reg.register(_3GUIA_SOLIC_INT)} />
                    </Form.Item>
                </Col>
                <Col className="coluna">
                    <Form.Item name={_2GN_GUIA_PREST} label="2 - Nº Guia no Prestador">
                        <Input {...props.reg.register(_2GN_GUIA_PREST)} />
                    </Form.Item>
                </Col>
                <Col className="coluna">
                    <Form.Item name={_4DT_DE_AUT} label="4 - Data da Autorização">
                        <DatePicker {...props.reg.register(_4DT_DE_AUT)}
                            onChange={getChangeHandlerWithValue(_4DT_DE_AUT)}
                            placeholder="Data" />
                    </Form.Item>
                </Col>
                <Col className="coluna">
                    <Form.Item name={_5SENHA_GUI_RES_INT} label="5 - Senha">
                        <Input {...props.reg.register(_5SENHA_GUI_RES_INT)} />
                    </Form.Item>
                </Col>
                <Col className="coluna">
                    <Form.Item name={_6VAL_DE_SENHA} label="6 - Validade da Senha">
                        <DatePicker {...props.reg.register(_6VAL_DE_SENHA)}
                            onChange={getChangeHandlerWithValue(_6VAL_DE_SENHA)}
                            placeholder="Data" />
                    </Form.Item>
                </Col>
                <Col className="coluna">
                    <Form.Item name={_7N_GUIA_OP} label="7 - Nº Guia Operadora">
                        <Input {...props.reg.register(_7N_GUIA_OP)} />
                    </Form.Item>
                </Col> */}
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