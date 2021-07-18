import React from 'react'
import { Row, Col } from 'antd'
import { Input, Form } from 'formik-antd'

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

    return (
        <section id="totais" >
            <Row align='bottom' gutter={[10, 10]}>
                <Col className="formTotals" >
                    <Form.Item name={_54TOTAL_PROCED} label="54 - Total Proced (R$)">
                        R$: 4,00
                    </Form.Item>
                </Col>
                <Col className="formTotals">
                    <Form.Item name={_55TOTAL_DIAR} label="55 - Total de Diárias">
                        R$: 4,00
                    </Form.Item>
                </Col>
                <Col className="formTotals">
                    <Form.Item name={_56TOTAL_TAXAS_ALUG} label="56 - Total Taxas/Aluguéis">
                        R$: 4,00
                    </Form.Item>
                </Col>
                <Col className="formTotals">
                    <Form.Item name={_57TOTAL_MAT} label="57 - Total Materiais (R$)">
                        R$: 4,00
                    </Form.Item>
                </Col>
                <Col className="formTotals">
                    <Form.Item name={_58TOTAL_OPME} label="58 - Total de OPME (R$)">
                        R$: 4,00
                    </Form.Item>
                </Col>
                <Col className="formTotals">
                    <Form.Item name={_59TOTAL_MEDC} label="59 - Total Medicamentos (R$)">
                        R$: 4,00
                    </Form.Item>
                </Col>
                <Col className="formTotals">
                    <Form.Item name={_60TOTAL_GASES} label="60 - Total Gases (R$)">
                        R$: 4,00
                    </Form.Item>
                </Col>
                <Col className="formTotals">
                    <Form.Item name={_61TOTAL} label="61 - Total (R$)">
                        R$: 4.000,00
                    </Form.Item>
                </Col>
            </Row>
            <Row align='bottom' gutter={[10, 10]}>
                <Col span={10}>
                    <Form.Item name={_81OBS_TOTAL} label="81 - Observação">
                        <Input.TextArea autoSize={true} name={_81OBS_TOTAL} type="text" />
                    </Form.Item>
                </Col>
            </Row>
        </section>
    )

}



/*         <section id="totais" >
            <Descriptions layout="vertical" style={{ margin: "10px 0px" }} bordered size="small" column={{ xxl: 4, xl: 3, lg: 2, md: 2, sm: 1, xs: 1 }}>
                <Descriptions.Item label="54 - Total Proced (R$)">
                    R$: 4,00
                </Descriptions.Item>
                <Descriptions.Item label="55 - Total de Diárias">
                    R$: 4,00
                </Descriptions.Item>
                <Descriptions.Item label="56 - Total Taxas/Aluguéis">
                    R$: 4,00
                </Descriptions.Item>
                <Descriptions.Item label="57 - Total Materiais (R$)">
                    R$: 4,00
                </Descriptions.Item>
                <Descriptions.Item label="58 - Total de OPME (R$)">
                    R$: 4,00
                </Descriptions.Item>
                <Descriptions.Item label="59 - Total Medicamentos (R$)">
                    R$: 4,00
                </Descriptions.Item>
                <Descriptions.Item label="60 - Total Gases (R$)">
                    R$: 4,00
                </Descriptions.Item>
                <Descriptions.Item label="61 - Total (R$)">
                    R$: 4.000,00
                </Descriptions.Item>
            </Descriptions>
            <Descriptions style={{ margin: "10px 0px" }} bordered size="small">
                <Descriptions.Item label="81 - Observação">
                    <Input.TextArea name={_81OBS_TOTAL} type="text" />
                </Descriptions.Item>
            </Descriptions>
        </section> */