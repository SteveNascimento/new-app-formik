import React, { useState } from 'react'
import { Formik } from 'formik'
import { Form, SubmitButton } from 'formik-antd'

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

                <Form>
                    <h2 style={{ textAlign: "center", margin: "20px" }}>
                        Guia de Resumo de Internação
                    </h2>
                    <FormResInt />
                    <FormDadBenef />
                    <FormDadContr />
                    <FormDadInt />
                    <FormDec />
                    <FormProc />
                    <FormId />

                    <SubmitButton loading={submting ? true : false} type="primary" htmlType="submit">
                        Enviar
                    </SubmitButton>
                </Form>

            </Formik>
        </div>
    )
}

export default Forms