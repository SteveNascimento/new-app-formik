import React from 'react'
import { useField } from 'formik'
import { Descriptions } from 'antd'
import { Input } from 'formik-antd'

import {
    GUIA_SOLIC_INT, GN_GUIA_PREST, DT_DE_AUT,
    SENHA_GUI_RES_INT, VAL_DE_SENHA, N_GUIA_OP
} from '../fieldsNames'


export default function FormResInt() {

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


    return (
        <section id="guia-resumo-internacao">
            <Descriptions style={{ margin: "10px 0px" }} bordered size="small" column={{ xxl: 4, xl: 3, lg: 2, md: 2, sm: 1, xs: 1 }}>
                <Descriptions.Item label="1 - Registro ANS">
                    330281
                </Descriptions.Item>
                <Descriptions.Item label="3 - Guia Solicitação de Internação" >
                    <MyTextInput name={GUIA_SOLIC_INT} type="text" />
                </Descriptions.Item>
                <Descriptions.Item label="2 - Nº Guia no Prestador" >
                    <MyTextInput name={GN_GUIA_PREST} type="text" />
                </Descriptions.Item>
                <Descriptions.Item label="4 - Data da Autorização" >
                    <MyTextInput name={DT_DE_AUT} type="text" />
                </Descriptions.Item>
                <Descriptions.Item label="5 - Senha" >
                    <MyTextInput name={SENHA_GUI_RES_INT} type="text" />
                </Descriptions.Item>
                <Descriptions.Item label="6 - Validade da Senha" >
                    <MyTextInput name={VAL_DE_SENHA} type="text" />
                </Descriptions.Item>
                <Descriptions.Item label="7 - Nº Guia Operadora" >
                    <MyTextInput name={N_GUIA_OP} type="text" />
                </Descriptions.Item>
            </Descriptions>
        </section>
    )

}