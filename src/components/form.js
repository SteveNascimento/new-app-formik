import React, { useState } from 'react'
import { Collapse, Descriptions, Button } from 'antd';
import { Formik, useField } from 'formik'
import { Form, Input, DatePicker } from 'formik-antd'
import * as Yup from 'yup';
import './form.css'
import * as Service from '../services/submit-service'

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
    const [field, meta] = useField(props)
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
                    <Descriptions title="Paciente" bordered >
                            <Descriptions.Item label="Nome">
                                <MyTextInput name="nomePac" placeholder="Nome" type="text"/>
                            </Descriptions.Item>
                            <Descriptions.Item label="Data de Nascimento">
                                <MyDateInput name="dataNascPac" placeholder="Data de Nascimento" />
                            </Descriptions.Item>
                    </Descriptions>
                </Form>
            </Formik>
            <Button loading={sending} type="primary" className="submit" onClick={submit}>Enviar</Button>
        </div>
    )
}