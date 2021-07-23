import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { Form, Button } from 'antd'
import './form.css'
import { validationSchema } from './validationSchema'
import { defaultValues } from './defaultValues'
import { yupResolver } from '@hookform/resolvers/yup';
/* import { submitForm } from '../../services/submit-service' */

import FormResInt from './sections/formResInt'
/* import FormDadBenef from './sections/formDadBenef'
import FormDadContr from './sections/formDadContr'
import FormDadInt from './sections/formDadInt'
import FormDec from './sections/formDec'
import FormProc from './sections/formProc'
import FormId from './sections/formId'
import FormTotals from './sections/formTotals'
import FormOtherProc from './sections/formOtherProc'
import FormTotalsOtherProc from './sections/formTotalsOtherProc' */

const Forms = () => {

    const registro = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: defaultValues
    })

    const onSubmit = (values) => {
        console.log(values);
    }

    return (
        <FormProvider {...registro} >
            <Form layout="vertical"
                onFinish={registro.handleSubmit(onSubmit)}
            >
                <h2 style={{ textAlign: "center", margin: "20px" }}>
                    Guia de Resumo de Internação
                </h2>

                <FormResInt />

                {/* <FormDadBenef />
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
                <Button htmlType='submit' type='primary' >add</Button>
            </Form>
        </FormProvider>
    )
}
export default Forms
