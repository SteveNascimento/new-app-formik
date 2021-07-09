import React, { useState } from 'react'
import { Formik } from 'formik'
import { SubmitButton } from 'formik-antd'
import { Form } from 'antd'

import './form.css'
import { validationSchema } from './validationSchema'
import { defaultValues } from './defaultValues'

import { submitForm } from '../../services/submit-service'

import FormResInt from './sections/formResInt'
import FormDadBenef from './sections/formDadBenef'
import FormDadContr from './sections/formDadContr'
import FormDadInt from './sections/formDadInt'
import FormDec from './sections/formDec'
import FormProc from './sections/formProc'
import FormId from './sections/formId'
import FormTotals from './sections/formTotals'
import FormOtherProc from './sections/formOtherProc'
import FormTotalsOtherProc from './sections/formTotalsOtherProc'

const Forms = () => {

    const [submting, setSubmiting] = useState(false)



    return (
        <div>
            <Formik initialValues={defaultValues} validationSchema={validationSchema}
                onSubmit={async (values) => {
                    setSubmiting(true)
                    await submitForm(values)
                    setSubmiting(false)
                }}
            >

                <Form layout="vertical">
                    <h2 style={{ textAlign: "center", margin: "20px" }}>
                        Guia de Resumo de Internação
                    </h2>
                    <FormResInt />
                    <FormDadBenef />


                    <SubmitButton loading={submting ? true : false} type="primary" htmlType="submit">
                        Enviar
                    </SubmitButton>
                </Form>

            </Formik>
        </div>
    )
}
{/* 
                    <FormDadContr />
                    <FormDadInt />
                    <FormDec />
                    <FormProc />
                    <FormId />
                    <FormTotals />
                    <h2 id="guia-de-outras-despesas" style={{ textAlign: 'center', margin: "40px 0px" }}>
                        Guia de Outras Despesas
                    </h2>
                    <FormOtherProc />
                    <FormTotalsOtherProc /> */}

export default Forms

/* import React from 'react'
import { Form, Row, Col, Input, DatePicker, Divider, Switch } from 'antd'

export default function Formttt() {
    return (
        <Form layout="vertical">
            <Row gutter={[5, 10]} align="bottom">
                <Col span={20}>
                    <Form.Item label="1 - Registro ANS">
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={5}>
                    <Form.Item label="2 - Numero Guia Principal">
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={3}>
                    <Form.Item label="3 - Numero Guia Prestador">
                        <Input placeholder="Teste" />
                    </Form.Item>
                </Col>
                <Col span={3}>
                    <Form.Item label="4 - Data de autorização">
                        <DatePicker />
                    </Form.Item>
                </Col>
                <Col span={3}>
                    <Form.Item label="5 - senha">
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={3}>
                    <Form.Item label="6 - Data de Validade Senha">
                        <DatePicker />
                    </Form.Item>
                </Col>
                <Col span={3}>
                    <Form.Item label="7 - Numero Guia Operadora">
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
            <Divider>Dados do Beneficiario</Divider>
            <Row gutter={[5, 10]}>
                <Col span={5}>
                    <Form.Item label="8 - Numero da Carteira">
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={4}>
                    <Form.Item label="9 - Validade da Carteira">
                        <DatePicker />
                    </Form.Item>
                </Col>
                <Col offset={5} span={10}>
                    <Form.Item label="10 - Nome">
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={4}>
                    <Form.Item label="11 - Cartao Nacional de Saude">
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={3}>
                    <Form.Item label="12 - Atendimento RN">
                        <Switch
                            defaultChecked
                            checkedChildren={'sim'}
                            unCheckedChildren={'não'}
                        />
                    </Form.Item>
                </Col>
            </Row >
        </Form >
    )
} */