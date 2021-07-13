import React, { useState } from 'react'
import { Formik } from 'formik'
import { SubmitButton, Form } from 'formik-antd'

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
                    <FormTotalsOtherProc />

                    <SubmitButton loading={submting ? true : false} type="primary" htmlType="submit">
                        Enviar
                    </SubmitButton>
                </Form>
            </Formik>
        </div>
    )
}
export default Forms
