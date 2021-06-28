import React, { useState } from 'react'
import { Descriptions, Button } from 'antd';
import { Formik, useField } from 'formik'
import { Form, Input, Select } from 'formik-antd'
import * as Yup from 'yup';
import './form.css'
import * as Service from '../services/submit-service'


const MyTextInput = ({ ...props }) => {
    const [field, meta] = useField(props)
    return (
        <>
            <Input {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    )
}

const formSchema = Yup.object().shape({})

export default function Forms() {

    const [sending, setSending] = useState(false);

    const data = {
        name: "Steve"
    }

    const submit = async () => {
        setSending(true)
        await Service.submitForm(data)
        setSending(false)
    }

    return (
        <div>
            <Formik
                initialValues={{
                    guiaSolicitInt: "",
                }}
                validationSchema={formSchema}
            >
                <Form>
                    <section id="guia-resumo-internacao">
                        <Descriptions style={{ margin: "10px 0px" }} bordered size="small" column={{ xxl: 4, xl: 3, lg: 2, md: 2, sm: 1, xs: 1 }}>
                            <Descriptions.Item label="1 - Registro ANS">
                                330281
                            </Descriptions.Item>
                            <Descriptions.Item label="3 - Guia Solicitação de Internação" >
                                <MyTextInput name="guiaSolicitInt" type="text" />
                            </Descriptions.Item>
                            <Descriptions.Item label="2 - Nº Guia no Prestador" >
                                <MyTextInput name="gnGuiaPrest" type="text" />
                            </Descriptions.Item>
                            <Descriptions.Item label="4 - Data da Autorização" >
                                <MyTextInput name="dtDeAut" type="text" />
                            </Descriptions.Item>
                            <Descriptions.Item label="5 - Senha" >
                                <MyTextInput name="senha" type="text" />
                            </Descriptions.Item>
                            <Descriptions.Item label="6 - Validade da Senha" >
                                <MyTextInput name="valDeSenha" type="text" />
                            </Descriptions.Item>
                            <Descriptions.Item label="7 - Nº Guia Operadora" >
                                <MyTextInput name="nGuiaOp" type="text" />
                            </Descriptions.Item>
                        </Descriptions>
                    </section>
                    <section id="dados-do-beneficiario">
                        <Descriptions style={{ margin: "10px 0px" }} title="Dados do Beneficiário" bordered size="small" column={{ xxl: 4, xl: 3, lg: 2, md: 2, sm: 1, xs: 1 }}>
                            <Descriptions.Item label="8 - Número da Carteira" >
                                <MyTextInput name="numCart" type="text" />
                            </Descriptions.Item>
                            <Descriptions.Item label="9 - Validade da Carteira" >
                                <MyTextInput name="valCart" type="text" />
                            </Descriptions.Item>
                            <Descriptions.Item label="10 - Nome" >
                                <MyTextInput name="nomeBenef" type="text" />
                            </Descriptions.Item>
                            <Descriptions.Item label="11 - Cartão Nacional de Saúde" >
                                <MyTextInput name="cartNacSaud" type="text" />
                            </Descriptions.Item>
                            <Descriptions.Item label="12 - Atendimento a RN" >
                                <Select
                                    name="atARN"
                                    placeholder="Atendimento a RN"
                                >
                                    <Select.Option value={true}>Sim</Select.Option>
                                    <Select.Option value={false}>Não</Select.Option>
                                </Select>
                            </Descriptions.Item>
                        </Descriptions>
                    </section>
                    <section id="dados-do-contratado-executante">
                        <Descriptions style={{ margin: "10px 0px" }} title="Dados do Contratado Executante" bordered size="small" column={{ xxl: 4, xl: 3, lg: 2, md: 2, sm: 1, xs: 1 }}>
                            <Descriptions.Item label="8 - Número da Carteira" >
                                <MyTextInput name="numCart" type="text" />
                            </Descriptions.Item>
                            <Descriptions.Item label="9 - Validade da Carteira" >
                                <MyTextInput name="valCart" type="text" />
                            </Descriptions.Item>
                            <Descriptions.Item label="10 - Nome" >
                                <MyTextInput name="nomeBenef" type="text" />
                            </Descriptions.Item>
                            <Descriptions.Item label="11 - Cartão Nacional de Saúde" >
                                <MyTextInput name="cartNacSaud" type="text" />
                            </Descriptions.Item>
                            <Descriptions.Item label="12 - Atendimento a RN" >
                                <Select
                                    name="atARN"
                                    placeholder="Atendimento a RN"
                                >
                                    <Select.Option value={true}>Sim</Select.Option>
                                    <Select.Option value={false}>Não</Select.Option>
                                </Select>
                            </Descriptions.Item>
                        </Descriptions>
                    </section>
                </Form>
            </Formik>

            <Button loading={sending} type="primary" className="submit" onClick={submit}>Enviar</Button>
        </div>
    )
}