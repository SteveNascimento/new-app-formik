import React, { useState } from 'react'
import { Collapse, Descriptions, Button } from 'antd';
import { Formik, useField } from 'formik'
import { Form, Input, DatePicker } from 'formik-antd'
import * as Yup from 'yup';
import './form.css'
import * as Service from '../services/submit-service'

const { Panel } = Collapse;

const MyTextInput = ({...props}) => {
    const [field, meta] = useField(props)
    return (
        <>
            <Input {...field} {...props}/>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    )
}

const MyDateInput = ({...props}) => {
    const meta = useField(props)[1]
    return (
        <>
            <DatePicker {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    )
}

const formSchema = Yup.object().shape({
    nomePac: Yup.string()
        .min(2, 'Muito Curto!')
        .max(50, 'Muito Longo!')
        .required('Obrigatório!'),
    dataNascPac: Yup.string()
        .required('Obrigatório!').nullable('Obrigatório!'),
    sintomasPac: Yup.string()
        .min(2, 'Muito Curto!')
        .max(50, 'Muito Longo!')
        .required('Obrigatório!'),
    inicioSintPac: Yup.string()
    .required('Obrigatório!').nullable('Obrigatório!'),
    nomePai: Yup.string()
        .min(2, 'Muito Curto!')
        .max(50, 'Muito Longo!')
        .required('Obrigatório!'),
    dataNascPai: Yup.string()
    .required('Obrigatório!').nullable('Obrigatório!'),
    nomeMae: Yup.string()
        .min(2, 'Muito Curto!')
        .max(50, 'Muito Longo!')
        .required('Obrigatório!'),
    dataNascMae: Yup.string()
    .required('Obrigatório!').nullable('Obrigatório!'),
})

export default function Forms() {

    const [sending, setSending] = useState(false);

    const data = {
        name:"Steve"
    }
    
    const changeForm = (key) => {
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
                    nomePac: "",
                    dataNascPac: null,
                    sintomasPac: "",
                    inicioSintPac: null,
                    nomePai: "",
                    dataNascPai: null,
                    nomeMae: "",
                    dataNascMae: null,
                }}
                validationSchema={formSchema}
            >
                <Form>

                    <Collapse onChange={changeForm}>
                            <Panel header="Informações do Paciente" key="1">
                                <Descriptions title="Paciente" bordered style={{padding:'10px'}}>
                                        <Descriptions.Item label="Nome">
                                            <MyTextInput name="nomePac" placeholder="Nome" type="text"/>
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Data de Nascimento">
                                            <MyDateInput name="dataNascPac" placeholder="Data de Nascimento" />
                                        </Descriptions.Item>
                                </Descriptions>
                                <Descriptions title="Diagnóstico" bordered style={{padding:'10px'}}>
                                    <Descriptions.Item label="Sintomas">
                                        <MyTextInput name="sintomasPac" placeholder="Nome" type="text"/>
                                    </Descriptions.Item>
                                    <Descriptions.Item label="Início dos sintomas">
                                        <MyDateInput name="inicioSintPac" placeholder="Inicio dos sintomas" />
                                    </Descriptions.Item>
                                </Descriptions>
                            </Panel>
                            <Panel header="Família do Paciente" key="2">
                                <Descriptions title="Pais" bordered style={{padding:'10px'}}>
                                    <Descriptions.Item label="Nome do Pai" span={2}>
                                        <MyTextInput name="nomePai" placeholder="Nome" type="text"/>
                                    </Descriptions.Item>
                                    <Descriptions.Item label="Data de Nascimento">
                                        <MyDateInput name="dataNascPai" placeholder="Data de Nascimento" />
                                    </Descriptions.Item>
                                    <Descriptions.Item label="Nome da Mãe" span={2}>
                                        <MyTextInput name="nomeMae" placeholder="Nome" type="text"/>
                                    </Descriptions.Item>
                                    <Descriptions.Item label="Data de Nascimento">
                                        <MyDateInput name="dataNascMae" placeholder="Data de Nascimento" />
                                    </Descriptions.Item>
                                </Descriptions>
                            </Panel>
                    </Collapse>
                </Form>
            </Formik>
            <Button loading={sending} type="primary" className="submit" onClick={submit}>Enviar</Button>
        </div>
    )
}